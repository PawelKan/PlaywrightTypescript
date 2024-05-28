import {Page} from '@playwright/test'

export class NavigateTo{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public static async homePageUrl(page: Page){
        await page.goto("https://demoqa.com")
    }
}