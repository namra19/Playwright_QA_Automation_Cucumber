import { Given, Then, When } from "@cucumber/cucumber";
import { NavigationMenu } from "../pages/NavigationMenu"
import { URLs } from "../../fixtures/urls";
import { expect } from "@playwright/test";

Given("the user navigates to the application", async function () {
  await this.page.goto(URLs.baseURL);
});

When("the user navigates to invoices page", async function () {
  const menu = new NavigationMenu(this.page);
  await menu.goToInvoicesPage();
});

When("the user navigates to privacy page", async function () {
  const menu = new NavigationMenu(this.page);
  await menu.goToPrivacyPage();
});

When("the user navigates to home page", async function () {
  const menu = new NavigationMenu(this.page);
  await menu.goToHomePage();
});

Then('the title of the invoices page is {string}', async function (expectedTitle) {
  await expect(this.page).toHaveTitle(expectedTitle);
})

Then('the title of the privacy page is {string}', async function (expectedTitle) {
  await expect(this.page).toHaveTitle(expectedTitle);
})

Then('the title of the home page is {string}', async function (expectedTitle) {
  await expect(this.page).toHaveTitle(expectedTitle);
})
