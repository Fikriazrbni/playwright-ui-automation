import { Page, Locator, expect, test } from "@playwright/test";
import { ReportHelper } from "../utils/ReportHelper";


export class DeallsPage {
    readonly page: Page;
    readonly loginBtn: Locator;
    readonly inputEmailBox: Locator;
    readonly inputPasswordBox: Locator;
    readonly submitBtn: Locator;
    readonly homePageText: Locator;
    readonly profileBtn: Locator;
    readonly myProfileBtn: Locator;
    readonly detailProfileName: Locator;

    //save job
    readonly searchJobInput: Locator;
    readonly saveJobBtn: Locator
    readonly jobName: Locator;
    readonly savedJobProfileDetail: Locator;
    readonly savedJobList: Locator;
    readonly textJobRelatedToSearch: Locator;
    savedJobTitle: string = '';

    constructor(page: Page) {
        this.page = page;
        this.loginBtn = page.locator('xpath=//*[@id="dealls-navbar-login-btn"]')
        this.inputEmailBox = page.locator('xpath=//*[@id="basic_email"]')
        this.inputPasswordBox = page.locator('xpath=//*[@id="basic_password"]')
        this.submitBtn = page.locator('xpath=//button[@type="submit"]')
        this.homePageText = page.locator('//h1[contains(text(), "Cari Lowongan Kerja Pakai Dealls")]')
        this.profileBtn = page.locator('xpath=//*[@id="dropdown-area"]')
        this.myProfileBtn = page.locator('xpath=//*[@id="dropdown-area"]//span[contains(text(), "Profil")]')
        this.detailProfileName = page.locator('xpath=//*[@id="__next"]//span[contains(text(), "Fikri")]')

        //save job
        this.searchJobInput = page.locator('xpath=//*[@id="searchJob"]')
        this.saveJobBtn = page.locator('xpath=//*[@id="jobs-container"]/a[1]/div/div[1]/button')
        this.jobName = page.locator('xpath=//*[@id="jobs-container"]/a[1]//h2')
        this.savedJobProfileDetail = page.locator('xpath=//*[@id="__next"]//*[contains(text(), "Pekerjaan Tersimpan")]')
        this.savedJobList = page.locator('xpath=//*[@id="__next"]//div[@class= "relative"]/a/div[2]/div[1]')
        this.textJobRelatedToSearch = page.locator('xpath=//*[@id="__next"]//div[contains(text(), "Jobs related to")]')
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async clickLoginButton() {
        await this.loginBtn.click();
    }

    async fillEmailAndPassword(email: string, password: string) {
        await this.inputEmailBox.fill(email)
        await this.inputPasswordBox.fill(password)
        await this.submitBtn.click()
        await this.homePageText.waitFor()
    }

    async validateIsDealls() {
        // Basic validation to check URL
        await expect(this.page).toHaveURL(/.*dealls.*/);
        await expect(this.page).toHaveTitle(/.*Dealls.*/);
    }

    async validateSuccessLogin() {
        await this.profileBtn.click()
        await this.myProfileBtn.click()
        await this.detailProfileName.waitFor()
        const profileName = this.detailProfileName.innerText()
        test.info().annotations.push({ type: 'info', description: `Profile name found: ${profileName}` });
    }

    async searchJob(jobTitle: string) {
        await this.searchJobInput.waitFor()
        await this.searchJobInput.fill(jobTitle)
        await this.searchJobInput.press('Enter')
        await this.textJobRelatedToSearch.waitFor()
    }

    async clickSaveJob() {
        await this.jobName.waitFor()
        await this.saveJobBtn.click()
        this.savedJobTitle = await this.jobName.innerText()
    }

    async getSavedJobTitles(): Promise<string[]> {
        await this.savedJobList.first().waitFor();
        return await this.savedJobList.allInnerTexts();
    }

    async validateSavedJobContains(keyword: string) {
        const jobTitles = await this.getSavedJobTitles();
        test.info().annotations.push({ type: 'info', description: `Saved jobs: ${jobTitles.join(', ')}` });
        const hasMatch = jobTitles.some(title => title.toLowerCase().includes(keyword.toLowerCase()));
        expect(hasMatch, `Expected at least one job to contain "${keyword}", but got: ${jobTitles.join(', ')}`).toBeTruthy();
    }

    async validateSavedJob() {
        await this.profileBtn.click()
        await this.myProfileBtn.click()
        await this.savedJobProfileDetail.click()
        await this.validateSavedJobContains(this.savedJobTitle);
    }

    async openDealls() {
        await this.page.goto('https://dealls.com/');
    }
}