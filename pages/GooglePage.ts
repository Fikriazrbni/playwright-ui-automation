import { Page, Locator } from '@playwright/test';

export class GooglePage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('textarea[name="q"], input[name="q"]');
  }

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async searchAndGo(text: string) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }

  async clickResultByDomain(domain: string) {
    // Click the result that has the href containing the domain
    const link = this.page.locator(`a[href*="${domain}"]`).first();
    await link.click();
  }
}
