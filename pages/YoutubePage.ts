import { Page, Locator, expect } from '@playwright/test';

export class YoutubePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async validateIsYouTube() {
    // Basic validation to check URL
    await expect(this.page).toHaveURL(/.*youtube\.com.*/);
    await expect(this.page).toHaveTitle(/.*YouTube.*/);
  }
}
