import {expect, test} from "@playwright/test"

test("Get the text of the element using innerHTML and InnerText", async ({page})=> {    
    
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/currentdatevalue.html")

    const textContent = await page.locator("#demo1").textContent()

    const innerText = await page.locator("#demo1").innerText()
    
    const innerHTML = await page.locator("#demo1").innerHTML()

    console.log(textContent)
    console.log(innerText)
    console.log(innerHTML)

    await page.waitForTimeout(5000)

})