import { test, expect } from '@playwright/test';
import { DeallsPage } from '../pages/DeallsPage';
import { ReportHelper } from '../utils/ReportHelper';

test('Login dealls page', async ({ page }, testInfo) => {

    const deallsPage = new DeallsPage(page)

    await test.step('Visit dealls page', async () => {
        await deallsPage.openDealls()
        await deallsPage.validateIsDealls()
    })

    await test.step('Login Dealls', async () => {
        await deallsPage.clickLoginButton()
        await deallsPage.fillEmailAndPassword(
            process.env.DEALLS_EMAIL!,
            process.env.DEALLS_PASSWORD!
        )
    })

    await test.step('Validate success login', async () => {
        await deallsPage.validateSuccessLogin()
    })

    await ReportHelper.attachScreenshot(page, testInfo, 'Last state after login dealls');
})