import {test} from "@playwright/test"

/* test("Playwright Locators", async({page}) => {

//   Example 1 
 await page.goto("https://www.wikipedia.org/")

    const search_textbox = page.getByLabel("Search Wikipedia")
    
    await search_textbox.fill("Vijay")

    await page.waitForTimeout(8000) 

//   Example 2 

     await page.goto("https://www.facebook.com/")

    const email_textbox = page.getByLabel("Email address or mobile number")
    
    await email_textbox.fill("test@gmail.com")

    await page.waitForTimeout(8000) 
})*/

// Get by placeholder

/*test("Playwright locators", async ({page}) => {
    await page.goto("https://www.amazon.com/")
  
    const serach_textbox = page.getByPlaceholder("Search Amazon")
  
    await serach_textbox.fill("laptop")

    await page.waitForTimeout(5000)
})*/

/* test("Playwright locators", async ({page}) => {

    await page.goto("https://www.zomato.com/madurai/restaurants")

    const image_alt = page.getByAltText("Restaurant Card").first()

    await image_alt.click();

    await page.waitForTimeout(5000)

}) */

    // Get by role

    test("Playwright locators", async ({page}) => {

    await page.goto("https://www.google.com")

    const gmail_link = page.getByRole("link", {name: "gmail", exact: true})

    await gmail_link.click()

        await page.waitForTimeout(5000)

})