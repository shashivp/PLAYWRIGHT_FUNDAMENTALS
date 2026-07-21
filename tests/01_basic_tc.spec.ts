import {test, expect} from "@playwright/test";

test("verify title", async ({page}) => {

    await page.goto("https://www.idrive.com");
    
    await expect(page).toHaveTitle("Cloud Backup and Storage solutions for home and business - IDrive®");
});
