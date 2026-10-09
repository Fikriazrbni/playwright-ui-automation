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
          - link "Pelamar Masih Sedikit Logo ANTARESTAR Product Developer (R&D) – Outdoor & Activewear ANTARESTAR Penuh waktu On-site • Bekasi Min. 1-3 Years Experience Rp4.000.000 – 10.000.000 Rekruter aktif 1m lalu" [ref=e181] [cursor=pointer]:
            - /url: /loker/product-developer-randd-outdoor-and~antarestar
            - generic [ref=e182]:
              - generic [ref=e183]:
                - button [ref=e184]:
                  - img [ref=e185]
                - generic [ref=e188]:
                  - img [ref=e189]
                  - text: Pelamar Masih Sedikit
                - generic [ref=e190]:
                  - img "Logo ANTARESTAR" [ref=e192]
                  - generic [ref=e193]:
                    - heading "Product Developer (R&D) – Outdoor & Activewear" [level=2] [ref=e194]
                    - generic [ref=e195]:
                      - text: ANTARESTAR
                      - img [ref=e196]
                - generic [ref=e198]:
                  - generic [ref=e199]:
                    - img [ref=e201]
                    - button "Penuh waktu" [ref=e204]
                  - generic [ref=e205]:
                    - img [ref=e206]
                    - generic [ref=e209]: On-site • Bekasi
                  - generic [ref=e210]:
                    - img [ref=e211]
                    - generic [ref=e213]: Min. 1-3 Years Experience
                  - generic [ref=e214]:
                    - img [ref=e215]
                    - generic [ref=e220]: Rp4.000.000 – 10.000.000
              - generic [ref=e222]: Rekruter aktif 1m lalu
          - link "Pelamar Masih Sedikit Logo Delamibrands Freelance Product Development Delamibrands Freelance On-site • Tangerang Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 39m lalu" [ref=e223] [cursor=pointer]:
            - /url: /loker/freelance-product-development~delamibrands
            - generic [ref=e224]:
              - generic [ref=e225]:
                - button [ref=e226]:
                  - img [ref=e227]
                - generic [ref=e230]:
                  - img [ref=e231]
                  - text: Pelamar Masih Sedikit
                - generic [ref=e232]:
                  - img "Logo Delamibrands" [ref=e234]
                  - generic [ref=e235]:
                    - heading "Freelance Product Development" [level=2] [ref=e236]
                    - generic [ref=e237]:
                      - text: Delamibrands
                      - img [ref=e238]
                - generic [ref=e240]:
                  - generic [ref=e241]:
                    - img [ref=e243]
                    - button "Freelance" [ref=e246]
                  - generic [ref=e247]:
                    - img [ref=e248]
                    - generic [ref=e251]: On-site • Tangerang
                  - generic [ref=e252]:
                    - img [ref=e253]
                    - generic [ref=e255]: Min. Fresh Grad
                  - generic [ref=e256]:
                    - img [ref=e257]
                    - generic [ref=e262]: Tidak Ditampilkan
              - generic [ref=e264]: Rekruter aktif 39m lalu
          - link "Pelamar Masih Sedikit Logo Dealls (YC W22) Business Development Intern Dealls (YC W22) Magang On-site • Jakarta Selatan Min. Fresh Grad Magang Berbayar Rekruter aktif 5m lalu" [ref=e265] [cursor=pointer]:
            - /url: /loker/business-development-intern-b2b~dealls-yc-w22
            - generic [ref=e266]:
              - generic [ref=e267]:
                - button [ref=e268]:
                  - img [ref=e269]
                - generic [ref=e272]:
                  - img [ref=e273]
                  - text: Pelamar Masih Sedikit
                - generic [ref=e274]:
                  - img "Logo Dealls (YC W22)" [ref=e276]
                  - generic [ref=e277]:
                    - heading "Business Development Intern" [level=2] [ref=e278]
                    - generic [ref=e279]:
                      - text: Dealls (YC W22)
                      - img [ref=e280]
                - generic [ref=e282]:
                  - generic [ref=e283]:
                    - img [ref=e285]
                    - button "Magang" [ref=e288]
                  - generic [ref=e289]:
                    - img [ref=e290]
                    - generic [ref=e293]: On-site • Jakarta Selatan
                  - generic [ref=e294]:
                    - img [ref=e295]
                    - generic [ref=e297]: Min. Fresh Grad
                  - generic [ref=e298]:
                    - img [ref=e299]
                    - generic [ref=e304]: Magang Berbayar
              - generic [ref=e306]: Rekruter aktif 5m lalu
          - link "Logo AmIT Global Solutions Business Development Manager AmIT Global Solutions Penuh waktu Hybrid • Jakarta Selatan Min. 5+ Years Experience Rp15 – 20 Rekruter aktif 40m lalu" [ref=e307] [cursor=pointer]:
            - /url: /loker/business-development-manager-39~amit-global-solutions
            - generic [ref=e308]:
              - generic [ref=e309]:
                - button [ref=e310]:
                  - img [ref=e311]
                - generic [ref=e313]:
                  - img "Logo AmIT Global Solutions" [ref=e315]
                  - generic [ref=e316]:
                    - heading "Business Development Manager" [level=2] [ref=e317]
                    - generic [ref=e318]:
                      - text: AmIT Global Solutions
                      - img [ref=e319]
                - generic [ref=e321]:
                  - generic [ref=e322]:
                    - img [ref=e324]
                    - button "Penuh waktu" [ref=e327]
                  - generic [ref=e328]:
                    - img [ref=e329]
                    - generic [ref=e332]: Hybrid • Jakarta Selatan
                  - generic [ref=e333]:
                    - img [ref=e334]
                    - generic [ref=e336]: Min. 5+ Years Experience
                  - generic [ref=e337]:
                    - img [ref=e338]
                    - generic [ref=e343]: Rp15 – 20
              - generic [ref=e345]: Rekruter aktif 40m lalu
          - link "Logo FACETOLOGY Odoo Developer FACETOLOGY Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 4m lalu" [ref=e346] [cursor=pointer]:
            - /url: /loker/odoo-developer-15~facetology
            - generic [ref=e347]:
              - generic [ref=e348]:
                - button [ref=e349]:
                  - img [ref=e350]
                - generic [ref=e352]:
                  - img "Logo FACETOLOGY" [ref=e354]
                  - generic [ref=e355]:
                    - heading "Odoo Developer" [level=2] [ref=e356]
                    - generic [ref=e357]:
                      - text: FACETOLOGY
                      - img [ref=e358]
                - generic [ref=e360]:
                  - generic [ref=e361]:
                    - img [ref=e363]
                    - button "Penuh waktu" [ref=e366]
                  - generic [ref=e367]:
                    - img [ref=e368]
                    - generic [ref=e371]: On-site • Jakarta Selatan
                  - generic [ref=e372]:
                    - img [ref=e373]
                    - generic [ref=e375]: Min. 1-3 Years Experience
                  - generic [ref=e376]:
                    - img [ref=e377]
                    - generic [ref=e382]: Tidak Ditampilkan
              - generic [ref=e384]: Rekruter aktif 4m lalu
          - link "Logo ANTARESTAR Business Development Manager (New Business & Product Sourcing) ANTARESTAR Penuh waktu On-site • Bekasi Min. 1-3 Years Experience Rp5.000.000 – 15.000.000 Rekruter aktif 1m lalu" [ref=e385] [cursor=pointer]:
            - /url: /loker/business-development-manager-new-business~antarestar
            - generic [ref=e386]:
              - generic [ref=e387]:
                - button [ref=e388]:
                  - img [ref=e389]
                - generic [ref=e391]:
                  - img "Logo ANTARESTAR" [ref=e393]
                  - generic [ref=e394]:
                    - heading "Business Development Manager (New Business & Product Sourcing)" [level=2] [ref=e395]
                    - generic [ref=e396]:
                      - text: ANTARESTAR
                      - img [ref=e397]
                - generic [ref=e399]:
                  - generic [ref=e400]:
                    - img [ref=e402]
                    - button "Penuh waktu" [ref=e405]
                  - generic [ref=e406]:
                    - img [ref=e407]
                    - generic [ref=e410]: On-site • Bekasi
                  - generic [ref=e411]:
                    - img [ref=e412]
                    - generic [ref=e414]: Min. 1-3 Years Experience
                  - generic [ref=e415]:
                    - img [ref=e416]
                    - generic [ref=e421]: Rp5.000.000 – 15.000.000
              - generic [ref=e423]: Rekruter aktif 1m lalu
          - link "Logo PT Gree Electric Appliances Indonesia Assistant to Sales VP - Bussiness Development Team PT Gree Electric Appliances Indonesia Penuh waktu On-site • Jakarta Utara Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e424] [cursor=pointer]:
            - /url: /loker/assistan-to-sales-vp-bussiness~pt-gree-electric-appliances-indonesia
            - generic [ref=e425]:
              - generic [ref=e426]:
                - button [ref=e427]:
                  - img [ref=e428]
                - generic [ref=e430]:
                  - img "Logo PT Gree Electric Appliances Indonesia" [ref=e432]
                  - generic [ref=e433]:
                    - heading "Assistant to Sales VP - Bussiness Development Team" [level=2] [ref=e434]
                    - generic [ref=e435]:
                      - text: PT Gree Electric Appliances Indonesia
                      - img [ref=e436]
                - generic [ref=e438]:
                  - generic [ref=e439]:
                    - img [ref=e441]
                    - button "Penuh waktu" [ref=e444]
                  - generic [ref=e445]:
                    - img [ref=e446]
                    - generic [ref=e449]: On-site • Jakarta Utara
                  - generic [ref=e450]:
                    - img [ref=e451]
                    - generic [ref=e453]: Min. 1-3 Years Experience
                  - generic [ref=e454]:
                    - img [ref=e455]
                    - generic [ref=e460]: Tidak Ditampilkan
              - generic [ref=e462]: Rekruter aktif 1m lalu
          - link "Logo PT.Enseval Putera Megatrading Tbk Developer Internship PT.Enseval Putera Megatrading Tbk Magang On-site • Jakarta Timur Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 18m lalu" [ref=e463] [cursor=pointer]:
            - /url: /loker/developer-internship-1~ptenseval-putera-megatrading-tbk
            - generic [ref=e464]:
              - generic [ref=e465]:
                - button [ref=e466]:
                  - img [ref=e467]
                - generic [ref=e469]:
                  - img "Logo PT.Enseval Putera Megatrading Tbk" [ref=e471]
                  - generic [ref=e472]:
                    - heading "Developer Internship" [level=2] [ref=e473]
                    - generic [ref=e474]:
                      - text: PT.Enseval Putera Megatrading Tbk
                      - img [ref=e475]
                - generic [ref=e477]:
                  - generic [ref=e478]:
                    - img [ref=e480]
                    - button "Magang" [ref=e483]
                  - generic [ref=e484]:
                    - img [ref=e485]
                    - generic [ref=e488]: On-site • Jakarta Timur
                  - generic [ref=e489]:
                    - img [ref=e490]
                    - generic [ref=e492]: Min. Sedang Kuliah (Final Year)
                  - generic [ref=e493]:
                    - img [ref=e494]
                    - generic [ref=e499]: Magang Berbayar
              - generic [ref=e501]: Rekruter aktif 18m lalu
          - link "Logo Delamibrands IT Report Developer Delamibrands Kontrak On-site • Tangerang Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 39m lalu" [ref=e502] [cursor=pointer]:
            - /url: /loker/it-report-developer~delamibrands
            - generic [ref=e503]:
              - generic [ref=e504]:
                - button [ref=e505]:
                  - img [ref=e506]
                - generic [ref=e508]:
                  - img "Logo Delamibrands" [ref=e510]
                  - generic [ref=e511]:
                    - heading "IT Report Developer" [level=2] [ref=e512]
                    - generic [ref=e513]:
                      - text: Delamibrands
                      - img [ref=e514]
                - generic [ref=e516]:
                  - generic [ref=e517]:
                    - img [ref=e519]
                    - button "Kontrak" [ref=e522]
                  - generic [ref=e523]:
                    - img [ref=e524]
                    - generic [ref=e527]: On-site • Tangerang
                  - generic [ref=e528]:
                    - img [ref=e529]
                    - generic [ref=e531]: Min. 1-3 Years Experience
                  - generic [ref=e532]:
                    - img [ref=e533]
                    - generic [ref=e538]: Tidak Ditampilkan
              - generic [ref=e540]: Rekruter aktif 39m lalu
          - link "Logo Finture Senior IT Developer (JAVA) Finture Penuh waktu On-site • Jakarta Selatan Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 4m lalu" [ref=e541] [cursor=pointer]:
            - /url: /loker/senior-it-developer-java~fintureid
            - generic [ref=e542]:
              - generic [ref=e543]:
                - button [ref=e544]:
                  - img [ref=e545]
                - generic [ref=e547]:
                  - img "Logo Finture" [ref=e549]
                  - generic [ref=e550]:
                    - heading "Senior IT Developer (JAVA)" [level=2] [ref=e551]
                    - generic [ref=e552]: Finture
                - generic [ref=e553]:
                  - generic [ref=e554]:
                    - img [ref=e556]
                    - button "Penuh waktu" [ref=e559]
                  - generic [ref=e560]:
                    - img [ref=e561]
                    - generic [ref=e564]: On-site • Jakarta Selatan
                  - generic [ref=e565]:
                    - img [ref=e566]
                    - generic [ref=e568]: Min. 3-5 Years Experience
                  - generic [ref=e569]:
                    - img [ref=e570]
                    - generic [ref=e575]: Tidak Ditampilkan
              - generic [ref=e577]: Rekruter aktif 4m lalu
          - link "Logo Delamibrands Product Development Section Manager Delamibrands Penuh waktu On-site • Tangerang Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 39m lalu" [ref=e578] [cursor=pointer]:
            - /url: /loker/product-development-section-manager~delamibrands
            - generic [ref=e579]:
              - generic [ref=e580]:
                - button [ref=e581]:
                  - img [ref=e582]
                - generic [ref=e584]:
                  - img "Logo Delamibrands" [ref=e586]
                  - generic [ref=e587]:
                    - heading "Product Development Section Manager" [level=2] [ref=e588]
                    - generic [ref=e589]:
                      - text: Delamibrands
                      - img [ref=e590]
                - generic [ref=e592]:
                  - generic [ref=e593]:
                    - img [ref=e595]
                    - button "Penuh waktu" [ref=e598]
                  - generic [ref=e599]:
                    - img [ref=e600]
                    - generic [ref=e603]: On-site • Tangerang
                  - generic [ref=e604]:
                    - img [ref=e605]
                    - generic [ref=e607]: Min. 3-5 Years Experience
                  - generic [ref=e608]:
                    - img [ref=e609]
                    - generic [ref=e614]: Tidak Ditampilkan
              - generic [ref=e616]: Rekruter aktif 39m lalu
          - link "Logo Arya Noble Organization Development Specialist Arya Noble Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e617] [cursor=pointer]:
            - /url: /loker/organization-development-specialist-2~arya-noble
            - generic [ref=e618]:
              - generic [ref=e619]:
                - button [ref=e620]:
                  - img [ref=e621]
                - generic [ref=e623]:
                  - img "Logo Arya Noble" [ref=e625]
                  - generic [ref=e626]:
                    - heading "Organization Development Specialist" [level=2] [ref=e627]
                    - generic [ref=e628]:
                      - text: Arya Noble
                      - img [ref=e629]
                - generic [ref=e631]:
                  - generic [ref=e632]:
                    - img [ref=e634]
                    - button "Penuh waktu" [ref=e637]
                  - generic [ref=e638]:
                    - img [ref=e639]
                    - generic [ref=e642]: On-site • Jakarta Selatan
                  - generic [ref=e643]:
                    - img [ref=e644]
                    - generic [ref=e646]: Min. 1-3 Years Experience
                  - generic [ref=e647]:
                    - img [ref=e648]
                    - generic [ref=e653]: Tidak Ditampilkan
              - generic [ref=e655]: Rekruter aktif 1m lalu
          - link "Logo PT Gree Electric Appliances Indonesia Sales & Bussiness Development PT Gree Electric Appliances Indonesia Penuh waktu On-site • Jakarta Utara Min. 1-3 Years Experience Rp8.000.000 – 10.000.000 Rekruter aktif 1m lalu" [ref=e656] [cursor=pointer]:
            - /url: /loker/sales-and-bussiness-development~pt-gree-electric-appliances-indonesia
            - generic [ref=e657]:
              - generic [ref=e658]:
                - button [ref=e659]:
                  - img [ref=e660]
                - generic [ref=e662]:
                  - img "Logo PT Gree Electric Appliances Indonesia" [ref=e664]
                  - generic [ref=e665]:
                    - heading "Sales & Bussiness Development" [level=2] [ref=e666]
                    - generic [ref=e667]:
                      - text: PT Gree Electric Appliances Indonesia
                      - img [ref=e668]
                - generic [ref=e670]:
                  - generic [ref=e671]:
                    - img [ref=e673]
                    - button "Penuh waktu" [ref=e676]
                  - generic [ref=e677]:
                    - img [ref=e678]
                    - generic [ref=e681]: On-site • Jakarta Utara
                  - generic [ref=e682]:
                    - img [ref=e683]
                    - generic [ref=e685]: Min. 1-3 Years Experience
                  - generic [ref=e686]:
                    - img [ref=e687]
                    - generic [ref=e692]: Rp8.000.000 – 10.000.000
              - generic [ref=e694]: Rekruter aktif 1m lalu
          - link "Logo PT Metrodata Electronics Tbk Telesales / Sales Development Representative – SAP GROW PT Metrodata Electronics Tbk Kontrak On-site • Jakarta Barat Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1h lalu" [ref=e695] [cursor=pointer]:
            - /url: /loker/telesales-sales-development-representative-sap~pt-metrodata-electronics-tbk
            - generic [ref=e696]:
              - generic [ref=e697]:
                - button [ref=e698]:
                  - img [ref=e699]
                - generic [ref=e701]:
                  - img "Logo PT Metrodata Electronics Tbk" [ref=e703]
                  - generic [ref=e704]:
                    - heading "Telesales / Sales Development Representative – SAP GROW" [level=2] [ref=e705]
                    - generic [ref=e706]:
                      - text: PT Metrodata Electronics Tbk
                      - img [ref=e707]
                - generic [ref=e709]:
                  - generic [ref=e710]:
                    - img [ref=e712]
                    - button "Kontrak" [ref=e715]
                  - generic [ref=e716]:
                    - img [ref=e717]
                    - generic [ref=e720]: On-site • Jakarta Barat
                  - generic [ref=e721]:
                    - img [ref=e722]
                    - generic [ref=e724]: Min. 1-3 Years Experience
                  - generic [ref=e725]:
                    - img [ref=e726]
                    - generic [ref=e731]: Tidak Ditampilkan
              - generic [ref=e733]: Rekruter aktif 1h lalu
          - link "Logo Arya Noble Organization Development Sr. Specialist Arya Noble Penuh waktu On-site • Jakarta Selatan Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e734] [cursor=pointer]:
            - /url: /loker/organization-development-sr-specialist~arya-noble
            - generic [ref=e735]:
              - generic [ref=e736]:
                - button [ref=e737]:
                  - img [ref=e738]
                - generic [ref=e740]:
                  - img "Logo Arya Noble" [ref=e742]
                  - generic [ref=e743]:
                    - heading "Organization Development Sr. Specialist" [level=2] [ref=e744]
                    - generic [ref=e745]:
                      - text: Arya Noble
                      - img [ref=e746]
                - generic [ref=e748]:
                  - generic [ref=e749]:
                    - img [ref=e751]
                    - button "Penuh waktu" [ref=e754]
                  - generic [ref=e755]:
                    - img [ref=e756]
                    - generic [ref=e759]: On-site • Jakarta Selatan
                  - generic [ref=e760]:
                    - img [ref=e761]
                    - generic [ref=e763]: Min. 1-3 Years Experience
                  - generic [ref=e764]:
                    - img [ref=e765]
                    - generic [ref=e770]: Tidak Ditampilkan
              - generic [ref=e772]: Rekruter aktif 1m lalu
          - link "Logo PT. Inovasi Anak Indonesia - PARKEE Software Development Engineer in Test PT. Inovasi Anak Indonesia - PARKEE Kontrak On-site • Jakarta Pusat Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e773] [cursor=pointer]:
            - /url: /loker/software-development-engineer-in-test-8~pt-inovasi-anak-indonesia-parkee
            - generic [ref=e774]:
              - generic [ref=e775]:
                - button [ref=e776]:
                  - img [ref=e777]
                - generic [ref=e779]:
                  - img "Logo PT. Inovasi Anak Indonesia - PARKEE" [ref=e781]
                  - generic [ref=e782]:
                    - heading "Software Development Engineer in Test" [level=2] [ref=e783]
                    - generic [ref=e784]:
                      - text: PT. Inovasi Anak Indonesia - PARKEE
                      - img [ref=e785]
                - generic [ref=e787]:
                  - generic [ref=e788]:
                    - img [ref=e790]
                    - button "Kontrak" [ref=e793]
                  - generic [ref=e794]:
                    - img [ref=e795]
                    - generic [ref=e798]: On-site • Jakarta Pusat
                  - generic [ref=e799]:
                    - img [ref=e800]
                    - generic [ref=e802]: Min. Fresh Grad
                  - generic [ref=e803]:
                    - img [ref=e804]
                    - generic [ref=e809]: Tidak Ditampilkan
              - generic [ref=e811]: Rekruter aktif 1m lalu
          - link "Logo OpenWay Senior Business Development Executive OpenWay Penuh waktu Hybrid • Jakarta Selatan Min. 3-5 Years Experience Rp18.000.000 – 27.500.000 Rekruter aktif 7h lalu" [ref=e812] [cursor=pointer]:
            - /url: /loker/senior-business-development-executive-3~openway
            - generic [ref=e813]:
              - generic [ref=e814]:
                - button [ref=e815]:
                  - img [ref=e816]
                - generic [ref=e818]:
                  - img "Logo OpenWay" [ref=e820]
                  - generic [ref=e821]:
                    - heading "Senior Business Development Executive" [level=2] [ref=e822]
                    - generic [ref=e823]:
                      - text: OpenWay
                      - img [ref=e824]
                - generic [ref=e826]:
                  - generic [ref=e827]:
                    - img [ref=e829]
                    - button "Penuh waktu" [ref=e832]
                  - generic [ref=e833]:
                    - img [ref=e834]
                    - generic [ref=e837]: Hybrid • Jakarta Selatan
                  - generic [ref=e838]:
                    - img [ref=e839]
                    - generic [ref=e841]: Min. 3-5 Years Experience
                  - generic [ref=e842]:
                    - img [ref=e843]
                    - generic [ref=e848]: Rp18.000.000 – 27.500.000
              - generic [ref=e850]: Rekruter aktif 7h lalu
          - link "Logo United Creative Fashion Design & Product Development (Bali United) United Creative Kontrak On-site • Jakarta Barat Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e851] [cursor=pointer]:
            - /url: /loker/fashion-design-and-product-development~united-creative
            - generic [ref=e852]:
              - generic [ref=e853]:
                - button [ref=e854]:
                  - img [ref=e855]
                - generic [ref=e857]:
                  - img "Logo United Creative" [ref=e859]
                  - generic [ref=e860]:
                    - heading "Fashion Design & Product Development (Bali United)" [level=2] [ref=e861]
                    - generic [ref=e862]:
                      - text: United Creative
                      - img [ref=e863]
                - generic [ref=e865]:
                  - generic [ref=e866]:
                    - img [ref=e868]
                    - button "Kontrak" [ref=e871]
                  - generic [ref=e872]:
                    - img [ref=e873]
                    - generic [ref=e876]: On-site • Jakarta Barat
                  - generic [ref=e877]:
                    - img [ref=e878]
                    - generic [ref=e880]: Min. 1-3 Years Experience
                  - generic [ref=e881]:
                    - img [ref=e882]
                    - generic [ref=e887]: Tidak Ditampilkan
              - generic [ref=e889]: Rekruter aktif 1m lalu
        - generic [ref=e891]:
          - img "Mobile App UI" [ref=e892]
          - generic [ref=e893]:
            - heading "Jangan lewatkan undangan interview dan lowongan terbaru—dapatkan lewat notifikasi aplikasi!" [level=2] [ref=e894]
            - paragraph [ref=e895]: Download aplikasi Dealls sekarang!
          - generic [ref=e896]:
            - img [ref=e898]
            - generic [ref=e901]:
              - link [ref=e902] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
                - img [ref=e903]
              - link [ref=e927] [cursor=pointer]:
                - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
                - img [ref=e928]
        - button "Lebih Banyak" [ref=e956] [cursor=pointer]:
          - generic [ref=e957]: Lebih Banyak
          - img [ref=e958]
        - generic [ref=e960]:
          - separator [ref=e961]
          - heading "Pekerjaan yang membutuhkan \"developer\" sebagai keahlian" [level=2] [ref=e962]
          - generic [ref=e964]:
            - link "Pelamar Masih Sedikit Logo ANTARESTAR Product Developer (R&D) – Outdoor & Activewear ANTARESTAR Penuh waktu On-site • Bekasi Min. 1-3 Years Experience Rp4.000.000 – 10.000.000 Rekruter aktif 1m lalu" [ref=e965] [cursor=pointer]:
              - /url: /loker/product-developer-randd-outdoor-and~antarestar
              - generic [ref=e966]:
                - generic [ref=e967]:
                  - button [ref=e968]:
                    - img [ref=e969]
                  - generic [ref=e972]:
                    - img [ref=e973]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e974]:
                    - img "Logo ANTARESTAR" [ref=e976]
                    - generic [ref=e977]:
                      - heading "Product Developer (R&D) – Outdoor & Activewear" [level=2] [ref=e978]
                      - generic [ref=e979]:
                        - text: ANTARESTAR
                        - img [ref=e980]
                  - generic [ref=e982]:
                    - generic [ref=e983]:
                      - img [ref=e985]
                      - button "Penuh waktu" [ref=e988]
                    - generic [ref=e989]:
                      - img [ref=e990]
                      - generic [ref=e993]: On-site • Bekasi
                    - generic [ref=e994]:
                      - img [ref=e995]
                      - generic [ref=e997]: Min. 1-3 Years Experience
                    - generic [ref=e998]:
                      - img [ref=e999]
                      - generic [ref=e1004]: Rp4.000.000 – 10.000.000
                - generic [ref=e1006]: Rekruter aktif 1m lalu
            - link "Pelamar Masih Sedikit Logo PT Trident Pro Assistant Manager PT Trident Pro Penuh waktu On-site • Indonesia Min. SMA/K Rp5.000.000 – 6.000.000 Rekruter aktif 28m lalu" [ref=e1007] [cursor=pointer]:
              - /url: /loker/assistant-manager-7~pt-trident-pro
              - generic [ref=e1008]:
                - generic [ref=e1009]:
                  - button [ref=e1010]:
                    - img [ref=e1011]
                  - generic [ref=e1014]:
                    - img [ref=e1015]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1016]:
                    - img "Logo PT Trident Pro" [ref=e1018]
                    - generic [ref=e1019]:
                      - heading "Assistant Manager" [level=2] [ref=e1020]
                      - generic [ref=e1021]:
                        - text: PT Trident Pro
                        - img [ref=e1022]
                  - generic [ref=e1024]:
                    - generic [ref=e1025]:
                      - img [ref=e1027]
                      - button "Penuh waktu" [ref=e1030]
                    - generic [ref=e1031]:
                      - img [ref=e1032]
                      - generic [ref=e1035]: On-site • Indonesia
                    - generic [ref=e1036]:
                      - img [ref=e1037]
                      - generic [ref=e1039]: Min. SMA/K
                    - generic [ref=e1040]:
                      - img [ref=e1041]
                      - generic [ref=e1046]: Rp5.000.000 – 6.000.000
                - generic [ref=e1048]: Rekruter aktif 28m lalu
            - link "Pelamar Masih Sedikit Logo PT Trident Pro Data Entry PT Trident Pro Penuh waktu On-site • Indonesia Min. SMA/K Rp5.000.000 – 6.000.000 Rekruter aktif 28m lalu" [ref=e1049] [cursor=pointer]:
              - /url: /loker/data-entry-86~pt-trident-pro
              - generic [ref=e1050]:
                - generic [ref=e1051]:
                  - button [ref=e1052]:
                    - img [ref=e1053]
                  - generic [ref=e1056]:
                    - img [ref=e1057]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1058]:
                    - img "Logo PT Trident Pro" [ref=e1060]
                    - generic [ref=e1061]:
                      - heading "Data Entry" [level=2] [ref=e1062]
                      - generic [ref=e1063]:
                        - text: PT Trident Pro
                        - img [ref=e1064]
                  - generic [ref=e1066]:
                    - generic [ref=e1067]:
                      - img [ref=e1069]
                      - button "Penuh waktu" [ref=e1072]
                    - generic [ref=e1073]:
                      - img [ref=e1074]
                      - generic [ref=e1077]: On-site • Indonesia
                    - generic [ref=e1078]:
                      - img [ref=e1079]
                      - generic [ref=e1081]: Min. SMA/K
                    - generic [ref=e1082]:
                      - img [ref=e1083]
                      - generic [ref=e1088]: Rp5.000.000 – 6.000.000
                - generic [ref=e1090]: Rekruter aktif 28m lalu
            - link "Pelamar Masih Sedikit Logo Delamibrands Freelance Product Development Delamibrands Freelance On-site • Tangerang Min. Fresh Grad Tidak Ditampilkan Rekruter aktif 39m lalu" [ref=e1091] [cursor=pointer]:
              - /url: /loker/freelance-product-development~delamibrands
              - generic [ref=e1092]:
                - generic [ref=e1093]:
                  - button [ref=e1094]:
                    - img [ref=e1095]
                  - generic [ref=e1098]:
                    - img [ref=e1099]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1100]:
                    - img "Logo Delamibrands" [ref=e1102]
                    - generic [ref=e1103]:
                      - heading "Freelance Product Development" [level=2] [ref=e1104]
                      - generic [ref=e1105]:
                        - text: Delamibrands
                        - img [ref=e1106]
                  - generic [ref=e1108]:
                    - generic [ref=e1109]:
                      - img [ref=e1111]
                      - button "Freelance" [ref=e1114]
                    - generic [ref=e1115]:
                      - img [ref=e1116]
                      - generic [ref=e1119]: On-site • Tangerang
                    - generic [ref=e1120]:
                      - img [ref=e1121]
                      - generic [ref=e1123]: Min. Fresh Grad
                    - generic [ref=e1124]:
                      - img [ref=e1125]
                      - generic [ref=e1130]: Tidak Ditampilkan
                - generic [ref=e1132]: Rekruter aktif 39m lalu
            - link "Pelamar Masih Sedikit Logo PT Ultra Sakti Software Engineer PT Ultra Sakti Penuh waktu On-site • Jakarta Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 8m lalu" [ref=e1133] [cursor=pointer]:
              - /url: /loker/software-engineer-41~pt-ultra-sakti-1
              - generic [ref=e1134]:
                - generic [ref=e1135]:
                  - button [ref=e1136]:
                    - img [ref=e1137]
                  - generic [ref=e1140]:
                    - img [ref=e1141]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1142]:
                    - img "Logo PT Ultra Sakti" [ref=e1144]
                    - generic [ref=e1145]:
                      - heading "Software Engineer" [level=2] [ref=e1146]
                      - generic [ref=e1147]:
                        - text: PT Ultra Sakti
                        - img [ref=e1148]
                  - generic [ref=e1150]:
                    - generic [ref=e1151]:
                      - img [ref=e1153]
                      - button "Penuh waktu" [ref=e1156]
                    - generic [ref=e1157]:
                      - img [ref=e1158]
                      - generic [ref=e1161]: On-site • Jakarta
                    - generic [ref=e1162]:
                      - img [ref=e1163]
                      - generic [ref=e1165]: Min. 1-3 Years Experience
                    - generic [ref=e1166]:
                      - img [ref=e1167]
                      - generic [ref=e1172]: Tidak Ditampilkan
                - generic [ref=e1174]: Rekruter aktif 8m lalu
            - link "Pelamar Masih Sedikit Logo ANTARESTAR Affiliate & KOL Staff ANTARESTAR Penuh waktu On-site • Bekasi Min. 1-3 Years Experience Rp4.000.000 – 5.000.000 Rekruter aktif 1m lalu" [ref=e1175] [cursor=pointer]:
              - /url: /loker/affiliate-and-kol-specialist-1~antarestar
              - generic [ref=e1176]:
                - generic [ref=e1177]:
                  - button [ref=e1178]:
                    - img [ref=e1179]
                  - generic [ref=e1182]:
                    - img [ref=e1183]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1184]:
                    - img "Logo ANTARESTAR" [ref=e1186]
                    - generic [ref=e1187]:
                      - heading "Affiliate & KOL Staff" [level=2] [ref=e1188]
                      - generic [ref=e1189]:
                        - text: ANTARESTAR
                        - img [ref=e1190]
                  - generic [ref=e1192]:
                    - generic [ref=e1193]:
                      - img [ref=e1195]
                      - button "Penuh waktu" [ref=e1198]
                    - generic [ref=e1199]:
                      - img [ref=e1200]
                      - generic [ref=e1203]: On-site • Bekasi
                    - generic [ref=e1204]:
                      - img [ref=e1205]
                      - generic [ref=e1207]: Min. 1-3 Years Experience
                    - generic [ref=e1208]:
                      - img [ref=e1209]
                      - generic [ref=e1214]: Rp4.000.000 – 5.000.000
                - generic [ref=e1216]: Rekruter aktif 1m lalu
            - link "Pelamar Masih Sedikit Logo Ruangguru Trainer Sales Ruangguru Kontrak On-site • Jakarta Selatan Min. 3-5 Years Experience Rp7.000.000 – 8.000.000 Rekruter aktif 5m lalu" [ref=e1217] [cursor=pointer]:
              - /url: /loker/trainer-sales~ruangguru
              - generic [ref=e1218]:
                - generic [ref=e1219]:
                  - button [ref=e1220]:
                    - img [ref=e1221]
                  - generic [ref=e1224]:
                    - img [ref=e1225]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1226]:
                    - img "Logo Ruangguru" [ref=e1228]
                    - generic [ref=e1229]:
                      - heading "Trainer Sales" [level=2] [ref=e1230]
                      - generic [ref=e1231]:
                        - text: Ruangguru
                        - img [ref=e1232]
                  - generic [ref=e1234]:
                    - generic [ref=e1235]:
                      - img [ref=e1237]
                      - button "Kontrak" [ref=e1240]
                    - generic [ref=e1241]:
                      - img [ref=e1242]
                      - generic [ref=e1245]: On-site • Jakarta Selatan
                    - generic [ref=e1246]:
                      - img [ref=e1247]
                      - generic [ref=e1249]: Min. 3-5 Years Experience
                    - generic [ref=e1250]:
                      - img [ref=e1251]
                      - generic [ref=e1256]: Rp7.000.000 – 8.000.000
                - generic [ref=e1258]: Rekruter aktif 5m lalu
            - link "Pelamar Masih Sedikit Logo Ruangguru Branch Manager for Kids - Jakarta Utara - PIK Plus Ruangguru Kontrak On-site • Jakarta Utara Min. 1-3 Years Experience Tidak Ditampilkan Rekruter aktif 5m lalu" [ref=e1259] [cursor=pointer]:
              - /url: /loker/branch-manager-for-kids-jakarta~ruangguru
              - generic [ref=e1260]:
                - generic [ref=e1261]:
                  - button [ref=e1262]:
                    - img [ref=e1263]
                  - generic [ref=e1266]:
                    - img [ref=e1267]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1268]:
                    - img "Logo Ruangguru" [ref=e1270]
                    - generic [ref=e1271]:
                      - heading "Branch Manager for Kids - Jakarta Utara - PIK Plus" [level=2] [ref=e1272]
                      - generic [ref=e1273]:
                        - text: Ruangguru
                        - img [ref=e1274]
                  - generic [ref=e1276]:
                    - generic [ref=e1277]:
                      - img [ref=e1279]
                      - button "Kontrak" [ref=e1282]
                    - generic [ref=e1283]:
                      - img [ref=e1284]
                      - generic [ref=e1287]: On-site • Jakarta Utara
                    - generic [ref=e1288]:
                      - img [ref=e1289]
                      - generic [ref=e1291]: Min. 1-3 Years Experience
                    - generic [ref=e1292]:
                      - img [ref=e1293]
                      - generic [ref=e1298]: Tidak Ditampilkan
                - generic [ref=e1300]: Rekruter aktif 5m lalu
            - link "Pelamar Masih Sedikit Logo GLOW FX BEAUTY KOL Lead GLOW FX BEAUTY Penuh waktu On-site • Tangerang Selatan Min. 3-5 Years Experience Tidak Ditampilkan Rekruter aktif 1m lalu" [ref=e1301] [cursor=pointer]:
              - /url: /loker/kol-lead-6~glowfxbeauty
              - generic [ref=e1302]:
                - generic [ref=e1303]:
                  - button [ref=e1304]:
                    - img [ref=e1305]
                  - generic [ref=e1308]:
                    - img [ref=e1309]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1310]:
                    - img "Logo GLOW FX BEAUTY" [ref=e1312]
                    - generic [ref=e1313]:
                      - heading "KOL Lead" [level=2] [ref=e1314]
                      - generic [ref=e1315]:
                        - text: GLOW FX BEAUTY
                        - img [ref=e1316]
                  - generic [ref=e1318]:
                    - generic [ref=e1319]:
                      - img [ref=e1321]
                      - button "Penuh waktu" [ref=e1324]
                    - generic [ref=e1325]:
                      - img [ref=e1326]
                      - generic [ref=e1329]: On-site • Tangerang Selatan
                    - generic [ref=e1330]:
                      - img [ref=e1331]
                      - generic [ref=e1333]: Min. 3-5 Years Experience
                    - generic [ref=e1334]:
                      - img [ref=e1335]
                      - generic [ref=e1340]: Tidak Ditampilkan
                - generic [ref=e1342]: Rekruter aktif 1m lalu
            - link "Pelamar Masih Sedikit Logo PT Kaya Global Network Account Executive Intern PT Kaya Global Network Magang Hybrid • Jakarta Selatan Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 33m lalu" [ref=e1343] [cursor=pointer]:
              - /url: /loker/account-executive-intern-2~pt-kaya-global-network
              - generic [ref=e1344]:
                - generic [ref=e1345]:
                  - button [ref=e1346]:
                    - img [ref=e1347]
                  - generic [ref=e1350]:
                    - img [ref=e1351]
                    - text: Pelamar Masih Sedikit
                  - generic [ref=e1352]:
                    - img "Logo PT Kaya Global Network" [ref=e1354]
                    - generic [ref=e1355]:
                      - heading "Account Executive Intern" [level=2] [ref=e1356]
                      - generic [ref=e1357]:
                        - text: PT Kaya Global Network
                        - img [ref=e1358]
                  - generic [ref=e1360]:
                    - generic [ref=e1361]:
                      - img [ref=e1363]
                      - button "Magang" [ref=e1366]
                    - generic [ref=e1367]:
                      - img [ref=e1368]
                      - generic [ref=e1371]: Hybrid • Jakarta Selatan
                    - generic [ref=e1372]:
                      - img [ref=e1373]
                      - generic [ref=e1375]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1376]:
                      - img [ref=e1377]
                      - generic [ref=e1382]: Magang Berbayar
                - generic [ref=e1384]: Rekruter aktif 33m lalu
            - link "Logo Ruangguru Sales Trainee Academy English by Ruangguru - Gresik (Green Garden) Ruangguru Magang On-site • Gresik Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1385] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-english-by-3~ruangguru
              - generic [ref=e1386]:
                - generic [ref=e1387]:
                  - button [ref=e1388]:
                    - img [ref=e1389]
                  - generic [ref=e1391]:
                    - img "Logo Ruangguru" [ref=e1393]
                    - generic [ref=e1394]:
                      - heading "Sales Trainee Academy English by Ruangguru - Gresik (Green Garden)" [level=2] [ref=e1395]
                      - generic [ref=e1396]:
                        - text: Ruangguru
                        - img [ref=e1397]
                  - generic [ref=e1399]:
                    - generic [ref=e1400]:
                      - img [ref=e1402]
                      - button "Magang" [ref=e1405]
                    - generic [ref=e1406]:
                      - img [ref=e1407]
                      - generic [ref=e1410]: On-site • Gresik Regency
                    - generic [ref=e1411]:
                      - img [ref=e1412]
                      - generic [ref=e1414]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1415]:
                      - img [ref=e1416]
                      - generic [ref=e1421]: Magang Berbayar
                - generic [ref=e1423]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy English by Ruangguru - Sidoarjo (Pondok Mutiara) Ruangguru Magang On-site • Sidoarjo Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1424] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-english-by-2~ruangguru
              - generic [ref=e1425]:
                - generic [ref=e1426]:
                  - button [ref=e1427]:
                    - img [ref=e1428]
                  - generic [ref=e1430]:
                    - img "Logo Ruangguru" [ref=e1432]
                    - generic [ref=e1433]:
                      - heading "Sales Trainee Academy English by Ruangguru - Sidoarjo (Pondok Mutiara)" [level=2] [ref=e1434]
                      - generic [ref=e1435]:
                        - text: Ruangguru
                        - img [ref=e1436]
                  - generic [ref=e1438]:
                    - generic [ref=e1439]:
                      - img [ref=e1441]
                      - button "Magang" [ref=e1444]
                    - generic [ref=e1445]:
                      - img [ref=e1446]
                      - generic [ref=e1449]: On-site • Sidoarjo Regency
                    - generic [ref=e1450]:
                      - img [ref=e1451]
                      - generic [ref=e1453]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1454]:
                      - img [ref=e1455]
                      - generic [ref=e1460]: Magang Berbayar
                - generic [ref=e1462]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy English by Ruangguru - Surabaya (MERR) Ruangguru Magang On-site • Surabaya Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1463] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-english-by-1~ruangguru
              - generic [ref=e1464]:
                - generic [ref=e1465]:
                  - button [ref=e1466]:
                    - img [ref=e1467]
                  - generic [ref=e1469]:
                    - img "Logo Ruangguru" [ref=e1471]
                    - generic [ref=e1472]:
                      - heading "Sales Trainee Academy English by Ruangguru - Surabaya (MERR)" [level=2] [ref=e1473]
                      - generic [ref=e1474]:
                        - text: Ruangguru
                        - img [ref=e1475]
                  - generic [ref=e1477]:
                    - generic [ref=e1478]:
                      - img [ref=e1480]
                      - button "Magang" [ref=e1483]
                    - generic [ref=e1484]:
                      - img [ref=e1485]
                      - generic [ref=e1488]: On-site • Surabaya
                    - generic [ref=e1489]:
                      - img [ref=e1490]
                      - generic [ref=e1492]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1493]:
                      - img [ref=e1494]
                      - generic [ref=e1499]: Magang Berbayar
                - generic [ref=e1501]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy English by Ruangguru - Surabaya (Wiyung) Ruangguru Magang On-site • Surabaya Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1502] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-english-by~ruangguru
              - generic [ref=e1503]:
                - generic [ref=e1504]:
                  - button [ref=e1505]:
                    - img [ref=e1506]
                  - generic [ref=e1508]:
                    - img "Logo Ruangguru" [ref=e1510]
                    - generic [ref=e1511]:
                      - heading "Sales Trainee Academy English by Ruangguru - Surabaya (Wiyung)" [level=2] [ref=e1512]
                      - generic [ref=e1513]:
                        - text: Ruangguru
                        - img [ref=e1514]
                  - generic [ref=e1516]:
                    - generic [ref=e1517]:
                      - img [ref=e1519]
                      - button "Magang" [ref=e1522]
                    - generic [ref=e1523]:
                      - img [ref=e1524]
                      - generic [ref=e1527]: On-site • Surabaya
                    - generic [ref=e1528]:
                      - img [ref=e1529]
                      - generic [ref=e1531]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1532]:
                      - img [ref=e1533]
                      - generic [ref=e1538]: Magang Berbayar
                - generic [ref=e1540]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy by Ruangguru - Bangkalan (Soekarno Hatta) Ruangguru Magang On-site • Bangkalan Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1541] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-by-ruangguru-326~ruangguru
              - generic [ref=e1542]:
                - generic [ref=e1543]:
                  - button [ref=e1544]:
                    - img [ref=e1545]
                  - generic [ref=e1547]:
                    - img "Logo Ruangguru" [ref=e1549]
                    - generic [ref=e1550]:
                      - heading "Sales Trainee Academy by Ruangguru - Bangkalan (Soekarno Hatta)" [level=2] [ref=e1551]
                      - generic [ref=e1552]:
                        - text: Ruangguru
                        - img [ref=e1553]
                  - generic [ref=e1555]:
                    - generic [ref=e1556]:
                      - img [ref=e1558]
                      - button "Magang" [ref=e1561]
                    - generic [ref=e1562]:
                      - img [ref=e1563]
                      - generic [ref=e1566]: On-site • Bangkalan Regency
                    - generic [ref=e1567]:
                      - img [ref=e1568]
                      - generic [ref=e1570]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1571]:
                      - img [ref=e1572]
                      - generic [ref=e1577]: Magang Berbayar
                - generic [ref=e1579]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy by Ruangguru - Magetan (Monginsidi) Ruangguru Magang On-site • Magetan Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1580] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-by-ruangguru-325~ruangguru
              - generic [ref=e1581]:
                - generic [ref=e1582]:
                  - button [ref=e1583]:
                    - img [ref=e1584]
                  - generic [ref=e1586]:
                    - img "Logo Ruangguru" [ref=e1588]
                    - generic [ref=e1589]:
                      - heading "Sales Trainee Academy by Ruangguru - Magetan (Monginsidi)" [level=2] [ref=e1590]
                      - generic [ref=e1591]:
                        - text: Ruangguru
                        - img [ref=e1592]
                  - generic [ref=e1594]:
                    - generic [ref=e1595]:
                      - img [ref=e1597]
                      - button "Magang" [ref=e1600]
                    - generic [ref=e1601]:
                      - img [ref=e1602]
                      - generic [ref=e1605]: On-site • Magetan Regency
                    - generic [ref=e1606]:
                      - img [ref=e1607]
                      - generic [ref=e1609]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1610]:
                      - img [ref=e1611]
                      - generic [ref=e1616]: Magang Berbayar
                - generic [ref=e1618]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy by Ruangguru - Ngawi (Gading) Ruangguru Magang On-site • Ngawi Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1619] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-by-ruangguru-324~ruangguru
              - generic [ref=e1620]:
                - generic [ref=e1621]:
                  - button [ref=e1622]:
                    - img [ref=e1623]
                  - generic [ref=e1625]:
                    - img "Logo Ruangguru" [ref=e1627]
                    - generic [ref=e1628]:
                      - heading "Sales Trainee Academy by Ruangguru - Ngawi (Gading)" [level=2] [ref=e1629]
                      - generic [ref=e1630]:
                        - text: Ruangguru
                        - img [ref=e1631]
                  - generic [ref=e1633]:
                    - generic [ref=e1634]:
                      - img [ref=e1636]
                      - button "Magang" [ref=e1639]
                    - generic [ref=e1640]:
                      - img [ref=e1641]
                      - generic [ref=e1644]: On-site • Ngawi Regency
                    - generic [ref=e1645]:
                      - img [ref=e1646]
                      - generic [ref=e1648]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1649]:
                      - img [ref=e1650]
                      - generic [ref=e1655]: Magang Berbayar
                - generic [ref=e1657]: Rekruter aktif 5m lalu
            - link "Logo Ruangguru Sales Trainee Academy by Ruangguru - Pacitan (Baleharjo) Ruangguru Magang On-site • Pacitan Regency Min. Sedang Kuliah (Final Year) Magang Berbayar Rekruter aktif 5m lalu" [ref=e1658] [cursor=pointer]:
              - /url: /loker/sales-trainee-academy-by-ruangguru-323~ruangguru
              - generic [ref=e1659]:
                - generic [ref=e1660]:
                  - button [ref=e1661]:
                    - img [ref=e1662]
                  - generic [ref=e1664]:
                    - img "Logo Ruangguru" [ref=e1666]
                    - generic [ref=e1667]:
                      - heading "Sales Trainee Academy by Ruangguru - Pacitan (Baleharjo)" [level=2] [ref=e1668]
                      - generic [ref=e1669]:
                        - text: Ruangguru
                        - img [ref=e1670]
                  - generic [ref=e1672]:
                    - generic [ref=e1673]:
                      - img [ref=e1675]
                      - button "Magang" [ref=e1678]
                    - generic [ref=e1679]:
                      - img [ref=e1680]
                      - generic [ref=e1683]: On-site • Pacitan Regency
                    - generic [ref=e1684]:
                      - img [ref=e1685]
                      - generic [ref=e1687]: Min. Sedang Kuliah (Final Year)
                    - generic [ref=e1688]:
                      - img [ref=e1689]
                      - generic [ref=e1694]: Magang Berbayar
                - generic [ref=e1696]: Rekruter aktif 5m lalu
          - generic [ref=e1698]:
            - img "Mobile App UI" [ref=e1699]
            - generic [ref=e1700]:
              - heading "Jangan lewatkan undangan interview dan lowongan terbaru—dapatkan lewat notifikasi aplikasi!" [level=2] [ref=e1701]
              - paragraph [ref=e1702]: Download aplikasi Dealls sekarang!
            - generic [ref=e1703]:
              - img [ref=e1705]
              - generic [ref=e1708]:
                - link [ref=e1709] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
                  - img [ref=e1710]
                - link [ref=e1734] [cursor=pointer]:
                  - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
                  - img [ref=e1735]
          - button "Lebih Banyak" [ref=e1763] [cursor=pointer]:
            - generic [ref=e1764]: Lebih Banyak
            - img [ref=e1765]
    - contentinfo [ref=e1767]:
      - generic [ref=e1768]:
        - generic [ref=e1769]:
          - link [ref=e1770] [cursor=pointer]:
            - /url: /
            - img [ref=e1771]
          - generic [ref=e1779]:
            - heading "Website Lowongan Kerja dan Loker Terbaru di Indonesia" [level=2] [ref=e1780]
            - 'heading "Dealls adalah job portal dan website cari kerja #1 di Indonesia dengan lowongan kerja berkualitas dari 7.000+ perusahaan terbaik. Dealls juga hadir dengan program mentoring gratis untuk pengembangan karir & CV Reviewer untuk membantu pencari kerja mendapatkan karir impiannya lebih mudah." [level=3] [ref=e1781]'
            - generic [ref=e1782]: Dapatkan kesempatan pekerjaan baru & belajar dari Mentor terbaik di Indonesia
            - generic [ref=e1783]: "Unduh Dealls: Jobs & Mentoring"
          - generic [ref=e1784]:
            - link "Download Dealls Jobs on Google Play Store" [ref=e1785] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.deallsjobs
              - img [ref=e1786]
            - link "Download Dealls Jobs on Apple App Store" [ref=e1810] [cursor=pointer]:
              - /url: https://apps.apple.com/id/app/dealls-jobs-mentoring/id1624585434
              - img [ref=e1811]
        - generic [ref=e1837]:
          - generic [ref=e1838]:
            - heading "Loker" [level=3] [ref=e1839]
            - generic [ref=e1840]:
              - link "Loker berdasarkan Industri" [ref=e1841] [cursor=pointer]:
                - /url: /loker/industri
              - link "Loker berdasarkan Lokasi" [ref=e1842] [cursor=pointer]:
                - /url: /loker/lokasi
              - link "Loker berdasarkan Posisi" [ref=e1843] [cursor=pointer]:
                - /url: /loker/posisi
                - text: Loker berdasarkan
                - text: Posisi
              - link "Loker Penuh Waktu" [ref=e1844] [cursor=pointer]:
                - /url: /loker/tipe/loker-full-time
              - link "Loker Kontrak" [ref=e1845] [cursor=pointer]:
                - /url: /loker/tipe/loker-kontrak
              - link "Loker Paruh Waktu" [ref=e1846] [cursor=pointer]:
                - /url: /loker/tipe/loker-part-time
              - link "Loker Magang" [ref=e1847] [cursor=pointer]:
                - /url: /loker/tipe/loker-magang
              - link "Loker Freelance" [ref=e1848] [cursor=pointer]:
                - /url: /loker/tipe/loker-freelance
              - link "Loker Populer" [ref=e1849] [cursor=pointer]:
                - /url: /loker/populer
          - generic [ref=e1850]:
            - heading "Untuk Perusahaan" [level=3] [ref=e1851]
            - generic [ref=e1852]:
              - link "ATS & Job Portal untuk Perusahaan" [ref=e1853] [cursor=pointer]:
                - /url: /pasang-loker-gratis
              - 'link "Kantorku: Fast, reliable & intuitive HRIS" [ref=e1854] [cursor=pointer]':
                - /url: https://kantorku.id/
              - link "Jadwalkan Demo" [ref=e1855] [cursor=pointer]:
                - /url: /pasang-loker-gratis#employer-contact-form
              - link "Harga" [ref=e1856] [cursor=pointer]:
                - /url: /pasang-loker-gratis/pricing
        - generic [ref=e1857]:
          - generic [ref=e1858]:
            - heading "Hubungi Kami" [level=3] [ref=e1859]
            - generic [ref=e1861]:
              - link [ref=e1862] [cursor=pointer]:
                - /url: https://www.instagram.com/dealls.jobs/
                - img [ref=e1863]
              - link [ref=e1865] [cursor=pointer]:
                - /url: https://twitter.com/DeallsJobs/
                - img [ref=e1866]
              - link [ref=e1868] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/dealls/
                - img [ref=e1869]
          - generic [ref=e1871]:
            - heading "Tentang Dealls" [level=3] [ref=e1872]
            - generic [ref=e1873]:
              - link "Cerita Kami" [ref=e1874] [cursor=pointer]:
                - /url: /about
              - link "Blog" [ref=e1875] [cursor=pointer]:
                - /url: https://dealls.com/pengembangan-karir
              - link "Gabung dengan Tim Kami" [ref=e1876] [cursor=pointer]:
                - /url: https://sh.dealls.com/dealls-career
              - link "Kebijakan Pribadi" [ref=e1877] [cursor=pointer]:
                - /url: /privacy-policies
              - link "Syarat & Kondisi Dealls Group" [ref=e1878] [cursor=pointer]:
                - /url: /terms-and-condition
              - link "Syarat & Kondisi KantorKu" [ref=e1879] [cursor=pointer]:
                - /url: https://kantorku.id/terms-and-condition
      - generic [ref=e1880]: © 2026 Dealls. All rights reserved
  - alert [ref=e1881]: Info Lowongan Kerja & Peluang Karir Terbaru Oktober 2026 | Dealls
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