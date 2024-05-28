import {test, Page, expect} from '@playwright/test';
import { HomePage } from '../../demo-qa-page-objects/HomePage';
import { NavigateTo } from '../../demo-qa-page-objects/NavigateToPage';

test.describe('DemoQA - Home Page tests', () => {

    test.beforeEach('Open Home Page before each test', ({page}) =>{
        NavigateTo.homePageUrl(page)
    })
    
    test('Verify Home Page - Elements can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnElement()

        await page.waitForURL('https://demoqa.com/elements')
        await expect(page).toHaveURL('https://demoqa.com/elements')
    })

    test('Verify Home Page - Forms can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnForms()

        await page.waitForURL('https://demoqa.com/forms')
        await expect(page).toHaveURL('https://demoqa.com/forms')
    })

    test('Verify Home Page - Alerts, Frame and Windows can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnAlertsFrameAndWindows()

        await page.waitForURL('https://demoqa.com/alertsWindows')
        await expect(page).toHaveURL('https://demoqa.com/alertsWindows')
    })

    test('Verify Home Page - Widgets can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnWidgets()

        await page.waitForURL('https://demoqa.com/widgets')
        await expect(page).toHaveURL('https://demoqa.com/widgets')
    })

    test('Verify Home Page - Interactions can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnInteractions()

        await page.waitForURL('https://demoqa.com/interaction')
        await expect(page).toHaveURL('https://demoqa.com/interaction')
    })

    test('Verify Home Page - Book Store Application can be open', async ({page}) => {
        const onHomePage = new HomePage(page)
        await onHomePage.clickOnbookStoreApplication()

        await page.waitForURL('https://demoqa.com/books')
        await expect(page).toHaveURL('https://demoqa.com/books')
    })
})