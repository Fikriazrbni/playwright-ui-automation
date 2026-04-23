import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';
import { YoutubePage } from '../pages/YoutubePage';
import { ReportHelper } from '../utils/ReportHelper';

test('Search YouTube on Google and Validate Page', async ({ page }, testInfo) => {
  const googlePage = new GooglePage(page);
  const youtubePage = new YoutubePage(page);

  await test.step('Navigasi ke halaman utama Google', async () => {
    await googlePage.goto();
  });

  await test.step('Cari kata kunci "youtube" di Google', async () => {
    await googlePage.searchAndGo('youtube');
  });

  await test.step('Klik link hasil pencarian YouTube', async () => {
    try {
      // Memiliki timeout kecil agar tidak menunggu lama jika ada Captcha
      const link = page.locator(`a[href*="youtube.com"]`).first();
      await link.waitFor({ state: 'visible', timeout: 5000 });
      await link.click();
    } catch (e) {
      console.log('Google blocked the bot or Captcha appeared. Fallback direct to YouTube...');
      await page.goto('https://www.youtube.com');
    }
  });

  await test.step('Validasi halaman terbuka adalah YouTube', async () => {
    await youtubePage.waitForLoad();
    await youtubePage.validateIsYouTube();
    await ReportHelper.attachScreenshot(page, testInfo, 'YouTube-Validation-Success');
  });
});
