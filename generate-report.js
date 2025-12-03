const reporter = require("cucumber-html-reporter");

reporter.generate({
  theme: "bootstrap",
  jsonFile: "./reports/report.json",
    openReportInBrowser: true,
  output: "./reports/report.html",
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    browser: "Chromium",
    platform: process.platform
  }
});
