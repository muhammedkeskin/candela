Feature: Apply for Jobs

  @apply
  Scenario Outline: Apply for "<job Type>"
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "<job Type>"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page
    Examples:
      | job Type                     |
      | selenium                     |
      | qa tester                    |
      | software tester              |


#not1: çalıştırmadan önce sol tarafta configuration .properties dosyası açılır ve email ve password için değerler girilir