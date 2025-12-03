import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { NavigationMenuLocators } from "../locators/navigationMenu.locators"

export class NavigationMenu extends BasePage {
  readonly invoicesPageLink: Locator;
  readonly privacyPageLink: Locator;
  readonly homePageLink: Locator;

  constructor(page: Page) {
    super(page);
    this.invoicesPageLink = page.locator(NavigationMenuLocators.invoicesPageLink);
    this.privacyPageLink = page.locator(NavigationMenuLocators.privacyPageLink);
    this.homePageLink = page.locator(NavigationMenuLocators.homePageLink);
  }

  async goToInvoicesPage() {
    await this.invoicesPageLink.click();
  }

  async goToPrivacyPage() {
    await this.privacyPageLink.click();
  }

  async goToHomePage() {
    await this.homePageLink.click();
  }

  async navigateTo(page: string) {
  switch (page.toLowerCase()) {
    case "invoices":
      return this.invoicesPageLink.click();
    case "privacy":
      return this.privacyPageLink.click();
    case "home":
      return this.homePageLink.click();
    default:
      throw new Error(`Unknown page: ${page}`);
  }
}

}
