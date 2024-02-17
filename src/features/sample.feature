Feature: Playwright site

    Scenario: Check title
        Given I open url "https://playwright.dev"
        When I click link "Get started"
        Then I see in title "Playwright"

    Scenario: Verify page title
        Given I open url "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        Then I see in title "OrangeHRM"
