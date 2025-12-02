import { Page } from "playwright";
import { BasePage } from "./BasePage";
import { URLs } from "../../fixtures/urls";
import { expect } from "playwright/test";

export class InvoicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.goto(URLs.baseURL + "/invoices");
  }

  async verifyTitle(expected: string) {
    await expect(this.page).toHaveTitle(expected);
  }
}
