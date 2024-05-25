import {test, expect} from "@playwright/test"



test.beforeEach("Go to Home Page", async ({page}) =>{
    await page.goto('https://demoqa.com/')
})

test.describe("Demo tests for DemoQA", () =>{
    test("Verify main buttons on Home Page", async ({page}) => {
        await expect(page.getByText('Elements')).toBeVisible()
        await expect(page.getByText('Forms')).toBeVisible()
        await expect(page.getByText('Alerts, Frame & Windows')).toBeVisible()
        await expect(page.getByText('Widgets')).toBeVisible()
        await expect(page.getByText('Interactions')).toBeVisible()
        await expect(page.getByText('Book Store Application')).toBeVisible()
        
    })
    test("Go to Elements page", async ({page}) => {
        await page.getByText('Elements').click()
    })
    test("Go to Forms page", async ({page}) => {
        await page.getByText('Forms').click()
    })
    test("Go to Alerts, Frame & Windows page", async ({page}) => {
        await page.getByText('Alerts, Frame & Windows').click()
    })
    test("Go to Widgets page", async ({page}) => {
        await page.getByText('Widgets').click()
    })
    test("Go to Interactions page", async ({page}) => {
        await page.getByText('Interactions').click()
    })
    test("Go to Book Store Application page", async ({page}) => {
        await page.getByText('Book Store Application').click()
    })
})