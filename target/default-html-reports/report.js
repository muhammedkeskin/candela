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
        "quality assurance specialist"
      ]
    },
    {
      "cells": [
        "software tester"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca data-control-id\u003d\"X/Pc/Tb19pwjM3r5jrpN+w\u003d\u003d\" tabindex\u003d\"0\" href\u003d\"/jobs/view/3398085329/?eBP\u003dCwEAAAGFCEO0cGI2aSKC6EY1PB9AcX4579FoybT2iekUDeAO6RUF9vxsK3drhmS34tZ_Uf5eMq6bt1urb-mOROQ9zKG-jI3h6K_wQagLIpQQHTeZ3pYyXw4zm0atwKr9tA1UqIrl1z-BssAUH75OlAxdj317lWuDqYX4v0ReCXoya5ln4kZWuZlacDCA_Snkhw7lD8PP833X8mY8ci3KVzRmFG3pibr0-l_p1pNvPNGnutxfzCyNS08rYzR3id0vkWR994kYYe2aTsJ35uT3MD3VC-2X5euE4oLwG2E7VYL_2MDkfk3fgfSewLl2UfQ4-txGYOPyi_rTe-z0kpK-9GeYzQ8\u0026amp;recommendedFlavor\u003dSKILL_ASSESSMENTS\u0026amp;refId\u003dJlBMWkhLvvSfe8KhbahaPQ%3D%3D\u0026amp;trackingId\u003dX%2FPc%2FTb19pwjM3r5jrpN%2Bw%3D%3D\u0026amp;trk\u003dflagship3_search_srp_jobs\" id\u003d\"ember238\" class\u003d\"disabled ember-view job-card-container__link job-card-list__title\"\u003e...\u003c/a\u003e is not clickable at point (276, 593). Other element would receive the click: \u003cdiv data-test-modal-container\u003d\"\" aria-hidden\u003d\"false\" id\u003d\"ember678\" class\u003d\"artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer  ember-view\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d108.0.5359.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.linkedin.steps.ResultPageSteps.apply(ResultPageSteps.java:39)\r\n\tat com.linkedin.steps.ResultPageSteps.applyAllJobsWhereInAllPages(ResultPageSteps.java:24)\r\n\tat com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page(stepdDefs.java:69)\r\n\tat ✽.user try to easy Apply to all results on the Results Page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:12)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#session_key\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ff1282cbc6f15868ae9a86d71fa300b\n*** Element info: {Using\u003did, value\u003dsession_key}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.linkedin.steps.LoginPageSteps.login(LoginPageSteps.java:9)\r\n\tat com.linkedin.step_defs.stepdDefs.user_enter_email_and_password(stepdDefs.java:34)\r\n\tat ✽.user enter email and password(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:6)\r\n",
  "status": "failed"
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
});