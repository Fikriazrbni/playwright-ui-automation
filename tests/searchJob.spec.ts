import { test, expect } from '@playwright/test';
import { DeallsPage } from '../pages/DeallsPage';

test('Search Job', async ({page}, testInfo) =>{
    const deallsPage = new DeallsPage(page)
    const jobTitle = "developer"

    await test.step('Visit dealls page', async () => {  
        await deallsPage.openDealls()
        await deallsPage.validateIsDealls()
    })

    await test.step('Search and Validate Job', async () => {
        await deallsPage.searchJob(jobTitle)
        await deallsPage.validateSearchResults(jobTitle)
    })
})