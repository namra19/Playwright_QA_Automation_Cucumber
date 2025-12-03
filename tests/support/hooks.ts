import { Before, After, AfterAll } from "@cucumber/cucumber";
import { CustomWorld, globalBrowser } from "./world";

Before(async function (this: CustomWorld) {
  await this.init();
});

AfterAll(async function () {
  if (globalBrowser) {
    await globalBrowser.close();
  }
});