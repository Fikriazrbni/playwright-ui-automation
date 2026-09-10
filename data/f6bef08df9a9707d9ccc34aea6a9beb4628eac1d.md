# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saveJob.spec.ts >> Save Job
- Location: tests/saveJob.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[@id="__next"]//div[contains(text(), "Jobs related to")]') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - link "Dealls" [ref=e7] [cursor=pointer]:
            - /url: /
            - img [ref=e9]
          - generic [ref=e18]:
            - listitem [ref=e19]:
              - link "Loker" [ref=e21] [cursor=pointer]:
                - /url: /
            - listitem [ref=e22]:
              - link "Mentoring" [ref=e24] [cursor=pointer]:
                - /url: /mentoring
            - listitem [ref=e25]:
              - link "Perusahaan" [ref=e27] [cursor=pointer]:
                - /url: /karir
            - listitem [ref=e28] [cursor=pointer]: Events
            - listitem [ref=e29]:
              - link "AI CV Analyzer" [ref=e31] [cursor=pointer]:
                - /url: /cv-reviewer
        - generic [ref=e32]:
          - button "Download App Dealls" [ref=e33] [cursor=pointer]
          - generic [ref=e36] [cursor=pointer]:
            - generic [ref=e37]:
              - combobox [ref=e39]
              - generic [ref=e41]:
                - img "IDN" [ref=e42]
                - generic [ref=e43]: IDN
            - generic:
              - img
          - button "Untuk Perusahaan" [ref=e46] [cursor=pointer]:
            - generic [ref=e47]: Untuk Perusahaan
            - img [ref=e48]
          - generic [ref=e50]:
            - link [ref=e51] [cursor=pointer]:
              - /url: /notifications
              - img [ref=e52]
            - button "user photo" [ref=e56] [cursor=pointer]:
              - img "user photo" [ref=e59]
    - main [ref=e60]:
      - generic [ref=e61]:
        - img [ref=e62]
        - img [ref=e67]
        - generic [ref=e74]:
          - 'heading "Cari Lowongan Kerja Pakai Dealls #LebihPasti" [level=1] [ref=e75]'
          - generic [ref=e76]:
            - link "📢 Butuh Cepat" [ref=e77] [cursor=pointer]:
              - /url: /?searchJob=software+engineer&urgentlyNeeded=true
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - generic [ref=e80]: 📢
                  - generic [ref=e81]: Butuh Cepat
                - img [ref=e82]
            - link "🏢 Perusahaan Top" [ref=e84] [cursor=pointer]:
              - /url: /?searchJob=software+engineer&bigCompany=true
              - generic [ref=e85]:
                - generic [ref=e86]:
                  - generic [ref=e87]: 🏢
                  - generic [ref=e88]: Perusahaan Top
                - img [ref=e89]
            - link "💻 Kerja Remote" [ref=e91] [cursor=pointer]:
              - /url: /?searchJob=software+engineer&location=remote
              - generic [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: 💻
                  - generic [ref=e95]: Kerja Remote
                - img [ref=e96]
            - link "💼 MT / ODP" [ref=e98] [cursor=pointer]:
              - /url: /?searchJob=Management+Trainee
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: 💼
                  - generic [ref=e102]: MT / ODP
                - img [ref=e103]
            - link "🎓 Fresh Graduate" [ref=e105] [cursor=pointer]:
              - /url: /?searchJob=software+engineer&lastEducations=0
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - generic [ref=e108]: 🎓
                  - generic [ref=e109]: Fresh Graduate
                - img [ref=e110]
      - generic [ref=e112]:
        - generic [ref=e114]:
          - generic [ref=e115]:
            - generic [ref=e117]:
              - textbox "Cari berdasarkan posisi, perusahaan, & skill" [active] [ref=e118]: software engineer
              - button [ref=e120] [cursor=pointer]:
                - img [ref=e121]
            - generic [ref=e123]:
              - link "Tersimpan" [ref=e124] [cursor=pointer]:
                - /url: /loker/saved
                - img [ref=e126]
                - generic [ref=e129]: Tersimpan
              - link "Terdaftar" [ref=e130] [cursor=pointer]:
                - /url: /loker/applied
                - img [ref=e132]
                - generic [ref=e136]: Terdaftar
          - generic [ref=e137]:
            - generic [ref=e139]:
              - generic [ref=e140] [cursor=pointer]:
                - generic [ref=e141]:
                  - combobox [ref=e143]
                  - generic:
                    - generic: Level
                - generic:
                  - img
              - generic [ref=e144] [cursor=pointer]:
                - generic [ref=e145]:
                  - combobox [ref=e147]
                  - generic:
                    - generic: Jenis
                - generic:
                  - img
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]:
                  - combobox [ref=e151]
                  - generic:
                    - generic: Tipe
                - generic:
                  - img
              - generic [ref=e152] [cursor=pointer]:
                - generic [ref=e153]:
                  - combobox [ref=e155]
                  - generic:
                    - generic: Benefit
                - generic:
                  - img
              - generic [ref=e156] [cursor=pointer]:
                - generic [ref=e157]:
                  - combobox [ref=e159]
                  - generic:
                    - generic: Lokasi
                - generic:
                  - img
              - generic [ref=e160] [cursor=pointer]:
                - generic [ref=e161]:
                  - combobox [ref=e163]
                  - generic:
                    - generic: Gaji
                - generic:
                  - img
              - generic [ref=e164] [cursor=pointer]:
                - generic [ref=e165]:
                  - combobox [ref=e167]
                  - generic:
                    - generic: Industri
                - generic:
                  - img
            - generic [ref=e168]:
              - generic [ref=e169]:
                - switch [ref=e170] [cursor=pointer]
                - button "Lamar Cepat" [ref=e172] [cursor=pointer]
              - generic [ref=e175] [cursor=pointer]:
                - combobox [ref=e177]
                - generic:
                  - generic: Paling relevan
        - heading "Pekerjaan terkait \"software engineer\"" [level=2] [ref=e178]
        - generic [ref=e180]:
          - link "Pelamar Masih Sedikit Logo SIRCLO Software Engineer (AI) SIRCLO Penuh waktu Hybrid • Tangerang Selatan Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 5m lalu" [ref=e181] [cursor=pointer]:
            - /url: /loker/software-engineer-ai~sirclo
            - generic [ref=e182]:
              - generic [ref=e183]:
                - button [ref=e184]:
                  - img [ref=e185]
                - generic [ref=e188]:
                  - img [ref=e189]
                  - text: Pelamar Masih Sedikit
                - generic [ref=e190]:
                  - img "Logo SIRCLO" [ref=e192]
                  - generic [ref=e193]:
                    - heading "Software Engineer (AI)" [level=2] [ref=e194]
                    - generic [ref=e195]:
                      - text: SIRCLO
                      - img [ref=e196]
                - generic [ref=e198]:
                  - generic [ref=e199]:
                    - img [ref=e201]
                    - button "Penuh waktu" [ref=e204]
                  - generic [ref=e205]:
                    - img [ref=e206]
                    - generic [ref=e209]: Hybrid • Tangerang Selatan
                  - generic [ref=e210]:
                    - img [ref=e211]
                    - generic [ref=e213]: Min. 3-5 Years Experience
                  - generic [ref=e214]:
                    - img [ref=e215]
                    - generic [ref=e220]: Tidak Ditampilkan
              - generic [ref=e222]: Rekruter aktif 5m lalu
          - link "Logo PT Esensi Solusi Buana (ESB) Software Engineer (Fullstack) PT Esensi Solusi Buana (ESB) Penuh waktu Hybrid • Tangerang Regency Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 4m lalu" [ref=e223] [cursor=pointer]:
            - /url: /loker/software-engineer-fullstack-4~esb
            - generic [ref=e224]:
              - generic [ref=e225]:
                - button [ref=e226]:
                  - img [ref=e227]
                - generic [ref=e229]:
                  - img "Logo PT Esensi Solusi Buana (ESB)" [ref=e231]
                  - generic [ref=e232]:
                    - heading "Software Engineer (Fullstack)" [level=2] [ref=e233]
                    - generic [ref=e234]: PT Esensi Solusi Buana (ESB)
                - generic [ref=e235]:
                  - generic [ref=e236]:
                    - img [ref=e238]
                    - button "Penuh waktu" [ref=e241]
                  - generic [ref=e242]:
                    - img [ref=e243]
                    - generic [ref=e246]: Hybrid • Tangerang Regency
                  - generic [ref=e247]:
                    - img [ref=e248]
                    - generic [ref=e250]: Min. 1-3 Years Experience
                  - generic [ref=e251]:
                    - img [ref=e252]
                    - generic [ref=e257]: Tidak Ditampilkan
              - generic [ref=e259]: Rekruter aktif 4m lalu
          - link "Logo Durianpay Software Engineer (Fullstack) Durianpay Penuh waktu Hybrid • Jakarta Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 20j lalu" [ref=e260] [cursor=pointer]:
            - /url: /loker/software-engineer-fullstack-3~durianpay-1
            - generic [ref=e261]:
              - generic [ref=e262]:
                - button [ref=e263]:
                  - img [ref=e264]
                - generic [ref=e266]:
                  - img "Logo Durianpay" [ref=e268]
                  - generic [ref=e269]:
                    - heading "Software Engineer (Fullstack)" [level=2] [ref=e270]
                    - generic [ref=e271]:
                      - text: Durianpay
                      - img [ref=e272]
                - generic [ref=e274]:
                  - generic [ref=e275]:
                    - img [ref=e277]
                    - button "Penuh waktu" [ref=e280]
                  - generic [ref=e281]:
                    - img [ref=e282]
                    - generic [ref=e285]: Hybrid • Jakarta
                  - generic [ref=e286]:
                    - img [ref=e287]
                    - generic [ref=e289]: Min. 1-3 Years Experience
                  - generic [ref=e290]:
                    - img [ref=e291]
                    - generic [ref=e296]: Tidak Ditampilkan
              - generic [ref=e298]: Rekruter aktif 20j lalu
          - link "Logo Mitramas Infosys Global Software Engineer (Backend) Mitramas Infosys Global Kontrak On-site • Jakarta Selatan Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 2h lalu" [ref=e299] [cursor=pointer]:
            - /url: /loker/software-engineer-backend-50~mitramas-infosys-global
            - generic [ref=e300]:
              - generic [ref=e301]:
                - button [ref=e302]:
                  - img [ref=e303]
                - generic [ref=e305]:
                  - img "Logo Mitramas Infosys Global" [ref=e307]
                  - generic [ref=e308]:
                    - heading "Software Engineer (Backend)" [level=2] [ref=e309]
                    - generic [ref=e310]:
                      - text: Mitramas Infosys Global
                      - img [ref=e311]
                - generic [ref=e313]:
                  - generic [ref=e314]:
                    - img [ref=e316]
                    - button "Kontrak" [ref=e319]
                  - generic [ref=e320]:
                    - img [ref=e321]
                    - generic [ref=e324]: On-site • Jakarta Selatan
                  - generic [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e328]: Min. 3-5 Years Experience
                  - generic [ref=e329]:
                    - img [ref=e330]
                    - generic [ref=e335]: Tidak Ditampilkan
              - generic [ref=e337]: Rekruter aktif 2h lalu
          - link "Logo IDEKU Senior Software Quality Assurance Engineer IDEKU Penuh waktu Hybrid • Jakarta Min. 5+ Years Experience Tidak Ditampilkan Rekruter aktif 18j lalu" [ref=e338] [cursor=pointer]:
            - /url: /loker/senior-software-quality-assurance-engineer-1~ideku
            - generic [ref=e339]:
              - generic [ref=e340]:
                - button [ref=e341]:
                  - img [ref=e342]
                - generic [ref=e344]:
                  - img "Logo IDEKU" [ref=e346]
                  - generic [ref=e347]:
                    - heading "Senior Software Quality Assurance Engineer" [level=2] [ref=e348]
                    - generic [ref=e349]:
                      - text: IDEKU
                      - img [ref=e350]
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - img [ref=e355]
                    - button "Penuh waktu" [ref=e358]
                  - generic [ref=e359]:
                    - img [ref=e360]
                    - generic [ref=e363]: Hybrid • Jakarta
                  - generic [ref=e364]:
                    - img [ref=e365]
                    - generic [ref=e367]: Min. 5+ Years Experience
                  - generic [ref=e368]:
                    - img [ref=e369]
                    - generic [ref=e374]: Tidak Ditampilkan
              - generic [ref=e376]: Rekruter aktif 18j lalu
          - link "Logo Ukirama Fullstack Software Engineer Ukirama Penuh waktu On-site • Jakarta Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 20j lalu" [ref=e377] [cursor=pointer]:
            - /url: /loker/fullstack-software-engineer~ukirama
            - generic [ref=e378]:
              - generic [ref=e379]:
                - button [ref=e380]:
                  - img [ref=e381]
                - generic [ref=e383]:
                  - img "Logo Ukirama" [ref=e385]
                  - generic [ref=e386]:
                    - heading "Fullstack Software Engineer" [level=2] [ref=e387]
                    - generic [ref=e388]:
                      - text: Ukirama
                      - img [ref=e389]
                - generic [ref=e391]:
                  - generic [ref=e392]:
                    - img [ref=e394]
                    - button "Penuh waktu" [ref=e397]
                  - generic [ref=e398]:
                    - img [ref=e399]
                    - generic [ref=e402]: On-site • Jakarta
                  - generic [ref=e403]:
                    - img [ref=e404]
                    - generic [ref=e406]: Min. 3-5 Years Experience
                  - generic [ref=e407]:
                    - img [ref=e408]
                    - generic [ref=e413]: Tidak Ditampilkan
              - generic [ref=e415]: Rekruter aktif 20j lalu
          - link "Logo PT Sentra Vidya Utama (SEVIMA) Software Quality Assurance Engineer (Surabaya) PT Sentra Vidya Utama (SEVIMA) Penuh waktu On-site • Surabaya Min. 1-3 Years Experience Rp7.000.000 – 9.500.000 Rekruter aktif 19j lalu" [ref=e416] [cursor=pointer]:
            - /url: /loker/software-quality-assurance-engineer-surabaya~pt-sentra-vidya-utama-sevima
            - generic [ref=e417]:
              - generic [ref=e418]:
                - button [ref=e419]:
                  - img [ref=e420]
                - generic [ref=e422]:
                  - img "Logo PT Sentra Vidya Utama (SEVIMA)" [ref=e424]
                  - generic [ref=e425]:
                    - heading "Software Quality Assurance Engineer (Surabaya)" [level=2] [ref=e426]
                    - generic [ref=e427]:
                      - text: PT Sentra Vidya Utama (SEVIMA)
                      - img [ref=e428]
                - generic [ref=e430]:
                  - generic [ref=e431]:
                    - img [ref=e433]
                    - button "Penuh waktu" [ref=e436]
                  - generic [ref=e437]:
                    - img [ref=e438]
                    - generic [ref=e441]: On-site • Surabaya
                  - generic [ref=e442]:
                    - img [ref=e443]
                    - generic [ref=e445]: Min. 1-3 Years Experience
                  - generic [ref=e446]:
                    - img [ref=e447]
                    - generic [ref=e452]: Rp7.000.000 – 9.500.000
              - generic [ref=e454]: Rekruter aktif 19j lalu
          - link "Logo Dexa Group Software Engineer (Middle/Senior) Dexa Group Penuh waktu On-site • Tangerang Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 2j lalu" [ref=e455] [cursor=pointer]:
            - /url: /loker/software-engineer-juniormiddlesenior-1~dexa-group
            - generic [ref=e456]:
              - generic [ref=e457]:
                - button [ref=e458]:
                  - img [ref=e459]
                - generic [ref=e461]:
                  - img "Logo Dexa Group" [ref=e463]
                  - generic [ref=e464]:
                    - heading "Software Engineer (Middle/Senior)" [level=2] [ref=e465]
                    - generic [ref=e466]:
                      - text: Dexa Group
                      - img [ref=e467]
                - generic [ref=e469]:
                  - generic [ref=e470]:
                    - img [ref=e472]
                    - button "Penuh waktu" [ref=e475]
                  - generic [ref=e476]:
                    - img [ref=e477]
                    - generic [ref=e480]: On-site • Tangerang Selatan
                  - generic [ref=e481]:
                    - img [ref=e482]
                    - generic [ref=e484]: Min. 1-3 Years Experience
                  - generic [ref=e485]:
                    - img [ref=e486]
                    - generic [ref=e491]: Tidak Ditampilkan
              - generic [ref=e493]: Rekruter aktif 2j lalu
          - link "Logo Durianpay Associate Software Engineer Durianpay Penuh waktu Hybrid • Jakarta Selatan Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 20j lalu" [ref=e494] [cursor=pointer]:
            - /url: /loker/associate-software-engineer-2~durianpay-1
            - generic [ref=e495]:
              - generic [ref=e496]:
                - button [ref=e497]:
                  - img [ref=e498]
                - generic [ref=e500]:
                  - img "Logo Durianpay" [ref=e502]
                  - generic [ref=e503]:
                    - heading "Associate Software Engineer" [level=2] [ref=e504]
                    - generic [ref=e505]:
                      - text: Durianpay
                      - img [ref=e506]
                - generic [ref=e508]:
                  - generic [ref=e509]:
                    - img [ref=e511]
                    - button "Penuh waktu" [ref=e514]
                  - generic [ref=e515]:
                    - img [ref=e516]
                    - generic [ref=e519]: Hybrid • Jakarta Selatan
                  - generic [ref=e520]:
                    - img [ref=e521]
                    - generic [ref=e523]: Min. Fresh Grad
                  - generic [ref=e524]:
                    - img [ref=e525]
                    - generic [ref=e530]: Tidak Ditampilkan
              - generic [ref=e532]: Rekruter aktif 20j lalu
        - generic [ref=e533]:
          - separator [ref=e534]
          - heading "Pekerjaan yang membutuhkan \"software engineer\" sebagai keahlian" [level=2] [ref=e535]
          - link "Logo PT Famili Kita Process Engineer - Water Treatment PT Famili Kita Penuh waktu On-site • Balikpapan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 7h lalu" [ref=e538] [cursor=pointer]:
            - /url: /loker/process-engineer-water-treatment~falentra
            - generic [ref=e539]:
              - generic [ref=e540]:
                - button [ref=e541]:
                  - img [ref=e542]
                - generic [ref=e544]:
                  - img "Logo PT Famili Kita" [ref=e546]
                  - generic [ref=e547]:
                    - heading "Process Engineer - Water Treatment" [level=2] [ref=e548]
                    - generic [ref=e549]:
                      - text: PT Famili Kita
                      - img [ref=e550]
                - generic [ref=e552]:
                  - generic [ref=e553]:
                    - img [ref=e555]
                    - button "Penuh waktu" [ref=e558]
                  - generic [ref=e559]:
                    - img [ref=e560]
                    - generic [ref=e563]: On-site • Balikpapan
                  - generic [ref=e564]:
                    - img [ref=e565]
                    - generic [ref=e567]: Min. 1-3 Years Experience
                  - generic [ref=e568]:
                    - img [ref=e569]
                    - generic [ref=e574]: Tidak Ditampilkan
              - generic [ref=e576]: Rekruter aktif 7h lalu
    - contentinfo [ref=e577]:
      - generic [ref=e578]:
        - generic [ref=e579]:
          - link [ref=e580] [cursor=pointer]:
            - /url: /
            - img [ref=e581]
          - generic [ref=e589]:
            - heading "Website Lowongan Kerja dan Loker Terbaru di Indonesia" [level=2] [ref=e590]
            - 'heading "Dealls adalah job portal dan website cari kerja #1 di Indonesia dengan lowongan kerja berkualitas dari 7.000+ perusahaan terbaik. Dealls juga hadir dengan program mentoring gratis untuk pengembangan karir & CV Reviewer untuk membantu pencari kerja mendapatkan karir impiannya lebih mudah." [level=3] [ref=e591]'
            - generic [ref=e592]: Dapatkan kesempatan pekerjaan baru & belajar dari Mentor terbaik di Indonesia
            - generic [ref=e593]: "Unduh Dealls: Jobs & Mentoring"
          - generic [ref=e594]:
            - link "Download Dealls Jobs on Google Play Store" [ref=e595] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
              - img [ref=e596]
            - link "Download Dealls Jobs on Apple App Store" [ref=e620] [cursor=pointer]:
              - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
              - img [ref=e621]
        - generic [ref=e647]:
          - generic [ref=e648]:
            - heading "Loker" [level=3] [ref=e649]
            - generic [ref=e650]:
              - link "Loker berdasarkan Industri" [ref=e651] [cursor=pointer]:
                - /url: /loker/industri
              - link "Loker berdasarkan Lokasi" [ref=e652] [cursor=pointer]:
                - /url: /loker/lokasi
              - link "Loker berdasarkan Posisi" [ref=e653] [cursor=pointer]:
                - /url: /loker/posisi
                - text: Loker berdasarkan
                - text: Posisi
              - link "Loker Penuh Waktu" [ref=e654] [cursor=pointer]:
                - /url: /loker/tipe/loker-full-time
              - link "Loker Kontrak" [ref=e655] [cursor=pointer]:
                - /url: /loker/tipe/loker-kontrak
              - link "Loker Paruh Waktu" [ref=e656] [cursor=pointer]:
                - /url: /loker/tipe/loker-part-time
              - link "Loker Magang" [ref=e657] [cursor=pointer]:
                - /url: /loker/tipe/loker-magang
              - link "Loker Freelance" [ref=e658] [cursor=pointer]:
                - /url: /loker/tipe/loker-freelance
              - link "Loker Populer" [ref=e659] [cursor=pointer]:
                - /url: /loker/populer
          - generic [ref=e660]:
            - heading "Untuk Perusahaan" [level=3] [ref=e661]
            - generic [ref=e662]:
              - link "ATS & Job Portal untuk Perusahaan" [ref=e663] [cursor=pointer]:
                - /url: /pasang-loker-gratis
              - 'link "Kantorku: Fast, reliable & intuitive HRIS" [ref=e664] [cursor=pointer]':
                - /url: https://kantorku.id/
              - link "Jadwalkan Demo" [ref=e665] [cursor=pointer]:
                - /url: /pasang-loker-gratis#employer-contact-form
              - link "Harga" [ref=e666] [cursor=pointer]:
                - /url: /pasang-loker-gratis/pricing
        - generic [ref=e667]:
          - generic [ref=e668]:
            - heading "Hubungi Kami" [level=3] [ref=e669]
            - generic [ref=e671]:
              - link [ref=e672] [cursor=pointer]:
                - /url: https://www.instagram.com/dealls.jobs/
                - img [ref=e673]
              - link [ref=e675] [cursor=pointer]:
                - /url: https://twitter.com/DeallsJobs/
                - img [ref=e676]
              - link [ref=e678] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/dealls/
                - img [ref=e679]
          - generic [ref=e681]:
            - heading "Tentang Dealls" [level=3] [ref=e682]
            - generic [ref=e683]:
              - link "Cerita Kami" [ref=e684] [cursor=pointer]:
                - /url: /about
              - link "Blog" [ref=e685] [cursor=pointer]:
                - /url: https://dealls.com/pengembangan-karir
              - link "Gabung dengan Tim Kami" [ref=e686] [cursor=pointer]:
                - /url: https://sh.dealls.com/dealls-career
              - link "Kebijakan Pribadi" [ref=e687] [cursor=pointer]:
                - /url: /privacy-policies
              - link "Syarat & Kondisi Dealls Group" [ref=e688] [cursor=pointer]:
                - /url: /terms-and-condition
              - link "Syarat & Kondisi KantorKu" [ref=e689] [cursor=pointer]:
                - /url: https://kantorku.id/terms-and-condition
      - generic [ref=e690]: © 2026 Dealls. All rights reserved
  - alert [ref=e691]: Info Lowongan Kerja & Peluang Karir Terbaru September 2026 | Dealls
