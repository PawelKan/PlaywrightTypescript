import {Page, Locator, expect} from "@playwright/test"
import { BasePage } from "./BasePage";

export class FormPage extends BasePage{

        readonly name: Locator; 
        readonly lastName: Locator;
        readonly email: Locator;
        readonly genderFemale: Locator;
        readonly mobile: Locator;
        readonly dateOfBirth: Locator;
        readonly dateToChose: Locator;
        readonly subjects: Locator;
        readonly subjectToChoose: Locator;
        readonly hobbiesSport: Locator;
        readonly picture: Locator;
        readonly currentAddress: Locator;
        readonly selectState: Locator; 
        readonly stateToSelect: Locator;
        readonly selectCity: Locator;
        readonly cityToSelect: Locator;
        readonly submit: Locator;
        readonly tableModal: Locator;

    constructor (page: Page){
        super(page)
        this.name = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.email = page.getByPlaceholder('name@example.com')
        this.genderFemale = page.getByText('Female', { exact: true })
        this.mobile = page.getByPlaceholder('Mobile Number')
        this.dateOfBirth = page.locator('#dateOfBirthInput')
        this.dateToChose = page.getByText('30', {exact: true});
        this.subjects = page.locator("#subjectsInput")
        this.subjectToChoose = page.getByText('Maths', { exact: true })
        this.hobbiesSport = page.getByText('Sports')
        this.picture = page.getByLabel('Select picture')
        this.currentAddress = page.getByPlaceholder('Current Address')
        this.selectState = page.getByText('Select State')
        this.stateToSelect = page.getByText('Uttar Pradesh', { exact: true })
        this.selectCity = page.getByText('Select City')
        this.cityToSelect = page.getByText('Lucknow', {exact: true})
        this.submit = page.getByRole('button', { name: 'Submit' })
        this.tableModal = page.getByRole('dialog', {name: "Thanks for submitting the form"})
    }

    async fillPracticeFormFields(){
        await this.name.fill("testName")
        await this.lastName.fill('testLastName')
        await this.email.fill('test@longTestingFakeMail.com')
        await this.genderFemale.click()
        await this.mobile.fill('9998887777')
        await this.dateOfBirth.fill("30 Dec 2030")
        await this.dateToChose.click()
        await this.subjects.fill('Math')
        await this.subjectToChoose.click();
        await this.hobbiesSport.click()
        await this.picture.setInputFiles('tests\\data\\LoremIpsumFile.txt')
        await this.currentAddress.fill('Current address text')
        await this.selectState.click()
        await this.stateToSelect.click()
        await this.selectCity.click()
        await this.cityToSelect.click()
    }

    async submitPracticeFormForm(){
        await this.submit.click()
    }

    async assertModalIsVisibleAfterSumbmittingPracticeForm(){
        await expect(this.tableModal).toBeVisible()
    }
}