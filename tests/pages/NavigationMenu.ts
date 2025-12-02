import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavigationMenu extends BasePage {
  readonly invoicesPageLink: Locator;
  readonly privacyPageLink: Locator;
  readonly homePageLink: Locator;

  constructor(page: Page) {
    super(page);
    this.invoicesPageLink = page.locator("#nav-item-link-invoices");
    this.privacyPageLink = page.locator("#nav-item-link-privacy");
    this.homePageLink = page.locator("#nav-item-link-home");
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
}
