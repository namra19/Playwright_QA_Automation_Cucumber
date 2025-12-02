import { Page } from "playwright";
import { BasePage } from "./BasePage";
import { URLs } from "../../fixtures/urls";
import { expect } from "playwright/test";

export class InvoicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  invoiceRows = '//table//tr[td[1][contains(.,"I")]]';
  amountCells = '//table//tr[td[1][contains(.,"I")]]/td[3]';
  summaryAmount = '//table//tr[td[contains(.,"Sum of invoices")]]/td[2]';

  async navigate() {
    await this.goto(URLs.baseURL + "/invoices");
  }

  async verifyTitle(expected: string) {
    await expect(this.page).toHaveTitle(expected);
  }

  async getInvoiceAmounts(): Promise<number[]> {
    const count = await this.page.locator(this.amountCells).count();
    const values: number[] = [];

    for (let i = 0; i < count; i++) {
      const raw = await this.page.locator(this.amountCells).nth(i).innerText();
      const cleaned = raw.replace("EUR", "").trim();
      values.push(parseFloat(cleaned));
    }

    return values;
  }

  async getSummaryAmount(): Promise<number> {
    const summaryText = await this.page.locator(this.summaryAmount).innerText();
    return parseFloat(summaryText.replace("EUR", "").trim());
  }
}
