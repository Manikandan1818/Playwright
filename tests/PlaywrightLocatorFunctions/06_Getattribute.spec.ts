import {test} from "@playwright/test"


test("Locators function", async ({page})=> {    
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/11/quantity-update.html")

    const titlevalue = await page.locator(".tooltip-link").getAttribute("title")

    console.log("tootltip is: ", titlevalue)
    
    await page.waitForTimeout(5000)

})