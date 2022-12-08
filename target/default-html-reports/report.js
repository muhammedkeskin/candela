$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchForJobs.feature");
formatter.feature({
  "name": "Apply for Jobs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Apply for qa engineer",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.step({
  "name": "user search for jobs which is \"\u003cjob Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on filters bar",
  "keyword": "When "
});
formatter.step({
  "name": "user filter with all filters",
  "keyword": "When "
});
formatter.step({
  "name": "user try to easy Apply to all results on the Results Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "job Type"
      ]
    },
    {
      "cells": [
        "qa engineer"
      ]
    },
    {
      "cells": [
        "qa specialist"
      ]
    },
    {
      "cells": [
        "quality assurance engineer"
      ]
    },
    {
      "cells": [
        "quality assurance specialist"
      ]
    },
    {
      "cells": [
        "selenium"
      ]
    },
    {
      "cells": [
        "cucumber"
      ]
    },
    {
      "cells": [
        "software tester"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Apply for qa engineer",
  "description": "",
  "keyword": "Scenario Outline",
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca data-control-id\u003d\"KS/R47KGTxrJKvLLkondaw\u003d\u003d\" tabindex\u003d\"0\" href\u003d\"/jobs/view/3383259613/?eBP\u003dJOB_SEARCH_ORGANIC\u0026amp;recommendedFlavor\u003dIN_NETWORK\u0026amp;refId\u003dEnvWK2IXNpc4oDX4wnxSuQ%3D%3D\u0026amp;trackingId\u003dKS%2FR47KGTxrJKvLLkondaw%3D%3D\u0026amp;trk\u003dflagship3_search_srp_jobs\" id\u003d\"ember1830\" class\u003d\"disabled ember-view job-card-container__link job-card-list__title\"\u003e...\u003c/a\u003e is not clickable at point (306, 600). Other element would receive the click: \u003cdiv data-test-modal-container\u003d\"\" aria-hidden\u003d\"false\" id\u003d\"ember2706\" class\u003d\"artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer  ember-view\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d108.0.5359.73)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.29.112.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.73, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51807}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 88e32321b18097575ba34a504bf9a7f0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.linkedin.steps.ResultPageSteps.apply(ResultPageSteps.java:37)\r\n\tat com.linkedin.steps.ResultPageSteps.applyAllJobsWhereInAllPages(ResultPageSteps.java:26)\r\n\tat com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page(stepdDefs.java:67)\r\n\tat ✽.user try to easy Apply to all results on the Results Page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Apply for qa engineer",
  "description": "",
  "keyword": "Scenario Outline",
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
