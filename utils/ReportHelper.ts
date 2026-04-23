import { Page, TestInfo } from '@playwright/test';

export class ReportHelper {
  static async attachScreenshot(page: Page, testInfo: TestInfo, name: string) {
    const screenshot = await page.screenshot();
    await testInfo.attach(name, {
      body: screenshot,
      contentType: 'image/png'
    });
  }
}
