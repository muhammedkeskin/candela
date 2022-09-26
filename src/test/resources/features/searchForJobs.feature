Feature: Apply Jobs

  @apply
  Scenario: Apply for jobs
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "qa engineer"
    When user choose Easy Apply filter
    When user filter with all filters
    #Then user easy Apply


    #yapılacak şöyle: maching olan varsa easy apply yapacak ve sonraki sayfaya geçecek
    #qa sdet gibi kelimelerle seçimler yapacak ve easy apply yapacak
    #en sonda browser kapatılacak

