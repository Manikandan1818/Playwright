import {expect, test} from "@playwright/test"


test("Get the text of the element", async ({page})=> {    
    
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/11/quantity-update.html")

    await page.locator("text=Update Quantity").click()

    const textValue = await page.locator("#msg").textContent()

    expect(textValue).toBe("Your quantity has been updated to: 1")

    console.log(textValue)

    await page.waitForTimeout(5000)

})