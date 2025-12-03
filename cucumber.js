module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: [
      "tests/features/**/*.feature"
    ],
    publishQuiet: true,
    dryRun: false,
    require: [
      "tests/steps/**/*.ts",
      "tests/support/world.ts",
      "tests/support/hooks.ts",
    ],
    requireModule: [
      "ts-node/register"
    ],
       format: [
        "progress",
        "json:./reports/report.json" 
       ],
       publishQuiet: true
  }
}
