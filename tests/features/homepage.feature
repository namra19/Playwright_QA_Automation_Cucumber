Feature: Navigation and invoice validation
  As a QA engineer
  I want to navigate through the application and validate invoice data
  So that I can ensure the UI behaves correctly and displays accurate values

  Background:
    Given the user navigates to the application

  @navigation
  Scenario: Navigate to all pages using the menu
    When the user clicks on the Home menu item
  #   Then the "Welcome" page is displayed
  #   When the user clicks on the "Invoices" menu item
  #   Then the "Invoices" page is displayed
  #   When the user clicks on the "Privacy" menu item
  #   Then the "Privacy" page is displayed
  # @invoice-summary
  # Scenario: Verify the sum of all invoices is correct in the summary row
  #   Given the user is on the "Invoices" page
  #   When the user retrieves all invoice amounts
  #   And the user calculates the total
  #   Then the summary total should match the calculated value
  # @invoice-specific-amount
  # Scenario: Retrieve and validate the amount for invoice 'I634'
  #   Given the user is on the "Invoices" page
  #   When the user retrieves the amount for invoice "I634"
  #   Then the amount should be "423.99 EUR"
