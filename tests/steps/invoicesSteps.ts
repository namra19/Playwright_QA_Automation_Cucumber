import { When, Then } from "@cucumber/cucumber";
import { InvoicesPage } from "../pages/InvoicesPage"
import { NavigationMenu } from "../pages/NavigationMenu"
import { expect } from "@playwright/test";

let invoicesPage: InvoicesPage;

When('the user navigates to the invoices page', async function () {
  const menu = new NavigationMenu(this.page);
  await menu.goToInvoicesPage();
})

When('the user calculates the total invoice amount', async function () {
  invoicesPage = new InvoicesPage(this.page);
  this.total = await invoicesPage.getTotalInvoiceAmounts();
})

Then('the summary row should show the correct total', async function () {
  const summaryValue = await invoicesPage.getSummaryAmount();
  expect(Number(summaryValue.toFixed(2))).toBe(Number(this.total.toFixed(2)));
})

Then('the amount for invoice {string} should be {string}', async function (invoiceNumber: string, expectedAmount: string){
    const actualAmount = await invoicesPage.getAmountByInvoice(invoiceNumber);
    expect(actualAmount).toBe(expectedAmount);
  }
);



