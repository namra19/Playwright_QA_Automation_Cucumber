import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser } from "playwright/test";

   let browser: Browser;
   let page: Page;
       
  Given('the user navigates to the application', async () => {
    browser = await chromium.launch({headless: false});
            page = await browser.newPage();
            await page.goto("https://localhost:5001/")
  });
       

       
  When('the user clicks on the Home menu item', async () => {
    console.log('I am on home page')
    });

       
      //    Then('the {string} page is displayed', async function () {
      //   console.log('I am on home page')
      //    });

       
      //    When('the user clicks on the {string} menu item', async function () {
      //         console.log('I am on home page')
      //    });
       

       
      //    Then('the {string} page is displayed', async function () {
      //    console.log('I am on home page')
      //    });

      //    When('the user clicks on the {string} menu item', async function () {
      //      console.log('I am on home page')
      //    });

       
      //    Then('the {string} page is displayed', async function () {
      //      console.log('I am on home page')
      //    });
       

       
      //    Given('the user navigates to the application', async function () {
      //       console.log('I am on home page')
      //    });

       
      //    Given('the user is on the {string} page', async function () {
      //      console.log('I am on home page')
      //    });
       
       
      //    When('the user retrieves all invoice amounts', async function () {
      //       console.log('I am on home page')
      //    });
       
       
      //    When('the user calculates the total', async function () {
      //        console.log('I am on home page')
      //    });
       
      //    Then('the summary total should match the calculated value', async function () {
      //      console.log('I am on home page')
      //    });
       
       
      //    Given('the user navigates to the application', async function () {
      //      console.log('I am on home page')
      //    });
       
       
      //    Given('the user is on the {string} page', async function () {
      //  console.log('I am on home page')
      //    });
       
       
      //    When('the user retrieves the amount for invoice {string}', async function () {
      //    console.log('I am on home page')
      //    });
       
       
      //    Then('the amount should be {string}', async function () {
      //   console.log('I am on home page')
      //    });