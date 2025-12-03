import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { InvoicesPageLocators } from "../locators/invoicePage.locators"

export class InvoicesPage extends BasePage {
    readonly amountCells: Locator;
    readonly summaryAmountCell: Locator;

  constructor(page: Page) {
    super(page);
     this.amountCells = page.locator(InvoicesPageLocators.amountCells);
     this.summaryAmountCell = page.locator(InvoicesPageLocators.summaryAmountCell);
  }

  async getTotalInvoiceAmounts(): Promise<number> {
    const count = await this.page.locator(InvoicesPageLocators.amountCells).count();
    console.log('count: ' + count)
    let totalSum = 0;
    for (let i = 0; i < count; i++) {
      const raw = await this.page.locator(InvoicesPageLocators.amountCells).nth(i).innerText();
      const cleaned = raw.replace("EUR", "").trim();
      totalSum += parseFloat(cleaned);
    }
    console.log('totalSum: ' + totalSum)
    return totalSum;
  }

  async getSummaryAmount(): Promise<number> {
    const summaryText = await this.page.locator(InvoicesPageLocators.summaryAmountCell).innerText();
    return parseFloat(summaryText.replace("EUR", "").trim());
  }

  invoiceRowSelector(invoiceNumber: string) {
    // Finds the row where the first cell matches the invoice number
    return this.page.locator(`table tr:has(td:text("${invoiceNumber}"))`);
  }

  async getAmountByInvoice(invoiceNumber: string): Promise<string> {
    const row = this.invoiceRowSelector(invoiceNumber);
    const amount = row.locator('td').nth(2); // 3rd column = Amount
    return (await amount.textContent())!.trim();
  }
}
