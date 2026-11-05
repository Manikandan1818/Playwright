import {expect, test} from "@playwright/test"

test("Assertion", async ({page})=>{

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/mobile-recharge.html")

    await expect(page).toHaveTitle("Mobile Recharge") // Auto-retrying assertion


})