```

# Test source

```ts
  1   | import { Page, Locator, expect, test } from "@playwright/test";
  2   | import { ReportHelper } from "../utils/ReportHelper";
  3   | 
  4   | 
  5   | export class DeallsPage {
  6   |     readonly page: Page;
  7   |     readonly loginBtn: Locator;
  8   |     readonly inputEmailBox: Locator;
  9   |     readonly inputPasswordBox: Locator;
  10  |     readonly submitBtn: Locator;
  11  |     readonly homePageText: Locator;
  12  |     readonly profileBtn: Locator;
  13  |     readonly myProfileBtn: Locator;
  14  |     readonly detailProfileName: Locator;
  15  | 
  16  |     //save job
  17  |     readonly searchJobInput: Locator;
  18  |     readonly saveJobBtn: Locator
  19  |     readonly jobName: Locator;
  20  |     readonly savedJobProfileDetail: Locator;
  21  |     readonly savedJobList: Locator;
  22  |     readonly textJobRelatedToSearch: Locator;
  23  |     readonly searchResultJobTitles: Locator;
  24  |     readonly searchJobBtn: Locator;
  25  |     savedJobTitle: string = '';
  26  | 
  27  |     constructor(page: Page) {
  28  |         this.page = page;
  29  |         this.loginBtn = page.locator('xpath=//*[@id="dealls-navbar-login-btn"]')
  30  |         this.inputEmailBox = page.locator('xpath=//*[@id="basic_email"]')
  31  |         this.inputPasswordBox = page.locator('xpath=//*[@id="basic_password"]')
  32  |         this.submitBtn = page.locator('xpath=//button[@type="submit"]')
  33  |         this.homePageText = page.locator('//h1[contains(text(), "Cari Lowongan Kerja Pakai Dealls")]')
  34  |         this.profileBtn = page.locator('xpath=//*[@id="dropdown-area"]')
  35  |         this.myProfileBtn = page.locator('xpath=//*[@id="dropdown-area"]//span[contains(text(), "Profil")]')
  36  |         this.detailProfileName = page.locator('xpath=//*[@id="__next"]//span[contains(text(), "Fikri")]')
  37  | 
  38  |         //save job
  39  |         this.searchJobInput = page.locator('xpath=//*[@id="searchJob"]')
  40  |         this.saveJobBtn = page.locator('xpath=//*[@id="jobs-container"]/a[1]/div/div[1]/button')
  41  |         this.jobName = page.locator('xpath=//*[@id="jobs-container"]/a[1]//h2')
  42  |         this.savedJobProfileDetail = page.locator('xpath=//*[@id="__next"]//*[contains(text(), "Pekerjaan Tersimpan")]')
  43  |         this.savedJobList = page.locator('xpath=//*[@id="__next"]//div[@class= "relative"]/a/div[2]/div[1]')
  44  |         this.textJobRelatedToSearch = page.locator('xpath=//*[@id="__next"]//div[contains(text(), "Jobs related to")]')
  45  |         this.searchResultJobTitles = page.locator('xpath=//*[@id="jobs-container"]/a//h2')
  46  |         this.searchJobBtn = page.locator('xpath=//*[@id="searchJob"]/following::button[1]')
  47  |     }
  48  | 
  49  |     async waitForLoad() {
  50  |         await this.page.waitForLoadState('networkidle');
  51  |     }
  52  | 
  53  |     async clickLoginButton() {
  54  |         await this.loginBtn.click();
  55  |     }
  56  | 
  57  |     async fillEmailAndPassword(email: string, password: string) {
  58  |         await this.inputEmailBox.fill(email)
  59  |         await this.inputPasswordBox.fill(password)
  60  |         await this.submitBtn.click()
  61  |         await this.homePageText.waitFor()
  62  |     }
  63  | 
  64  |     async validateIsDealls() {
  65  |         // Basic validation to check URL
  66  |         await expect(this.page).toHaveURL(/.*dealls.*/);
  67  |         await expect(this.page).toHaveTitle(/.*Dealls.*/);
  68  |     }
  69  | 
  70  |     async validateSuccessLogin() {
  71  |         await this.profileBtn.click()
  72  |         await this.myProfileBtn.click()
  73  |         await this.detailProfileName.waitFor()
  74  |         const profileName = this.detailProfileName.innerText()
  75  |         test.info().annotations.push({ type: 'info', description: `Profile name found: ${profileName}` });
  76  |     }
  77  | 
  78  |     async searchJob(jobTitle: string) {
  79  |         await this.searchJobInput.waitFor()
  80  |         await this.searchJobInput.click()
  81  |         await this.searchJobInput.fill(jobTitle)
  82  |         await this.page.waitForTimeout(500)
  83  |         await this.searchJobInput.click()
  84  |         await this.searchJobInput.press('Enter')
> 85  |         await this.textJobRelatedToSearch.waitFor()
      |                                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  86  |     }
  87  | 
  88  |     async clickSaveJob() {
  89  |         await this.jobName.first().waitFor()
  90  |         await this.saveJobBtn.first().click()
  91  |         this.savedJobTitle = await this.jobName.first().innerText()
  92  |     }
  93  | 
  94  |     async getSavedJobTitles(): Promise<string[]> {
  95  |         await this.savedJobList.first().waitFor();
  96  |         return await this.savedJobList.allInnerTexts();
  97  |     }
  98  | 
  99  |     async validateSavedJobContains(keyword: string) {
  100 |         const jobTitles = await this.getSavedJobTitles();
  101 |         test.info().annotations.push({ type: 'info', description: `Saved jobs: ${jobTitles.join(', ')}` });
  102 |         const hasMatch = jobTitles.some(title => title.toLowerCase().includes(keyword.toLowerCase()));
  103 |         expect(hasMatch, `Expected at least one job to contain "${keyword}", but got: ${jobTitles.join(', ')}`).toBeTruthy();
  104 |     }
  105 | 
  106 |     async validateSavedJob() {
  107 |         await this.profileBtn.click()
  108 |         await this.myProfileBtn.click()
  109 |         await this.savedJobProfileDetail.click()
  110 |         await this.validateSavedJobContains(this.savedJobTitle);
  111 |     }
  112 | 
  113 |     async validateSearchResults(keyword: string) {
  114 |         await this.searchResultJobTitles.first().waitFor();
  115 |         const titles = await this.searchResultJobTitles.allInnerTexts();
  116 |         test.info().annotations.push({ type: 'info', description: `Search results: ${titles.join(', ')}` });
  117 |         const keywords = keyword.toLowerCase().split(' ');
  118 |         for (const title of titles) {
  119 |             const titleLower = title.toLowerCase();
  120 |             const hasMatch = keywords.some(word => titleLower.includes(word));
  121 |             expect(hasMatch, `"${title}" does not contain any keyword from "${keyword}"`).toBeTruthy();
  122 |         }
  123 |     }
  124 | 
  125 | 
  126 |     async openDealls() {
  127 |         await this.page.goto('https://dealls.com/');
  128 |     }
  129 | }
```