import { When, Then } from "@cucumber/cucumber";
import { InvoicesPage } from "../pages/InvoicesPage"
import { NavigationMenu } from "../pages/NavigationMenu"
import { expect } from "@playwright/test";

let invoicesPage: InvoicesPage;

When('the user navigate to the invoices page', async function () {
  const menu = new NavigationMenu(this.page);
  await menu.goToInvoicesPage();
})

When('calculate the total invoice amount', async function () {
  invoicesPage = new InvoicesPage(this.page);
  this.invoiceAmounts = await invoicesPage.getInvoiceAmounts();
  this.total = this.invoiceAmounts.reduce((a: any, b: any) => a + b, 0);
})


Then('the summary row should show the correct total', async function () {
  const summaryValue = await invoicesPage.getSummaryAmount();
  expect(Number(summaryValue.toFixed(2))).toBe(Number(this.total.toFixed(2)));
})



