import { Given, Then, When } from "@cucumber/cucumber";
import { NavigationMenu } from "../pages/NavigationMenu"
import { URLs } from "../../fixtures/urls";
import { expect } from "@playwright/test";

const pageToNavigationMethod: Record<string, (menu: NavigationMenu) => Promise<void>> = {
  invoices: (menu) => menu.goToInvoicesPage(),
  privacy: (menu) => menu.goToPrivacyPage(),
  home: (menu) => menu.goToHomePage(),
};

Given("the user navigates to the application", async function () {
  await this.page.goto(URLs.baseURL);
});

When("the user navigates to the {string} page", async function (pageName: string) {
   const menu = new NavigationMenu(this.page);
   await menu.navigateTo(pageName);
})

// Then("the title of the {string} page is {string}", async function (pageName: string, expectedTitle: string) {
//   await expect(this.page).toHaveTitle(expectedTitle);
// })

Then("the {string} page title should be {string}", async function (pageName: string, expectedTitle: string) {
  await expect(this.page).toHaveTitle(expectedTitle);
})
