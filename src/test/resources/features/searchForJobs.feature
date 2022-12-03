Feature: Apply for Jobs

  @apply
  Scenario: Apply for qa engineer
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "qa engineer"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for software tester
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "software tester"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for quality assurance specialist
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "quality assurance specialist"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for quality assurance engineer
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "quality assurance engineer"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for qa specialist
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "qa specialist"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for selenium
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "selenium"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for cucumber
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "cucumber"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

  @apply
  Scenario: Apply for testNG
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "testNG"
    And user fill location as "United States"
    When user select filter as "Easy Apply" on filters bar
    When user filter with all filters
    Then user try to easy Apply to all results on the Results Page

#not1: çalıştırmadan önce sol tarafta configuration .properties dosyası açılır ve email ve password için deeğrler girilir
#not2: run yaptıktan ve koşum bittikten sonra 8. satırda tırnak içindeki değer alttaki arama kriterleri ile değiştirilip tekrar run yapılır

      # qa engineer
      # software tester
      # quality assurance specialist
      # quality assurance engineer
      # qa specialist
      # selenium
      # cucumber
      # testNG
