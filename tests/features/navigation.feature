Feature: Navigation Menu

  @navigation
  Scenario: Navigate to all the pages using the menu
    Given the user navigates to the application
    When the user navigates to the "<page>" page
    Then the "<page>" page title should be "<title>"

    Examples:
      | page     | title                                        |
      | invoices | Invoices - yuki_qa_automation_frontend       |
      | privacy  | Privacy Policy - yuki_qa_automation_frontend |
      | home     | Home Page - yuki_qa_automation_frontend      |
