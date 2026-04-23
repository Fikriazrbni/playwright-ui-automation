import { test as setup } from '@playwright/test';
import { DeallsPage } from '../pages/DeallsPage';

const authFile = 'test-results/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const deallsPage = new DeallsPage(page);
    await deallsPage.openDealls();
    await deallsPage.clickLoginButton();
    await deallsPage.fillEmailAndPassword(
        process.env.DEALLS_EMAIL!,
        process.env.DEALLS_PASSWORD!
    );
    await page.context().storageState({ path: authFile });
});
