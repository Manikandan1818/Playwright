import {expect, test} from "@playwright/test"

test("Error validation", async ({page})=> {

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/bus-booking-portal.html")

    await page.getByText("Search Buses").first().click()

    const errorMsg = await page.locator("#ErrorMsg").textContent() // text of element

    console.log(errorMsg)

    expect(errorMsg).toBe("Please fill all reuired fields") // valdating error message

    await page.waitForTimeout(5000)


})