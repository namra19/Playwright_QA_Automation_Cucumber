import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

let globalBrowser: Browser;
export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
    context!: BrowserContext;


   async init() {
    if (!globalBrowser) {
      globalBrowser = await chromium.launch({ headless: false });
    }
    this.context = await globalBrowser.newContext();
    this.page = await this.context.newPage();
  }
}

setWorldConstructor(CustomWorld);

export { globalBrowser }