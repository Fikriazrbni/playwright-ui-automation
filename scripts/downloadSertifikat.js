#!/usr/bin/env node
/**
 * Script: downloadSertifikat.js
 * Fungsi: Hit API danasyariah untuk download sertifikat PDF
 *
 * Cara pakai (di terminal):
 *   node scripts/downloadSertifikat.js
 *
 * Atau untuk download berkali-kali (misal 3x):
 *   node scripts/downloadSertifikat.js 3
 *
 * CATATAN: Token JWT biasanya expire dalam 20-30 menit.
 * Ganti BEARER_TOKEN di bawah jika sudah expired.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// ─── KONFIGURASI ────────────────────────────────────────────────────────────
// 👇 Ganti token ini jika sudah expired (login ulang, lalu copy dari inspect element)
const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRhbmFzeWFyaWFoLmlkXC9uZXdBdXRoXC9sb2dpbiIsImlhdCI6MTc3NzMwNzgxNCwiZXhwIjoxNzc3MzA5MDE0LCJuYmYiOjE3NzczMDc4MTQsImp0aSI6ImFlY29lNjdnVDJlZGl5eHciLCJzdWIiOjI2NzQ2NywidXJ2IjoiOGIxYzc1ZTExZDUxMjNhNWVlYWZiM2Y0Yjc3OGRjYzU0ZmIwNmU5MiIsInVzZXJfaWQiOjI2NzQ2NywidXNlcl9sb2dpbiI6IkxFTkRFUiIsInVzZXJfdHlwZSI6IklORElWSURVIn0.LdjW3fHxv6rexnfcxKlGeKBUHVakm4rYFCxStyoD9Oo";

const API_HOST = "api.danasyariah.id";
const API_PATH = "/newRekening/viewSertifikat";

// Folder output PDF (akan dibuat otomatis jika belum ada)
const OUTPUT_DIR = path.resolve(__dirname, "../downloads");
// ─── END KONFIGURASI ─────────────────────────────────────────────────────────

/**
 * Generate nama file dengan timestamp supaya tidak overwrite
 */
function generateFilename() {
  const now = new Date();
  const ts = now
    .toISOString()
    .replace(/T/, "_")
    .replace(/:/g, "-")
    .replace(/\..+/, "");
  return path.join(OUTPUT_DIR, `sertifikat_${ts}.pdf`);
}

/**
 * POST ke API dan simpan hasil sebagai file
 */
function downloadSertifikat(outputPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: API_HOST,
      port: 443,
      path: API_PATH,
      method: "POST",
      headers: {
        authorization: `Bearer ${BEARER_TOKEN}`,
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        connection: "keep-alive",
        "content-length": "0",
        origin: "https://lender.danasyariah.id",
        referer: "https://lender.danasyariah.id/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0",
      },
    };

    console.log(`\n📤 POST https://${API_HOST}${API_PATH}`);

    const req = https.request(options, (res) => {
      const statusEmoji = res.statusCode === 200 ? "✅" : "⚠️";
      console.log(
        `${statusEmoji} Status: ${res.statusCode} ${res.statusMessage}`
      );
      console.log(
        `   Content-Type: ${res.headers["content-type"] || "unknown"}`
      );

      const chunks = [];

      res.on("data", (chunk) => chunks.push(chunk));

      res.on("end", () => {
        const body = Buffer.concat(chunks);

        // Periksa apakah response adalah PDF
        const contentType = res.headers["content-type"] || "";
        const isPdf =
          contentType.includes("pdf") || contentType.includes("octet-stream");

        if (!isPdf) {
          // Tampilkan response sebagai teks (kemungkinan error/JSON)
          const text = body.toString("utf-8");
          console.log(`\n📋 Response body:\n${text}`);

          if (res.statusCode === 401) {
            return reject(
              new Error(
                "❌ Token expired! Silakan login ulang di lender.danasyariah.id,\n   copy token baru dari Inspect Element → Network, lalu update BEARER_TOKEN di script ini."
              )
            );
          }
          return reject(
            new Error(
              `Request gagal (${res.statusCode}): ${text.substring(0, 300)}`
            )
          );
        }

        // Buat folder output jika belum ada
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        // Simpan file PDF
        fs.writeFileSync(outputPath, body);
        const sizeKB = (body.length / 1024).toFixed(1);
        console.log(`✅ Tersimpan: ${outputPath} (${sizeKB} KB)`);
        resolve(outputPath);
      });
    });

    req.on("error", (err) => reject(err));
    req.end();
  });
}

/**
 * Main — jalankan sekali atau beberapa kali sesuai argumen
 */
async function main() {
  const count = parseInt(process.argv[2]) || 1;

  console.log(`\n🚀 Download sertifikat — ${count} kali\n${"─".repeat(50)}`);

  let success = 0;
  for (let i = 1; i <= count; i++) {
    if (count > 1) console.log(`\n[${i}/${count}]`);
    const outputPath = generateFilename();
    try {
      await downloadSertifikat(outputPath);
      success++;

      // Jika download lebih dari 1x, beri jeda 1 detik supaya nama file berbeda
      if (i < count) {
        await new Promise((r) => setTimeout(r, 1100));
      }
    } catch (err) {
      console.error(`\n${err.message}`);
      break;
    }
  }

  console.log(`\n${"─".repeat(50)}`);
  console.log(`📂 ${success} file tersimpan di: ${OUTPUT_DIR}`);
}

main();
