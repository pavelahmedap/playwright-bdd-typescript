import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  paths: ["src/features/*.feature"],
  require: ["src/step-definitions/**/*.ts"],
  // ...other playwright-bdd options
  //   outputDir: ".features-gen/one",
});

export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : 3,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: "on",
    ignoreHTTPSErrors: false,
  },

  testDir,
  reporter: [
    ["html", { open: "never", outputFolder: "src/reports/test-results" }],
    ["line"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "src/reports/allure-results",
        suiteTitle: false,
      },
    ],
  ],
});
