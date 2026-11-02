import { test} from "@playwright/test"


// GetbyText
 test("Playwright Locators", async ({page}) => {
    await page.goto("http://www.google.com")
    const gmail_link = page.getByText("Gmail")
    await gmail_link.click()
    await page.waitForTimeout(10000)

    // // GetbyText by exact 
    await page.goto("https://playwright.dev/")
    const API_Link = page.getByText("API", {exact: true})
    await API_Link.click()
    await page.waitForTimeout(8000)

    await page.goto("https://textarea.online/")
    await page.locator("#textarea").fill("Thi is\nyour\ntime Mani.........")
    await page.waitForTimeout(5000)

})
