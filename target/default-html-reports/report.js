$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchForJobs.feature");
formatter.feature({
  "name": "Apply for Jobs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Apply for qa engineer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Apply for software tester",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"software tester\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for quality assurance specialist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"quality assurance specialist\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for quality assurance engineer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:38)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"quality assurance engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for qa specialist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:49)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"qa specialist\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for selenium",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:60)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"selenium\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for cucumber",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:71)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"cucumber\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Apply for testNG",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.linkedin.step_defs.stepdDefs.user_navigate_login_page(stepdDefs.java:24)\r\n\tat ✽.user navigate login page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:82)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"testNG\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSearchForJobsWhichIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.userSelectFilterAsOnFiltersBar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_filter_with_all_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page()"
});
formatter.result({
  "status": "skipped"
});
});