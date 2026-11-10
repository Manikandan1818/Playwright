import {expect, test} from "@playwright/test"

test("Input validation", async ({page})=> {

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/11/quantity-update.html")

    const productName = await page.locator("#ProductName").inputValue()

    console.log(productName)

    expect(productName).toBe("Bluetooth Speaker")

})