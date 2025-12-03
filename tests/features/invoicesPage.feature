Feature: Navigation Menu

  Background:
    Given the user navigates to the application

  Scenario: Navigate using the menu
    When the user navigates to invoices page
    Then the title of the invoices page is "Invoices - yuki_qa_automation_frontend"
    When the user navigates to privacy page
    Then the title of the privacy page is "Privacy Policy - yuki_qa_automation_frontend"
    When the user navigates to home page
    Then the title of the home page is "Home Page - yuki_qa_automation_frontend"

  Scenario: On the Invoices page, verify the sum of all the invoices is correct in the summary row.
    When the user navigate to the invoices page
    When calculate the total invoice amount
    Then the summary row should show the correct total

  Scenario: Verify amount for invoice I634
    When the user navigate to the invoices page
    Then the amount for invoice "I634" should be "423.99 EUR"
