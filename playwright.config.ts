import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  paths: ["src/features/*.feature"],
  require: ["src/step-definitions/**/*.ts"],
  // ...other playwright-bdd options
});

export default defineConfig({
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
