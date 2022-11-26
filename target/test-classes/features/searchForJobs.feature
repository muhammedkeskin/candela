Feature: Apply Jobs

  @apply
  Scenario: Apply for jobs
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "developer"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page