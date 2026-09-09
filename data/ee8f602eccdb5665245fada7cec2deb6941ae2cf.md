# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchJob.spec.ts >> Search Job
- Location: tests/searchJob.spec.ts:4:5

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
              - /url: /?searchJob=developer&urgentlyNeeded=true
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - generic [ref=e80]: 📢
                  - generic [ref=e81]: Butuh Cepat
                - img [ref=e82]
            - link "🏢 Perusahaan Top" [ref=e84] [cursor=pointer]:
              - /url: /?searchJob=developer&bigCompany=true
              - generic [ref=e85]:
                - generic [ref=e86]:
                  - generic [ref=e87]: 🏢
                  - generic [ref=e88]: Perusahaan Top
                - img [ref=e89]
            - link "💻 Kerja Remote" [ref=e91] [cursor=pointer]:
              - /url: /?searchJob=developer&location=remote
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
              - /url: /?searchJob=developer&lastEducations=0
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - generic [ref=e108]: 🎓
                  - generic [ref=e109]: Fresh Graduate
                - img [ref=e110]
      - generic [ref=e112]:
        - generic [ref=e114]:
          - generic [ref=e115]:
            - generic [ref=e117]:
              - textbox "Cari berdasarkan posisi, perusahaan, & skill" [active] [ref=e118]: developer
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
        - heading "Pekerjaan terkait \"developer\"" [level=2] [ref=e178]
        - generic [ref=e180]:
          - link "Pelamar Masih Sedikit Logo SIRCLO People Development Intern SIRCLO Magang Hybrid • Tangerang Selatan Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 1j lalu" [ref=e181] [cursor=pointer]:
            - /url: /loker/people-development-intern-9~sirclo
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
                    - heading "People Development Intern" [level=2] [ref=e194]
                    - generic [ref=e195]:
                      - text: SIRCLO
                      - img [ref=e196]
                - generic [ref=e198]:
                  - generic [ref=e199]:
                    - img [ref=e201]
                    - button "Magang" [ref=e204]
                  - generic [ref=e205]:
                    - img [ref=e206]
                    - generic [ref=e209]: Hybrid • Tangerang Selatan
                  - generic [ref=e210]:
                    - img [ref=e211]
                    - generic [ref=e213]: Min. Sedang Kuliah (Final Year)
                  - generic [ref=e214]:
                    - img [ref=e215]
                    - generic [ref=e220]: Magang Berbayar
              - generic [ref=e222]: Rekruter aktif 1j lalu
          - link "Pelamar Masih Sedikit Logo PT Lawencon Internasional .NET Developer PT Lawencon Internasional Penuh waktu On-site • Jakarta Selatan Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 2m lalu" [ref=e223] [cursor=pointer]:
            - /url: /loker/net-developer-17~pt-lawencon-internasional
            - generic [ref=e224]:
              - generic [ref=e225]:
                - button [ref=e226]:
                  - img [ref=e227]
                - generic [ref=e230]:
                  - img [ref=e231]
                  - text: Pelamar Masih Sedikit
                - generic [ref=e232]:
                  - img "Logo PT Lawencon Internasional" [ref=e234]
                  - generic [ref=e235]:
                    - heading ".NET Developer" [level=2] [ref=e236]
                    - generic [ref=e237]:
                      - text: PT Lawencon Internasional
                      - img [ref=e238]
                - generic [ref=e240]:
                  - generic [ref=e241]:
                    - img [ref=e243]
                    - button "Penuh waktu" [ref=e246]
                  - generic [ref=e247]:
                    - img [ref=e248]
                    - generic [ref=e251]: On-site • Jakarta Selatan
                  - generic [ref=e252]:
                    - img [ref=e253]
                    - generic [ref=e255]: Min. 3-5 Years Experience
                  - generic [ref=e256]:
                    - img [ref=e257]
                    - generic [ref=e262]: Tidak Ditampilkan
              - generic [ref=e264]: Rekruter aktif 2m lalu
          - link "Logo Anteraja Fullstack Developer Anteraja Penuh waktu On-site • Jakarta Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 15j lalu" [ref=e265] [cursor=pointer]:
            - /url: /loker/fullstack-developer-33~anteraja
            - generic [ref=e266]:
              - generic [ref=e267]:
                - button [ref=e268]:
                  - img [ref=e269]
                - generic [ref=e271]:
                  - img "Logo Anteraja" [ref=e273]
                  - generic [ref=e274]:
                    - heading "Fullstack Developer" [level=2] [ref=e275]
                    - generic [ref=e276]:
                      - text: Anteraja
                      - img [ref=e277]
                - generic [ref=e279]:
                  - generic [ref=e280]:
                    - img [ref=e282]
                    - button "Penuh waktu" [ref=e285]
                  - generic [ref=e286]:
                    - img [ref=e287]
                    - generic [ref=e290]: On-site • Jakarta
                  - generic [ref=e291]:
                    - img [ref=e292]
                    - generic [ref=e294]: Min. 1-3 Years Experience
                  - generic [ref=e295]:
                    - img [ref=e296]
                    - generic [ref=e301]: Tidak Ditampilkan
              - generic [ref=e303]: Rekruter aktif 15j lalu
          - link "Logo PT United Family Food Product Development Staff PT United Family Food Penuh waktu On-site • Jakarta Barat Min. 1-3 Years Experience Rp7.000.000 – 8.000.000 Rekruter aktif 2m lalu" [ref=e304] [cursor=pointer]:
            - /url: /loker/product-development-staff-8~pt-united-family-food
            - generic [ref=e305]:
              - generic [ref=e306]:
                - button [ref=e307]:
                  - img [ref=e308]
                - generic [ref=e310]:
                  - img "Logo PT United Family Food" [ref=e312]
                  - generic [ref=e313]:
                    - heading "Product Development Staff" [level=2] [ref=e314]
                    - generic [ref=e315]:
                      - text: PT United Family Food
                      - img [ref=e316]
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - img [ref=e321]
                    - button "Penuh waktu" [ref=e324]
                  - generic [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e329]: On-site • Jakarta Barat
                  - generic [ref=e330]:
                    - img [ref=e331]
                    - generic [ref=e333]: Min. 1-3 Years Experience
                  - generic [ref=e334]:
                    - img [ref=e335]
                    - generic [ref=e340]: Rp7.000.000 – 8.000.000
              - generic [ref=e342]: Rekruter aktif 2m lalu
          - link "Logo Evolene Group Senior Product Development (Food Tech) Evolene Group Penuh waktu On-site • Tangerang Min. 3-5 Years Experience Rp7.000.000 – 9.000.000 Rekruter aktif 39m lalu" [ref=e343] [cursor=pointer]:
            - /url: /loker/senior-product-development~pt-anugrah-inti-makmur-indonesia
            - generic [ref=e344]:
              - generic [ref=e345]:
                - button [ref=e346]:
                  - img [ref=e347]
                - generic [ref=e349]:
                  - img "Logo Evolene Group" [ref=e351]
                  - generic [ref=e352]:
                    - heading "Senior Product Development (Food Tech)" [level=2] [ref=e353]
                    - generic [ref=e354]:
                      - text: Evolene Group
                      - img [ref=e355]
                - generic [ref=e357]:
                  - generic [ref=e358]:
                    - img [ref=e360]
                    - button "Penuh waktu" [ref=e363]
                  - generic [ref=e364]:
                    - img [ref=e365]
                    - generic [ref=e368]: On-site • Tangerang
                  - generic [ref=e369]:
                    - img [ref=e370]
                    - generic [ref=e372]: Min. 3-5 Years Experience
                  - generic [ref=e373]:
                    - img [ref=e374]
                    - generic [ref=e379]: Rp7.000.000 – 9.000.000
              - generic [ref=e381]: Rekruter aktif 39m lalu
          - link "Logo PT Metrodata Electronics Tbk Java Developer PT Metrodata Electronics Tbk Kontrak On-site • Jakarta Barat Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 9m lalu" [ref=e382] [cursor=pointer]:
            - /url: /loker/java-developer-25~pt-metrodata-electronics-tbk
            - generic [ref=e383]:
              - generic [ref=e384]:
                - button [ref=e385]:
                  - img [ref=e386]
                - generic [ref=e388]:
                  - img "Logo PT Metrodata Electronics Tbk" [ref=e390]
                  - generic [ref=e391]:
                    - heading "Java Developer" [level=2] [ref=e392]
                    - generic [ref=e393]:
                      - text: PT Metrodata Electronics Tbk
                      - img [ref=e394]
                - generic [ref=e396]:
                  - generic [ref=e397]:
                    - img [ref=e399]
                    - button "Kontrak" [ref=e402]
                  - generic [ref=e403]:
                    - img [ref=e404]
                    - generic [ref=e407]: On-site • Jakarta Barat
                  - generic [ref=e408]:
                    - img [ref=e409]
                    - generic [ref=e411]: Min. Fresh Grad
                  - generic [ref=e412]:
                    - img [ref=e413]
                    - generic [ref=e418]: Tidak Ditampilkan
              - generic [ref=e420]: Rekruter aktif 9m lalu
          - link "Logo FACETOLOGY Packaging Development Staff FACETOLOGY Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e421] [cursor=pointer]:
            - /url: /loker/packaging-development-staff-1~facetology
            - generic [ref=e422]:
              - generic [ref=e423]:
                - button [ref=e424]:
                  - img [ref=e425]
                - generic [ref=e427]:
                  - img "Logo FACETOLOGY" [ref=e429]
                  - generic [ref=e430]:
                    - heading "Packaging Development Staff" [level=2] [ref=e431]
                    - generic [ref=e432]:
                      - text: FACETOLOGY
                      - img [ref=e433]
                - generic [ref=e435]:
                  - generic [ref=e436]:
                    - img [ref=e438]
                    - button "Penuh waktu" [ref=e441]
                  - generic [ref=e442]:
                    - img [ref=e443]
                    - generic [ref=e446]: On-site • Jakarta Selatan
                  - generic [ref=e447]:
                    - img [ref=e448]
                    - generic [ref=e450]: Min. 1-3 Years Experience
                  - generic [ref=e451]:
                    - img [ref=e452]
                    - generic [ref=e457]: Tidak Ditampilkan
              - generic [ref=e459]: Rekruter aktif 1m lalu
          - link "Logo TikTok TikTok Shop by Tokopedia - Business Development Manager, Semi-Consignment - Indonesia TikTok Penuh waktu On-site • Jakarta Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 7h lalu" [ref=e460] [cursor=pointer]:
            - /url: /loker/tiktok-shop-by-tokopedia-business~tiktok-1
            - generic [ref=e461]:
              - generic [ref=e462]:
                - button [ref=e463]:
                  - img [ref=e464]
                - generic [ref=e466]:
                  - img "Logo TikTok" [ref=e468]
                  - generic [ref=e469]:
                    - heading "TikTok Shop by Tokopedia - Business Development Manager, Semi-Consignment - Indonesia" [level=2] [ref=e470]
                    - generic [ref=e471]:
                      - text: TikTok
                      - img [ref=e472]
                - generic [ref=e474]:
                  - generic [ref=e475]:
                    - img [ref=e477]
                    - button "Penuh waktu" [ref=e480]
                  - generic [ref=e481]:
                    - img [ref=e482]
                    - generic [ref=e485]: On-site • Jakarta
                  - generic [ref=e486]:
                    - img [ref=e487]
                    - generic [ref=e489]: Min. 3-5 Years Experience
                  - generic [ref=e490]:
                    - img [ref=e491]
                    - generic [ref=e496]: Tidak Ditampilkan
              - generic [ref=e498]: Rekruter aktif 7h lalu
          - link "Logo Ku Creatives Unlimited Learning And Development Specialist Ku Creatives Unlimited Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 11j lalu" [ref=e499] [cursor=pointer]:
            - /url: /loker/learning-and-development-specialist-11~ku-creatives-unlimited
            - generic [ref=e500]:
              - generic [ref=e501]:
                - button [ref=e502]:
                  - img [ref=e503]
                - generic [ref=e505]:
                  - img "Logo Ku Creatives Unlimited" [ref=e507]
                  - generic [ref=e508]:
                    - heading "Learning And Development Specialist" [level=2] [ref=e509]
                    - generic [ref=e510]: Ku Creatives Unlimited
                - generic [ref=e511]:
                  - generic [ref=e512]:
                    - img [ref=e514]
                    - button "Penuh waktu" [ref=e517]
                  - generic [ref=e518]:
                    - img [ref=e519]
                    - generic [ref=e522]: On-site • Jakarta Selatan
                  - generic [ref=e523]:
                    - img [ref=e524]
                    - generic [ref=e526]: Min. 1-3 Years Experience
                  - generic [ref=e527]:
                    - img [ref=e528]
                    - generic [ref=e533]: Tidak Ditampilkan
              - generic [ref=e535]: Rekruter aktif 11j lalu
          - link "Logo PT Multipolar Technology Application Developer PT Multipolar Technology Penuh waktu On-site • Tangerang Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 4m lalu" [ref=e536] [cursor=pointer]:
            - /url: /loker/application-developer-5~pt-multipolar-technology
            - generic [ref=e537]:
              - generic [ref=e538]:
                - button [ref=e539]:
                  - img [ref=e540]
                - generic [ref=e542]:
                  - img "Logo PT Multipolar Technology" [ref=e544]
                  - generic [ref=e545]:
                    - heading "Application Developer" [level=2] [ref=e546]
                    - generic [ref=e547]:
                      - text: PT Multipolar Technology
                      - img [ref=e548]
                - generic [ref=e550]:
                  - generic [ref=e551]:
                    - img [ref=e553]
                    - button "Penuh waktu" [ref=e556]
                  - generic [ref=e557]:
                    - img [ref=e558]
                    - generic [ref=e561]: On-site • Tangerang
                  - generic [ref=e562]:
                    - img [ref=e563]
                    - generic [ref=e565]: Min. Fresh Grad
                  - generic [ref=e566]:
                    - img [ref=e567]
                    - generic [ref=e572]: Tidak Ditampilkan
              - generic [ref=e574]: Rekruter aktif 4m lalu
          - link "Logo PT. Mandiri International Technology Full Stack Developer PT. Mandiri International Technology Kontrak On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 2h lalu" [ref=e575] [cursor=pointer]:
            - /url: /loker/full-stack-developer-70~pt-mandiri-international-technology
            - generic [ref=e576]:
              - generic [ref=e577]:
                - button [ref=e578]:
                  - img [ref=e579]
                - generic [ref=e581]:
                  - img "Logo PT. Mandiri International Technology" [ref=e583]
                  - generic [ref=e584]:
                    - heading "Full Stack Developer" [level=2] [ref=e585]
                    - generic [ref=e586]:
                      - text: PT. Mandiri International Technology
                      - img [ref=e587]
                - generic [ref=e589]:
                  - generic [ref=e590]:
                    - img [ref=e592]
                    - button "Kontrak" [ref=e595]
                  - generic [ref=e596]:
                    - img [ref=e597]
                    - generic [ref=e600]: On-site • Jakarta Selatan
                  - generic [ref=e601]:
                    - img [ref=e602]
                    - generic [ref=e604]: Min. 1-3 Years Experience
                  - generic [ref=e605]:
                    - img [ref=e606]
                    - generic [ref=e611]: Tidak Ditampilkan
              - generic [ref=e613]: Rekruter aktif 2h lalu
          - link "Logo SIRCLO Senior Customer Service Development Executive SIRCLO Penuh waktu Hybrid • Tangerang Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1j lalu" [ref=e614] [cursor=pointer]:
            - /url: /loker/senior-customer-service-development-executive~sirclo
            - generic [ref=e615]:
              - generic [ref=e616]:
                - button [ref=e617]:
                  - img [ref=e618]
                - generic [ref=e620]:
                  - img "Logo SIRCLO" [ref=e622]
                  - generic [ref=e623]:
                    - heading "Senior Customer Service Development Executive" [level=2] [ref=e624]
                    - generic [ref=e625]:
                      - text: SIRCLO
                      - img [ref=e626]
                - generic [ref=e628]:
                  - generic [ref=e629]:
                    - img [ref=e631]
                    - button "Penuh waktu" [ref=e634]
                  - generic [ref=e635]:
                    - img [ref=e636]
                    - generic [ref=e639]: Hybrid • Tangerang Selatan
                  - generic [ref=e640]:
                    - img [ref=e641]
                    - generic [ref=e643]: Min. 1-3 Years Experience
                  - generic [ref=e644]:
                    - img [ref=e645]
                    - generic [ref=e650]: Tidak Ditampilkan
              - generic [ref=e652]: Rekruter aktif 1j lalu
          - link "Logo PT Lawencon Internasional Full Stack Developer (Java - React JS) PT Lawencon Internasional Penuh waktu On-site • Jakarta Selatan Min. 3-5 Years Experience Rp8.000.000 – 10.000.000 Rekruter aktif 2m lalu" [ref=e653] [cursor=pointer]:
            - /url: /loker/full-stack-developer-java-react~pt-lawencon-internasional
            - generic [ref=e654]:
              - generic [ref=e655]:
                - button [ref=e656]:
                  - img [ref=e657]
                - generic [ref=e659]:
                  - img "Logo PT Lawencon Internasional" [ref=e661]
                  - generic [ref=e662]:
                    - heading "Full Stack Developer (Java - React JS)" [level=2] [ref=e663]
                    - generic [ref=e664]:
                      - text: PT Lawencon Internasional
                      - img [ref=e665]
                - generic [ref=e667]:
                  - generic [ref=e668]:
                    - img [ref=e670]
                    - button "Penuh waktu" [ref=e673]
                  - generic [ref=e674]:
                    - img [ref=e675]
                    - generic [ref=e678]: On-site • Jakarta Selatan
                  - generic [ref=e679]:
                    - img [ref=e680]
                    - generic [ref=e682]: Min. 3-5 Years Experience
                  - generic [ref=e683]:
                    - img [ref=e684]
                    - generic [ref=e689]: Rp8.000.000 – 10.000.000
              - generic [ref=e691]: Rekruter aktif 2m lalu
          - link "Logo PT. Inovasi Anak Indonesia - PARKEE Android Developer PT. Inovasi Anak Indonesia - PARKEE Kontrak On-site • Jakarta Pusat Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 1h lalu" [ref=e692] [cursor=pointer]:
            - /url: /loker/android-developer-23~pt-inovasi-anak-indonesia-parkee
            - generic [ref=e693]:
              - generic [ref=e694]:
                - button [ref=e695]:
                  - img [ref=e696]
                - generic [ref=e698]:
                  - img "Logo PT. Inovasi Anak Indonesia - PARKEE" [ref=e700]
                  - generic [ref=e701]:
                    - heading "Android Developer" [level=2] [ref=e702]
                    - generic [ref=e703]:
                      - text: PT. Inovasi Anak Indonesia - PARKEE
                      - img [ref=e704]
                - generic [ref=e706]:
                  - generic [ref=e707]:
                    - img [ref=e709]
                    - button "Kontrak" [ref=e712]
                  - generic [ref=e713]:
                    - img [ref=e714]
                    - generic [ref=e717]: On-site • Jakarta Pusat
                  - generic [ref=e718]:
                    - img [ref=e719]
                    - generic [ref=e721]: Min. Fresh Grad
                  - generic [ref=e722]:
                    - img [ref=e723]
                    - generic [ref=e728]: Tidak Ditampilkan
              - generic [ref=e730]: Rekruter aktif 1h lalu
          - link "Logo Kanggo FULLSTACK DEVELOPER Kanggo Penuh waktu On-site • Tangerang Selatan Min. 3-5 Years Experience Rp6.000.000 – 9.000.000 Rekruter aktif 7h lalu" [ref=e731] [cursor=pointer]:
            - /url: /loker/fullstack-developer-32~kanggo
            - generic [ref=e732]:
              - generic [ref=e733]:
                - button [ref=e734]:
                  - img [ref=e735]
                - generic [ref=e737]:
                  - img "Logo Kanggo" [ref=e739]
                  - generic [ref=e740]:
                    - heading "FULLSTACK DEVELOPER" [level=2] [ref=e741]
                    - generic [ref=e742]: Kanggo
                - generic [ref=e743]:
                  - generic [ref=e744]:
                    - img [ref=e746]
                    - button "Penuh waktu" [ref=e749]
                  - generic [ref=e750]:
                    - img [ref=e751]
                    - generic [ref=e754]: On-site • Tangerang Selatan
                  - generic [ref=e755]:
                    - img [ref=e756]
                    - generic [ref=e758]: Min. 3-5 Years Experience
                  - generic [ref=e759]:
                    - img [ref=e760]
                    - generic [ref=e765]: Rp6.000.000 – 9.000.000
              - generic [ref=e767]: Rekruter aktif 7h lalu
          - link "Logo Miniso Store Leader Development Program Miniso Penuh waktu On-site • Jakarta Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 7h lalu" [ref=e768] [cursor=pointer]:
            - /url: /loker/store-leader-development-program-1~miniso
            - generic [ref=e769]:
              - generic [ref=e770]:
                - button [ref=e771]:
                  - img [ref=e772]
                - generic [ref=e774]:
                  - img "Logo Miniso" [ref=e776]
                  - generic [ref=e777]:
                    - heading "Store Leader Development Program" [level=2] [ref=e778]
                    - generic [ref=e779]: Miniso
                - generic [ref=e780]:
                  - generic [ref=e781]:
                    - img [ref=e783]
                    - button "Penuh waktu" [ref=e786]
                  - generic [ref=e787]:
                    - img [ref=e788]
                    - generic [ref=e791]: On-site • Jakarta
                  - generic [ref=e792]:
                    - img [ref=e793]
                    - generic [ref=e795]: Min. 3-5 Years Experience
                  - generic [ref=e796]:
                    - img [ref=e797]
                    - generic [ref=e802]: Tidak Ditampilkan
              - generic [ref=e804]: Rekruter aktif 7h lalu
          - link "Logo GLOW FX BEAUTY Senior Product Development (Skincare) GLOW FX BEAUTY Penuh waktu On-site • Tangerang Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 6m lalu" [ref=e805] [cursor=pointer]:
            - /url: /loker/product-development-19~glowfxbeauty
            - generic [ref=e806]:
              - generic [ref=e807]:
                - button [ref=e808]:
                  - img [ref=e809]
                - generic [ref=e811]:
                  - img "Logo GLOW FX BEAUTY" [ref=e813]
                  - generic [ref=e814]:
                    - heading "Senior Product Development (Skincare)" [level=2] [ref=e815]
                    - generic [ref=e816]:
                      - text: GLOW FX BEAUTY
                      - img [ref=e817]
                - generic [ref=e819]:
                  - generic [ref=e820]:
                    - img [ref=e822]
                    - button "Penuh waktu" [ref=e825]
                  - generic [ref=e826]:
                    - img [ref=e827]
                    - generic [ref=e830]: On-site • Tangerang Selatan
                  - generic [ref=e831]:
                    - img [ref=e832]
                    - generic [ref=e834]: Min. 1-3 Years Experience
                  - generic [ref=e835]:
                    - img [ref=e836]
                    - generic [ref=e841]: Tidak Ditampilkan
              - generic [ref=e843]: Rekruter aktif 6m lalu
          - link "Logo Rentas Media Indonesia PHP Laravel Full Stack Developer Rentas Media Indonesia Penuh waktu Hybrid • Jakarta Selatan Min. Fresh Grad Rp6.000.000 – 9.000.000 Rekruter aktif 7h lalu" [ref=e844] [cursor=pointer]:
            - /url: /loker/php-laravel-full-stack-developer~rentascoid
            - generic [ref=e845]:
              - generic [ref=e846]:
                - button [ref=e847]:
                  - img [ref=e848]
                - generic [ref=e850]:
                  - img "Logo Rentas Media Indonesia" [ref=e852]
                  - generic [ref=e853]:
                    - heading "PHP Laravel Full Stack Developer" [level=2] [ref=e854]
                    - generic [ref=e855]:
                      - text: Rentas Media Indonesia
                      - img [ref=e856]
                - generic [ref=e858]:
                  - generic [ref=e859]:
                    - img [ref=e861]
                    - button "Penuh waktu" [ref=e864]
                  - generic [ref=e865]:
                    - img [ref=e866]
                    - generic [ref=e869]: Hybrid • Jakarta Selatan
                  - generic [ref=e870]:
                    - img [ref=e871]
                    - generic [ref=e873]: Min. Fresh Grad
                  - generic [ref=e874]:
                    - img [ref=e875]
                    - generic [ref=e880]: Rp6.000.000 – 9.000.000
              - generic [ref=e882]: Rekruter aktif 7h lalu
        - generic [ref=e884]:
          - img "Mobile App UI" [ref=e885]
          - generic [ref=e886]:
            - heading "Jangan lewatkan undangan interview dan lowongan terbaru—dapatkan lewat notifikasi aplikasi!" [level=2] [ref=e887]
            - paragraph [ref=e888]: Download aplikasi Dealls sekarang!
          - generic [ref=e889]:
            - img [ref=e891]
            - generic [ref=e894]:
              - link [ref=e895] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
                - img [ref=e896]
              - link [ref=e920] [cursor=pointer]:
                - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
                - img [ref=e921]
        - button "Lebih Banyak" [ref=e949] [cursor=pointer]:
          - generic [ref=e950]: Lebih Banyak
          - img [ref=e951]
        - generic [ref=e953]:
          - separator [ref=e954]
          - heading "Pekerjaan yang membutuhkan \"developer\" sebagai keahlian" [level=2] [ref=e955]
          - generic [ref=e957]:
            - link "Pelamar Masih Sedikit Logo Sinar Mas Agribusiness and Food IT Systems Analyst (Project & Analytics) Sinar Mas Agribusiness and Food Magang On-site • Jakarta Selatan Min. Sedang Kuliah (Non-Final Year) Magang Berbayar Rekruter aktif 8m lalu" [ref=e958] [cursor=pointer]:
              - /url: /loker/it-systems-analyst-project-and~pt-smart-tbk
              - generic [ref=e959]:
                - generic [ref=e960]:
                  - button [ref=e961]:
                    - img [ref=e962]
                  - generic [ref=e965]:
                    - img [ref=e966]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e967]:
                    - img "Logo Sinar Mas Agribusiness and Food" [ref=e969]
                    - generic [ref=e970]:
                      - heading "IT Systems Analyst (Project & Analytics)" [level=2] [ref=e971]
                      - generic [ref=e972]:
                        - text: Sinar Mas Agribusiness and Food
                        - img [ref=e973]
                  - generic [ref=e975]:
                    - generic [ref=e976]:
                      - img [ref=e978]
                      - button "Magang" [ref=e981]
                    - generic [ref=e982]:
                      - img [ref=e983]
                      - generic [ref=e986]: On-site • Jakarta Selatan
                    - generic [ref=e987]:
                      - img [ref=e988]
                      - generic [ref=e990]: Min. Sedang Kuliah (Non-Final Year)
                    - generic [ref=e991]:
                      - img [ref=e992]
                      - generic [ref=e997]: Magang Berbayar
                - generic [ref=e999]: Rekruter aktif 8m lalu
            - link "Pelamar Masih Sedikit Logo PT UNZA VITALIS (a business unit of Wipro Customer Care) Head of e-Commerce PT UNZA VITALIS (a business unit of Wipro Customer Care) Penuh waktu On-site • Jakarta Barat Min. 5+ Years Experience Tidak Ditampilkan Rekruter aktif 15j lalu" [ref=e1000] [cursor=pointer]:
              - /url: /loker/head-of-e-commerce-3~wiprounzaid
              - generic [ref=e1001]:
                - generic [ref=e1002]:
                  - button [ref=e1003]:
                    - img [ref=e1004]
                  - generic [ref=e1007]:
                    - img [ref=e1008]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1009]:
                    - img "Logo PT UNZA VITALIS (a business unit of Wipro Customer Care)" [ref=e1011]
                    - generic [ref=e1012]:
                      - heading "Head of e-Commerce" [level=2] [ref=e1013]
                      - generic [ref=e1014]:
                        - text: PT UNZA VITALIS (a business unit of Wipro Customer Care)
                        - img [ref=e1015]
                  - generic [ref=e1017]:
                    - generic [ref=e1018]:
                      - img [ref=e1020]
                      - button "Penuh waktu" [ref=e1023]
                    - generic [ref=e1024]:
                      - img [ref=e1025]
                      - generic [ref=e1028]: On-site • Jakarta Barat
                    - generic [ref=e1029]:
                      - img [ref=e1030]
                      - generic [ref=e1032]: Min. 5+ Years Experience
                    - generic [ref=e1033]:
                      - img [ref=e1034]
                      - generic [ref=e1039]: Tidak Ditampilkan
                - generic [ref=e1041]: Rekruter aktif 15j lalu
            - link "Pelamar Masih Sedikit Logo PT ITSEC Asia Tbk Sales Lead - Bronyx PT ITSEC Asia Tbk Penuh waktu On-site • Jakarta Min. 5+ Years Experience Tidak Ditampilkan Rekruter aktif 1j lalu" [ref=e1042] [cursor=pointer]:
              - /url: /loker/sales-lead-bronyx-1~pt-itsec-asia-tbk
              - generic [ref=e1043]:
                - generic [ref=e1044]:
                  - button [ref=e1045]:
                    - img [ref=e1046]
                  - generic [ref=e1049]:
                    - img [ref=e1050]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1051]:
                    - img "Logo PT ITSEC Asia Tbk" [ref=e1053]
                    - generic [ref=e1054]:
                      - heading "Sales Lead - Bronyx" [level=2] [ref=e1055]
                      - generic [ref=e1056]:
                        - text: PT ITSEC Asia Tbk
                        - img [ref=e1057]
                  - generic [ref=e1059]:
                    - generic [ref=e1060]:
                      - img [ref=e1062]
                      - button "Penuh waktu" [ref=e1065]
                    - generic [ref=e1066]:
                      - img [ref=e1067]
                      - generic [ref=e1070]: On-site • Jakarta
                    - generic [ref=e1071]:
                      - img [ref=e1072]
                      - generic [ref=e1074]: Min. 5+ Years Experience
                    - generic [ref=e1075]:
                      - img [ref=e1076]
                      - generic [ref=e1081]: Tidak Ditampilkan
                - generic [ref=e1083]: Rekruter aktif 1j lalu
            - link "Pelamar Masih Sedikit Logo Arya Noble Affiliator Management Specialist Arya Noble Penuh waktu On-site • Jakarta Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 1j lalu" [ref=e1084] [cursor=pointer]:
              - /url: /loker/affiliator-management-specialist~arya-noble
              - generic [ref=e1085]:
                - generic [ref=e1086]:
                  - button [ref=e1087]:
                    - img [ref=e1088]
                  - generic [ref=e1091]:
                    - img [ref=e1092]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1093]:
                    - img "Logo Arya Noble" [ref=e1095]
                    - generic [ref=e1096]:
                      - heading "Affiliator Management Specialist" [level=2] [ref=e1097]
                      - generic [ref=e1098]:
                        - text: Arya Noble
                        - img [ref=e1099]
                  - generic [ref=e1101]:
                    - generic [ref=e1102]:
                      - img [ref=e1104]
                      - button "Penuh waktu" [ref=e1107]
                    - generic [ref=e1108]:
                      - img [ref=e1109]
                      - generic [ref=e1112]: On-site • Jakarta
                    - generic [ref=e1113]:
                      - img [ref=e1114]
                      - generic [ref=e1116]: Min. Fresh Grad
                    - generic [ref=e1117]:
                      - img [ref=e1118]
                      - generic [ref=e1123]: Tidak Ditampilkan
                - generic [ref=e1125]: Rekruter aktif 1j lalu
            - link "Pelamar Masih Sedikit Logo BP Consulting Group (BrandPartner) - Strategic Business Consultant Firm Strategy & Growth Marketing Associate BP Consulting Group (BrandPartner) - Strategic Business Consultant Firm Penuh waktu On-site • Surabaya Min. 1-3 Years Experience Rp6.000.000 – 8.000.000 Rekruter aktif 2m lalu" [ref=e1126] [cursor=pointer]:
              - /url: /loker/strategy-and-growth-marketing-associate~bpconsultinggroup
              - generic [ref=e1127]:
                - generic [ref=e1128]:
                  - button [ref=e1129]:
                    - img [ref=e1130]
                  - generic [ref=e1133]:
                    - img [ref=e1134]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1135]:
                    - img "Logo BP Consulting Group (BrandPartner) - Strategic Business Consultant Firm" [ref=e1137]
                    - generic [ref=e1138]:
                      - heading "Strategy & Growth Marketing Associate" [level=2] [ref=e1139]
                      - generic [ref=e1140]:
                        - text: BP Consulting Group (BrandPartner) - Strategic Business Consultant Firm
                        - img [ref=e1141]
                  - generic [ref=e1143]:
                    - generic [ref=e1144]:
                      - img [ref=e1146]
                      - button "Penuh waktu" [ref=e1149]
                    - generic [ref=e1150]:
                      - img [ref=e1151]
                      - generic [ref=e1154]: On-site • Surabaya
                    - generic [ref=e1155]:
                      - img [ref=e1156]
                      - generic [ref=e1158]: Min. 1-3 Years Experience
                    - generic [ref=e1159]:
                      - img [ref=e1160]
                      - generic [ref=e1165]: Rp6.000.000 – 8.000.000
                - generic [ref=e1167]: Rekruter aktif 2m lalu
            - link "Pelamar Masih Sedikit Logo PT Lawencon Internasional Quality Assurance Automation (Katalon) PT Lawencon Internasional Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 2m lalu" [ref=e1168] [cursor=pointer]:
              - /url: /loker/quality-assurance-automation-katalon~pt-lawencon-internasional
              - generic [ref=e1169]:
                - generic [ref=e1170]:
                  - button [ref=e1171]:
                    - img [ref=e1172]
                  - generic [ref=e1175]:
                    - img [ref=e1176]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1177]:
                    - img "Logo PT Lawencon Internasional" [ref=e1179]
                    - generic [ref=e1180]:
                      - heading "Quality Assurance Automation (Katalon)" [level=2] [ref=e1181]
                      - generic [ref=e1182]:
                        - text: PT Lawencon Internasional
                        - img [ref=e1183]
                  - generic [ref=e1185]:
                    - generic [ref=e1186]:
                      - img [ref=e1188]
                      - button "Penuh waktu" [ref=e1191]
                    - generic [ref=e1192]:
                      - img [ref=e1193]
                      - generic [ref=e1196]: On-site • Jakarta Selatan
                    - generic [ref=e1197]:
                      - img [ref=e1198]
                      - generic [ref=e1200]: Min. 1-3 Years Experience
                    - generic [ref=e1201]:
                      - img [ref=e1202]
                      - generic [ref=e1207]: Tidak Ditampilkan
                - generic [ref=e1209]: Rekruter aktif 2m lalu
            - link "Logo PT FCL Internasional Indonesia Event & Brand Activation Supervisor PT FCL Internasional Indonesia Penuh waktu On-site • Jakarta Barat Min. 1-3 Years Experience Rp8.000.000 – 10.000.000 Rekruter aktif 2j lalu" [ref=e1210] [cursor=pointer]:
              - /url: /loker/event-and-brand-activation-supervisor~pt-fcl-internasional-indonesia
              - generic [ref=e1211]:
                - generic [ref=e1212]:
                  - button [ref=e1213]:
                    - img [ref=e1214]
                  - generic [ref=e1216]:
                    - img "Logo PT FCL Internasional Indonesia" [ref=e1218]
                    - generic [ref=e1219]:
                      - heading "Event & Brand Activation Supervisor" [level=2] [ref=e1220]
                      - generic [ref=e1221]:
                        - text: PT FCL Internasional Indonesia
                        - img [ref=e1222]
                  - generic [ref=e1224]:
                    - generic [ref=e1225]:
                      - img [ref=e1227]
                      - button "Penuh waktu" [ref=e1230]
                    - generic [ref=e1231]:
                      - img [ref=e1232]
                      - generic [ref=e1235]: On-site • Jakarta Barat
                    - generic [ref=e1236]:
                      - img [ref=e1237]
                      - generic [ref=e1239]: Min. 1-3 Years Experience
                    - generic [ref=e1240]:
                      - img [ref=e1241]
                      - generic [ref=e1246]: Rp8.000.000 – 10.000.000
                - generic [ref=e1248]: Rekruter aktif 2j lalu
            - link "Logo Jakmall.com HR Generalist (OD & IR) Jakmall.com Penuh waktu Hybrid • Jakarta Barat Min. 3-5 Years Experience Rp6.000.000 – 8.000.000 Rekruter aktif 5m lalu" [ref=e1249] [cursor=pointer]:
              - /url: /loker/hr-generalist-od-and-ir~jakmallcom
              - generic [ref=e1250]:
                - generic [ref=e1251]:
                  - button [ref=e1252]:
                    - img [ref=e1253]
                  - generic [ref=e1255]:
                    - img "Logo Jakmall.com" [ref=e1257]
                    - generic [ref=e1258]:
                      - heading "HR Generalist (OD & IR)" [level=2] [ref=e1259]
                      - generic [ref=e1260]:
                        - text: Jakmall.com
                        - img [ref=e1261]
                  - generic [ref=e1263]:
                    - generic [ref=e1264]:
                      - img [ref=e1266]
                      - button "Penuh waktu" [ref=e1269]
                    - generic [ref=e1270]:
                      - img [ref=e1271]
                      - generic [ref=e1274]: Hybrid • Jakarta Barat
                    - generic [ref=e1275]:
                      - img [ref=e1276]
                      - generic [ref=e1278]: Min. 3-5 Years Experience
                    - generic [ref=e1279]:
                      - img [ref=e1280]
                      - generic [ref=e1285]: Rp6.000.000 – 8.000.000
                - generic [ref=e1287]: Rekruter aktif 5m lalu
            - link "Logo Anteraja Fullstack Developer Anteraja Penuh waktu On-site • Jakarta Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 15j lalu" [ref=e1288] [cursor=pointer]:
              - /url: /loker/fullstack-developer-33~anteraja
              - generic [ref=e1289]:
                - generic [ref=e1290]:
                  - button [ref=e1291]:
                    - img [ref=e1292]
                  - generic [ref=e1294]:
                    - img "Logo Anteraja" [ref=e1296]
                    - generic [ref=e1297]:
                      - heading "Fullstack Developer" [level=2] [ref=e1298]
                      - generic [ref=e1299]:
                        - text: Anteraja
                        - img [ref=e1300]
                  - generic [ref=e1302]:
                    - generic [ref=e1303]:
                      - img [ref=e1305]
                      - button "Penuh waktu" [ref=e1308]
                    - generic [ref=e1309]:
                      - img [ref=e1310]
                      - generic [ref=e1313]: On-site • Jakarta
                    - generic [ref=e1314]:
                      - img [ref=e1315]
                      - generic [ref=e1317]: Min. 1-3 Years Experience
                    - generic [ref=e1318]:
                      - img [ref=e1319]
                      - generic [ref=e1324]: Tidak Ditampilkan
                - generic [ref=e1326]: Rekruter aktif 15j lalu
            - link "Logo Tentang Anak Route To Market Tentang Anak Penuh waktu On-site • Jakarta Pusat Min. 5+ Years Experience Tidak Ditampilkan Rekruter aktif 27m lalu" [ref=e1327] [cursor=pointer]:
              - /url: /loker/route-to-market~tentang-anak
              - generic [ref=e1328]:
                - generic [ref=e1329]:
                  - button [ref=e1330]:
                    - img [ref=e1331]
                  - generic [ref=e1333]:
                    - img "Logo Tentang Anak" [ref=e1335]
                    - generic [ref=e1336]:
                      - heading "Route To Market" [level=2] [ref=e1337]
                      - generic [ref=e1338]:
                        - text: Tentang Anak
                        - img [ref=e1339]
                  - generic [ref=e1341]:
                    - generic [ref=e1342]:
                      - img [ref=e1344]
                      - button "Penuh waktu" [ref=e1347]
                    - generic [ref=e1348]:
                      - img [ref=e1349]
                      - generic [ref=e1352]: On-site • Jakarta Pusat
                    - generic [ref=e1353]:
                      - img [ref=e1354]
                      - generic [ref=e1356]: Min. 5+ Years Experience
                    - generic [ref=e1357]:
                      - img [ref=e1358]
                      - generic [ref=e1363]: Tidak Ditampilkan
                - generic [ref=e1365]: Rekruter aktif 27m lalu
            - link "Logo Evolene Group Senior Product Development (Food Tech) Evolene Group Penuh waktu On-site • Tangerang Min. 3-5 Years Experience Rp7.000.000 – 9.000.000 Rekruter aktif 39m lalu" [ref=e1366] [cursor=pointer]:
              - /url: /loker/senior-product-development~pt-anugrah-inti-makmur-indonesia
              - generic [ref=e1367]:
                - generic [ref=e1368]:
                  - button [ref=e1369]:
                    - img [ref=e1370]
                  - generic [ref=e1372]:
                    - img "Logo Evolene Group" [ref=e1374]
                    - generic [ref=e1375]:
                      - heading "Senior Product Development (Food Tech)" [level=2] [ref=e1376]
                      - generic [ref=e1377]:
                        - text: Evolene Group
                        - img [ref=e1378]
                  - generic [ref=e1380]:
                    - generic [ref=e1381]:
                      - img [ref=e1383]
                      - button "Penuh waktu" [ref=e1386]
                    - generic [ref=e1387]:
                      - img [ref=e1388]
                      - generic [ref=e1391]: On-site • Tangerang
                    - generic [ref=e1392]:
                      - img [ref=e1393]
                      - generic [ref=e1395]: Min. 3-5 Years Experience
                    - generic [ref=e1396]:
                      - img [ref=e1397]
                      - generic [ref=e1402]: Rp7.000.000 – 9.000.000
                - generic [ref=e1404]: Rekruter aktif 39m lalu
            - link "Logo ANTARESTAR Offline Store Manager ANTARESTAR Penuh waktu On-site • Bekasi Min. 3-5 Years Experience Rp10.000.000 – 20.000.000 Rekruter aktif 19j lalu" [ref=e1405] [cursor=pointer]:
              - /url: /loker/offline-store-manager~antarestar
              - generic [ref=e1406]:
                - generic [ref=e1407]:
                  - button [ref=e1408]:
                    - img [ref=e1409]
                  - generic [ref=e1411]:
                    - img "Logo ANTARESTAR" [ref=e1413]
                    - generic [ref=e1414]:
                      - heading "Offline Store Manager" [level=2] [ref=e1415]
                      - generic [ref=e1416]:
                        - text: ANTARESTAR
                        - img [ref=e1417]
                  - generic [ref=e1419]:
                    - generic [ref=e1420]:
                      - img [ref=e1422]
                      - button "Penuh waktu" [ref=e1425]
                    - generic [ref=e1426]:
                      - img [ref=e1427]
                      - generic [ref=e1430]: On-site • Bekasi
                    - generic [ref=e1431]:
                      - img [ref=e1432]
                      - generic [ref=e1434]: Min. 3-5 Years Experience
                    - generic [ref=e1435]:
                      - img [ref=e1436]
                      - generic [ref=e1441]: Rp10.000.000 – 20.000.000
                - generic [ref=e1443]: Rekruter aktif 19j lalu
            - link "Logo Rhapsodie Group Account Manager Rhapsodie Group Penuh waktu On-site • Tangerang Regency Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 32m lalu" [ref=e1444] [cursor=pointer]:
              - /url: /loker/account-manager-129~rhapsodieco
              - generic [ref=e1445]:
                - generic [ref=e1446]:
                  - button [ref=e1447]:
                    - img [ref=e1448]
                  - generic [ref=e1450]:
                    - img "Logo Rhapsodie Group" [ref=e1452]
                    - generic [ref=e1453]:
                      - heading "Account Manager" [level=2] [ref=e1454]
                      - generic [ref=e1455]:
                        - text: Rhapsodie Group
                        - img [ref=e1456]
                  - generic [ref=e1458]:
                    - generic [ref=e1459]:
                      - img [ref=e1461]
                      - button "Penuh waktu" [ref=e1464]
                    - generic [ref=e1465]:
                      - img [ref=e1466]
                      - generic [ref=e1469]: On-site • Tangerang Regency
                    - generic [ref=e1470]:
                      - img [ref=e1471]
                      - generic [ref=e1473]: Min. 1-3 Years Experience
                    - generic [ref=e1474]:
                      - img [ref=e1475]
                      - generic [ref=e1480]: Tidak Ditampilkan
                - generic [ref=e1482]: Rekruter aktif 32m lalu
            - link "Logo PT IBS Buana Sejahtera (Aqobah Travel) Umrah and Hajj Consultant PT IBS Buana Sejahtera (Aqobah Travel) Penuh waktu On-site • Tangerang Selatan Min. 1-3 Years Experience Rp4.000.000 – 7.000.000 Rekruter aktif 7h lalu" [ref=e1483] [cursor=pointer]:
              - /url: /loker/umrah-and-hajj-consultant~pt-ibs-buana-sejahtera
              - generic [ref=e1484]:
                - generic [ref=e1485]:
                  - button [ref=e1486]:
                    - img [ref=e1487]
                  - generic [ref=e1489]:
                    - img "Logo PT IBS Buana Sejahtera (Aqobah Travel)" [ref=e1491]
                    - generic [ref=e1492]:
                      - heading "Umrah and Hajj Consultant" [level=2] [ref=e1493]
                      - generic [ref=e1494]:
                        - text: PT IBS Buana Sejahtera (Aqobah Travel)
                        - img [ref=e1495]
                  - generic [ref=e1497]:
                    - generic [ref=e1498]:
                      - img [ref=e1500]
                      - button "Penuh waktu" [ref=e1503]
                    - generic [ref=e1504]:
                      - img [ref=e1505]
                      - generic [ref=e1508]: On-site • Tangerang Selatan
                    - generic [ref=e1509]:
                      - img [ref=e1510]
                      - generic [ref=e1512]: Min. 1-3 Years Experience
                    - generic [ref=e1513]:
                      - img [ref=e1514]
                      - generic [ref=e1519]: Rp4.000.000 – 7.000.000
                - generic [ref=e1521]: Rekruter aktif 7h lalu
            - link "Logo PT. Bumame Cahaya Medika Sales B2D2C Supervisor PT. Bumame Cahaya Medika Penuh waktu Hybrid • Makassar Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 2h lalu" [ref=e1522] [cursor=pointer]:
              - /url: /loker/sales-b2d2c-supervisor~pt-bumame-cahaya-medika
              - generic [ref=e1523]:
                - generic [ref=e1524]:
                  - button [ref=e1525]:
                    - img [ref=e1526]
                  - generic [ref=e1528]:
                    - img "Logo PT. Bumame Cahaya Medika" [ref=e1530]
                    - generic [ref=e1531]:
                      - heading "Sales B2D2C Supervisor" [level=2] [ref=e1532]
                      - generic [ref=e1533]:
                        - text: PT. Bumame Cahaya Medika
                        - img [ref=e1534]
                  - generic [ref=e1536]:
                    - generic [ref=e1537]:
                      - img [ref=e1539]
                      - button "Penuh waktu" [ref=e1542]
                    - generic [ref=e1543]:
                      - img [ref=e1544]
                      - generic [ref=e1547]: Hybrid • Makassar
                    - generic [ref=e1548]:
                      - img [ref=e1549]
                      - generic [ref=e1551]: Min. 1-3 Years Experience
                    - generic [ref=e1552]:
                      - img [ref=e1553]
                      - generic [ref=e1558]: Tidak Ditampilkan
                - generic [ref=e1560]: Rekruter aktif 2h lalu
            - link "Logo Orang Tua Group Learning Specialist Orang Tua Group Penuh waktu On-site • Jakarta Barat Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 8m lalu" [ref=e1561] [cursor=pointer]:
              - /url: /loker/learning-specialist~pt-cs2-pola-sehat
              - generic [ref=e1562]:
                - generic [ref=e1563]:
                  - button [ref=e1564]:
                    - img [ref=e1565]
                  - generic [ref=e1567]:
                    - img "Logo Orang Tua Group" [ref=e1569]
                    - generic [ref=e1570]:
                      - heading "Learning Specialist" [level=2] [ref=e1571]
                      - generic [ref=e1572]:
                        - text: Orang Tua Group
                        - img [ref=e1573]
                  - generic [ref=e1575]:
                    - generic [ref=e1576]:
                      - img [ref=e1578]
                      - button "Penuh waktu" [ref=e1581]
                    - generic [ref=e1582]:
                      - img [ref=e1583]
                      - generic [ref=e1586]: On-site • Jakarta Barat
                    - generic [ref=e1587]:
                      - img [ref=e1588]
                      - generic [ref=e1590]: Min. Fresh Grad
                    - generic [ref=e1591]:
                      - img [ref=e1592]
                      - generic [ref=e1597]: Tidak Ditampilkan
                - generic [ref=e1599]: Rekruter aktif 8m lalu
            - link "Logo Ku Creatives Unlimited Learning And Development Specialist Ku Creatives Unlimited Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 11j lalu" [ref=e1600] [cursor=pointer]:
              - /url: /loker/learning-and-development-specialist-11~ku-creatives-unlimited
              - generic [ref=e1601]:
                - generic [ref=e1602]:
                  - button [ref=e1603]:
                    - img [ref=e1604]
                  - generic [ref=e1606]:
                    - img "Logo Ku Creatives Unlimited" [ref=e1608]
                    - generic [ref=e1609]:
                      - heading "Learning And Development Specialist" [level=2] [ref=e1610]
                      - generic [ref=e1611]: Ku Creatives Unlimited
                  - generic [ref=e1612]:
                    - generic [ref=e1613]:
                      - img [ref=e1615]
                      - button "Penuh waktu" [ref=e1618]
                    - generic [ref=e1619]:
                      - img [ref=e1620]
                      - generic [ref=e1623]: On-site • Jakarta Selatan
                    - generic [ref=e1624]:
                      - img [ref=e1625]
                      - generic [ref=e1627]: Min. 1-3 Years Experience
                    - generic [ref=e1628]:
                      - img [ref=e1629]
                      - generic [ref=e1634]: Tidak Ditampilkan
                - generic [ref=e1636]: Rekruter aktif 11j lalu
            - link "Logo CFACTORY.CO Business Unit Manager CFACTORY.CO Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Rp6.500.000 – 8.000.000 Rekruter aktif 5m lalu" [ref=e1637] [cursor=pointer]:
              - /url: /loker/business-unit-manager~cfactoryco
              - generic [ref=e1638]:
                - generic [ref=e1639]:
                  - button [ref=e1640]:
                    - img [ref=e1641]
                  - generic [ref=e1643]:
                    - img "Logo CFACTORY.CO" [ref=e1645]
                    - generic [ref=e1646]:
                      - heading "Business Unit Manager" [level=2] [ref=e1647]
                      - generic [ref=e1648]:
                        - text: CFACTORY.CO
                        - img [ref=e1649]
                  - generic [ref=e1651]:
                    - generic [ref=e1652]:
                      - img [ref=e1654]
                      - button "Penuh waktu" [ref=e1657]
                    - generic [ref=e1658]:
                      - img [ref=e1659]
                      - generic [ref=e1662]: On-site • Jakarta Selatan
                    - generic [ref=e1663]:
                      - img [ref=e1664]
                      - generic [ref=e1666]: Min. 1-3 Years Experience
                    - generic [ref=e1667]:
                      - img [ref=e1668]
                      - generic [ref=e1673]: Rp6.500.000 – 8.000.000
                - generic [ref=e1675]: Rekruter aktif 5m lalu
          - generic [ref=e1677]:
            - img "Mobile App UI" [ref=e1678]
            - generic [ref=e1679]:
              - heading "Jangan lewatkan undangan interview dan lowongan terbaru—dapatkan lewat notifikasi aplikasi!" [level=2] [ref=e1680]
              - paragraph [ref=e1681]: Download aplikasi Dealls sekarang!
            - generic [ref=e1682]:
              - img [ref=e1684]
              - generic [ref=e1687]:
                - link [ref=e1688] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
                  - img [ref=e1689]
                - link [ref=e1713] [cursor=pointer]:
                  - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
                  - img [ref=e1714]
          - button "Lebih Banyak" [ref=e1742] [cursor=pointer]:
            - generic [ref=e1743]: Lebih Banyak
            - img [ref=e1744]
    - contentinfo [ref=e1746]:
      - generic [ref=e1747]:
        - generic [ref=e1748]:
          - link [ref=e1749] [cursor=pointer]:
            - /url: /
            - img [ref=e1750]
          - generic [ref=e1758]:
            - heading "Website Lowongan Kerja dan Loker Terbaru di Indonesia" [level=2] [ref=e1759]
            - 'heading "Dealls adalah job portal dan website cari kerja #1 di Indonesia dengan lowongan kerja berkualitas dari 7.000+ perusahaan terbaik. Dealls juga hadir dengan program mentoring gratis untuk pengembangan karir & CV Reviewer untuk membantu pencari kerja mendapatkan karir impiannya lebih mudah." [level=3] [ref=e1760]'
            - generic [ref=e1761]: Dapatkan kesempatan pekerjaan baru & belajar dari Mentor terbaik di Indonesia
            - generic [ref=e1762]: "Unduh Dealls: Jobs & Mentoring"
          - generic [ref=e1763]:
            - link "Download Dealls Jobs on Google Play Store" [ref=e1764] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
              - img [ref=e1765]
            - link "Download Dealls Jobs on Apple App Store" [ref=e1789] [cursor=pointer]:
              - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
              - img [ref=e1790]
        - generic [ref=e1816]:
          - generic [ref=e1817]:
            - heading "Loker" [level=3] [ref=e1818]
            - generic [ref=e1819]:
              - link "Loker berdasarkan Industri" [ref=e1820] [cursor=pointer]:
                - /url: /loker/industri
              - link "Loker berdasarkan Lokasi" [ref=e1821] [cursor=pointer]:
                - /url: /loker/lokasi
              - link "Loker berdasarkan Posisi" [ref=e1822] [cursor=pointer]:
                - /url: /loker/posisi
                - text: Loker berdasarkan
                - text: Posisi
              - link "Loker Penuh Waktu" [ref=e1823] [cursor=pointer]:
                - /url: /loker/tipe/loker-full-time
              - link "Loker Kontrak" [ref=e1824] [cursor=pointer]:
                - /url: /loker/tipe/loker-kontrak
              - link "Loker Paruh Waktu" [ref=e1825] [cursor=pointer]:
                - /url: /loker/tipe/loker-part-time
              - link "Loker Magang" [ref=e1826] [cursor=pointer]:
                - /url: /loker/tipe/loker-magang
              - link "Loker Freelance" [ref=e1827] [cursor=pointer]:
                - /url: /loker/tipe/loker-freelance
              - link "Loker Populer" [ref=e1828] [cursor=pointer]:
                - /url: /loker/populer
          - generic [ref=e1829]:
            - heading "Untuk Perusahaan" [level=3] [ref=e1830]
            - generic [ref=e1831]:
              - link "ATS & Job Portal untuk Perusahaan" [ref=e1832] [cursor=pointer]:
                - /url: /pasang-loker-gratis
              - 'link "Kantorku: Fast, reliable & intuitive HRIS" [ref=e1833] [cursor=pointer]':
                - /url: https://kantorku.id/
              - link "Jadwalkan Demo" [ref=e1834] [cursor=pointer]:
                - /url: /pasang-loker-gratis#employer-contact-form
              - link "Harga" [ref=e1835] [cursor=pointer]:
                - /url: /pasang-loker-gratis/pricing
        - generic [ref=e1836]:
          - generic [ref=e1837]:
            - heading "Hubungi Kami" [level=3] [ref=e1838]
            - generic [ref=e1840]:
              - link [ref=e1841] [cursor=pointer]:
                - /url: https://www.instagram.com/dealls.jobs/
                - img [ref=e1842]
              - link [ref=e1844] [cursor=pointer]:
                - /url: https://twitter.com/DeallsJobs/
                - img [ref=e1845]
              - link [ref=e1847] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/dealls/
                - img [ref=e1848]
          - generic [ref=e1850]:
            - heading "Tentang Dealls" [level=3] [ref=e1851]
            - generic [ref=e1852]:
              - link "Cerita Kami" [ref=e1853] [cursor=pointer]:
                - /url: /about
              - link "Blog" [ref=e1854] [cursor=pointer]:
                - /url: https://dealls.com/pengembangan-karir
              - link "Gabung dengan Tim Kami" [ref=e1855] [cursor=pointer]:
                - /url: https://sh.dealls.com/dealls-career
              - link "Kebijakan Pribadi" [ref=e1856] [cursor=pointer]:
                - /url: /privacy-policies
              - link "Syarat & Kondisi Dealls Group" [ref=e1857] [cursor=pointer]:
                - /url: /terms-and-condition
              - link "Syarat & Kondisi KantorKu" [ref=e1858] [cursor=pointer]:
                - /url: https://kantorku.id/terms-and-condition
      - generic [ref=e1859]: © 2026 Dealls. All rights reserved
  - alert [ref=e1860]: Info Lowongan Kerja & Peluang Karir Terbaru September 2026 | Dealls
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