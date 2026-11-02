import {test} from "@playwright/test"

test("Setting viewport", async ({page})=>{

    await page.goto("https://www.google.com/")

    // viewportSize - To get the current viewport size
    const browser_width = page.viewportSize()?.width;
    const browser_height = page.viewportSize()?.height;

    // setviewportsize - to set the vieport of the window

    await page.setViewportSize({width: 1685, height:906})

    await page.waitForTimeout(5000)


})