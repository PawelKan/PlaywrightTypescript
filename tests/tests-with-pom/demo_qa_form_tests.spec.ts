import {test, expect} from "@playwright/test"
import { NavigateTo } from "../../demo-qa-page-objects/NavigateToPage"
import { FormPage } from "../../demo-qa-page-objects/FormPage"


test.beforeEach("Go to Practice Form", ({page}) => {
    NavigateTo.practiceFormUrl(page)
})

test("fill page with data and click submit", async ({page}) => {
    const onFormPage = new FormPage(page)
    await onFormPage.fillPracticeFormFields()
    await onFormPage.submitPracticeFormForm()

    await onFormPage.assertModalIsVisibleAfterSumbmittingPracticeForm()
})