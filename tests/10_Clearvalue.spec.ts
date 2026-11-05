import {test} from "@playwright/test"

test("Clear value functions", async ({page})=> {

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/city-area-code-body-font-family.html")

    // await page.getByPlaceholder("Enter city").clear()

    // await page.getByPlaceholder("Enter city").fill("Madurai")

    const cityValue= page.getByPlaceholder("Enter city")

    await cityValue.clear()
    await cityValue.fill("Madurai")

   


})