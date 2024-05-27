import { beforeEach } from "node:test"
import { join } from "path"
import {test, expect} from "playwright/test"


test.beforeEach("Open DemoQa - Practice From page", async ({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
})

test('fill form', async ({page}) => {
    const name = page.getByPlaceholder('First Name')
    const lastName = page.getByPlaceholder('Last Name')
    const email = page.getByPlaceholder('name@example.com')
    const genderFemale = page.getByText('Female', { exact: true })
    const mobile = page.getByPlaceholder('Mobile Number')
    const dateOfBirth = page.locator('#dateOfBirthInput')
    const dateToChose = page.getByText('30', {exact: true});
    const subjects = page.locator("#subjectsInput")
    const subjectToChoose = page.getByText('Maths', { exact: true })
    const hobbiesSport = page.getByText('Sports')
    const picture = page.getByLabel('Select picture')
    const currentAddress = page.getByPlaceholder('Current Address')
    const selectState = page.getByText('Select State')
    const stateToSelect = page.getByText('Uttar Pradesh', { exact: true })
    const selectCity = page.getByText('Select City')
    const cityToSelect = page.getByText('Lucknow', {exact: true})
    const submit = page.getByRole('button', { name: 'Submit' })
    const tableModal = page.getByRole('dialog', {name: "Thanks for submitting the form"})
    
    await name.fill("testName")
    await lastName.fill('testLastName')
    await email.fill('test@longTestingFakeMail.com')
    await genderFemale.click()
    await mobile.fill('9998887777')
    await dateOfBirth.fill("30 Dec 2030")
    await dateToChose.click()
    await subjects.fill('Math')
    await subjectToChoose.click();
    await hobbiesSport.click()
    await picture.setInputFiles('tests\\data\\LoremIpsumFile.txt')
    await currentAddress.fill('Current address text')
    await selectState.click()
    await stateToSelect.click()
    await selectCity.click()
    await cityToSelect.click()
    await submit.click()

    await expect(tableModal).toBeVisible()
})