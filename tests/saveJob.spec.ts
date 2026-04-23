import { test, expect } from '@playwright/test';
import { DeallsPage } from '../pages/DeallsPage';

test('Save Job', async ({page}, testInfo) =>{
    const deallsPage = new DeallsPage(page)

    await test.step('Visit dealls page', async () => {  
        await deallsPage.openDealls()
        await deallsPage.validateIsDealls()
    })

    await test.step('Save Job', async () => {
        await deallsPage.searchJob("QA")
        await deallsPage.clickSaveJob()
        await deallsPage.validateSavedJob()
    })
})