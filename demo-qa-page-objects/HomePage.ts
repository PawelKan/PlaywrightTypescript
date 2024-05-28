import {Page, Locator} from "@playwright/test"
import { BasePage } from "./BasePage"

export class HomePage extends BasePage{

    readonly elements: Locator
    readonly forms: Locator
    readonly alertsFrameAndWindows: Locator
    readonly widgets: Locator
    readonly interactions: Locator
    readonly bookStoreApplication: Locator
    
    constructor(page:Page){
        super(page)
        this.elements = page.getByText('Elements')
        this.forms = page.getByText('Forms')
        this.alertsFrameAndWindows = page.getByText('Alerts, Frame & Windows');
        this.widgets = page.getByText('Widgets')
        this.interactions = page.getByText('Interactions')
        this.bookStoreApplication = page.getByText('Book Store Application')
    }

    async clickOnElement() { await this.elements.click() }
    async clickOnForms() { await this.forms.click() }
    async clickOnAlertsFrameAndWindows() { await this.alertsFrameAndWindows.click() }
    async clickOnWidgets() { await this.widgets.click() }
    async clickOnInteractions() { await this.interactions.click() }
    async clickOnbookStoreApplication() { await this.bookStoreApplication.click() }
}
