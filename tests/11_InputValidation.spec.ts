import {test} from "@playwright/test"

test("Input validation", async ({page})=> {

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/11/quantity-update.html")

    page.locator("#ProductName")

})