Feature: Apply for Jobs

  @apply
  Scenario Outline: Apply for qa engineer
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
      | qa engineer                  |
      | selenium                     |
      | cucumber                     |
      | quality assurance specialist |
      | software tester              |
      | qa specialist                |
      | quality assurance engineer   |


#BEFORE METHOD-->HOOKS EKLEMEK GEREKEBİLİR. ORADA  HER SENARYODAN ÖNCE TEKRAR driver SET EDİLİRSE FARKLI BİR ÇÖZÜM DAHA OLABİLİR


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
