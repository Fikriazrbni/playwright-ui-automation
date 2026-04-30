/**
 * Script: downloadSertifikat.ts
 * Fungsi: Hit API danasyariah untuk download sertifikat PDF
 *
 * Cara pakai:
 *   npx ts-node scripts/downloadSertifikat.ts
 *
 * Token bisa diubah di bagian BEARER_TOKEN atau baca dari .env
 */

import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";

// ─── KONFIGURASI ────────────────────────────────────────────────────────────
// Ganti token ini jika sudah expired (token biasanya berlaku 20-30 menit)
const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRhbmFzeWFyaWFoLmlkXC9uZXdBdXRoXC9sb2dpbiIsImlhdCI6MTc3NzMwNzgxNCwiZXhwIjoxNzc3MzA5MDE0LCJuYmYiOjE3NzczMDc4MTQsImp0aSI6ImFlY29lNjdnVDJlZGl5eHciLCJzdWIiOjI2NzQ2NywidXJ2IjoiOGIxYzc1ZTExZDUxMjNhNWVlYWZiM2Y0Yjc3OGRjYzU0ZmIwNmU5MiIsInVzZXJfaWQiOjI2NzQ2NywidXNlcl9sb2dpbiI6IkxFTkRFUiIsInVzZXJfdHlwZSI6IklORElWSURVIn0.LdjW3fHxv6rexnfcxKlGeKBUHVakm4rYFCxStyoD9Oo";

const API_URL = "https://api.danasyariah.id/newRekening/viewSertifikat";

// Folder output untuk menyimpan file PDF yang didownload
const OUTPUT_DIR = path.resolve(__dirname, "../downloads");
// ─── END KONFIGURASI ─────────────────────────────────────────────────────────

/**
 * Membuat nama file output dengan timestamp agar tidak saling overwrite
 */
function generateOutputFilename(): string {
  const now = new Date();
  const timestamp = now
    .toISOString()
    .replace(/:/g, "-")
    .replace(/\..+/, "");
  return path.join(OUTPUT_DIR, `sertifikat_${timestamp}.pdf`);
}

/**
 * Melakukan POST request ke API dan menyimpan response sebagai file
 */
async function downloadSertifikat(outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const url = new URL(API_URL);

    const options: https.RequestOptions = {
      hostname: url.hostname,
      path: url.pathname,
      method: "POST",
      headers: {
        authorization: `Bearer ${BEARER_TOKEN}`,
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        connection: "keep-alive",
        "content-length": "0",
        origin: "https://lender.danasyariah.id",
        referer: "https://lender.danasyariah.id/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
      },
    };

    console.log(`\n[REQUEST] POST ${API_URL}`);
    console.log(`[OUTPUT]  ${outputPath}\n`);

    const req = https.request(options, (res) => {
      console.log(`[STATUS]  ${res.statusCode} ${res.statusMessage}`);
      console.log(`[HEADERS] content-type: ${res.headers["content-type"]}`);

      // Cek apakah response adalah PDF atau JSON error
      const contentType = res.headers["content-type"] || "";

      const chunks: Buffer[] = [];

      res.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const bodyBuffer = Buffer.concat(chunks);

        // Jika bukan PDF, tampilkan sebagai teks (mungkin error JSON)
        if (!contentType.includes("pdf") && !contentType.includes("octet")) {
          const bodyText = bodyBuffer.toString("utf-8");
          console.log(`\n[RESPONSE BODY]\n${bodyText}`);

          if (res.statusCode === 401) {
            reject(
              new Error(
                "Token expired atau tidak valid. Silakan login ulang dan update BEARER_TOKEN."
              )
            );
          } else {
            reject(
              new Error(
                `Unexpected response (${res.statusCode}): ${bodyText.substring(0, 200)}`
              )
            );
          }
          return;
        }

        // Pastikan folder output ada
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        // Simpan file PDF
        fs.writeFileSync(outputPath, bodyBuffer);
        console.log(
          `\n✅ Sertifikat berhasil didownload! (${bodyBuffer.length} bytes)`
        );
        console.log(`📄 Disimpan di: ${outputPath}`);
        resolve();
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.end();
  });
}

/**
 * Main runner - bisa dipanggil berulang kali
 */
async function main() {
  const outputPath = generateOutputFilename();

  try {
    await downloadSertifikat(outputPath);
  } catch (err) {
    console.error(`\n❌ Error: ${(err as Error).message}`);
    process.exit(1);
  }
}

main();
