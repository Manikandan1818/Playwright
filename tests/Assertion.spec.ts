import {expect, test} from "@playwright/test"

test("Assertion", async ({page})=>{

    // await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/mobile-recharge.html")
    await page.goto("https://www.google.com/")

    await expect(page).toHaveTitle("Mobile Recharge") // Auto-retrying assertion

    const titleValue = await page.title("Google")

    expect(titleValue).toBe("Google") // Non-retrying assertions
    
    expect(titleValue).not.toBe("Not Google") // Negative assertions - not

    // Hard assertion - If the assertion will be failed it will not run after the scripts
    expect(titleValue).not.toBe("Hard - Google ")

    console.log("script ends ......")
    
    // Soft assertion - If the assertion will be failed it will run after the scripts
    await expect.soft(page).toHaveTitle("Soft - Google")

    console.log("script ends ......")


    await page.waitForTimeout(3000)

    


})