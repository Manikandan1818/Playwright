import {test} from "@playwright/test"

test("Dropdown", async ({page})=> {

    await page.goto("https://www.amazon.com/")

    const dropDownlist = page.getByTitle("Search in")

    console.log(dropDownlist)



})