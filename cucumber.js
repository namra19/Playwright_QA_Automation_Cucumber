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
      "tests/steps/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: []
  }
}
