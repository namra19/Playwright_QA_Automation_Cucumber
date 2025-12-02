Feature: Navigation Menu

  Scenario: Navigate using the menu
    Given the user navigates to the application
    When the user navigates to invoices page
    Then the title of the invoices page is "Invoices - yuki_qa_automation_frontend"
    When the user navigates to privacy page
    Then the title of the privacy page is "Privacy Policy - yuki_qa_automation_frontend"
    When the user navigates to home page
    Then the title of the home page is "Home Page - yuki_qa_automation_frontend"
