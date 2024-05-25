import {test, expect} from "@playwright/test"

test.describe("Demo tests for DemoQA", () =>{
    test("Go to page and verify elements on it", async ({page}) => {
        await page.goto('https://demoqa.com/')
        expect(await page.getByText('Elements')).toBeVisible()
        expect(await page.getByText('Forms')).toBeVisible()
        expect(await page.getByText('Alerts, Frame & Windows')).toBeVisible()
        expect(await page.getByText('Widgets')).toBeVisible()
        expect(await page.getByText('Interactions')).toBeVisible()
        expect(await page.getByText('Book Store Application')).toBeVisible()

        await page.getByText('Elements').click()
    })
})