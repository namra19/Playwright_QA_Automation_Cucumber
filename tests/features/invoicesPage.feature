Feature: Invoice Summary & Details

  Background:
    Given the user navigates to the application
    When the user navigates to the invoices page

  @invoice @calculation
  Scenario: Verify the sum of all invoices shown in the summary row
    When the user calculates the total invoice amount
    Then the summary row should show the correct total

  @invoice @lookup
  Scenario: Verify invoice ‘I634’ has the correct amount
    Then the amount for invoice "I634" should be "423.99 EUR"
