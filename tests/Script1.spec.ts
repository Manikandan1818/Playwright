    // Launch the broswer Manually

import { test, chromium} from "@playwright/test"

test("Open the Application", async ({}) => {

    // Launch the broswer
    const broswer = await chromium.launch()
    // Create a new broswer context
    const context = await broswer.newContext()
    // Open a Page
    const page = await context.newPage()

    await page.goto("http://www.google.com")

    await page.close()
})
