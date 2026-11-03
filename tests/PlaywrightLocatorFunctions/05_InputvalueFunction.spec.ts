import {expect, test} from "@playwright/test"

test("Setting viewport", async ({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

    const cityname = await page.locator("#city").inputValue()

    console.log("city value is ", cityname)

    expect(cityname).toBe("Bangalore")

    await page.waitForTimeout(5000)

    await page.locator("#city").fill("Kollur")
    
    const cityValue = await page.locator("#city").inputValue()

    console.log("city value is ", cityValue)
    
    await page.waitForTimeout(5000)
})