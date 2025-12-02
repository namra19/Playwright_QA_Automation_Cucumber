import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }
}

setWorldConstructor(CustomWorld);
