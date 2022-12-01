$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchForJobs.feature");
formatter.feature({
  "name": "Apply Jobs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Apply for jobs",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u002710.28.112.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.122, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51925}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b0d41eab18c3de7929a4a2a7c1dfbf3\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Software Developer Engineer\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.linkedin.steps.ResultPageSteps.easyApplyLogic(ResultPageSteps.java:211)\r\n\tat com.linkedin.steps.ResultPageSteps.easyApplyProcess(ResultPageSteps.java:65)\r\n\tat com.linkedin.steps.ResultPageSteps.apply(ResultPageSteps.java:37)\r\n\tat com.linkedin.steps.ResultPageSteps.applyAllJobsWhereInAllPages(ResultPageSteps.java:23)\r\n\tat com.linkedin.step_defs.stepdDefs.user_try_to_easy_Apply_to_all_results_on_the_Results_Page(stepdDefs.java:67)\r\n\tat ✽.user try to easy Apply to all results on the Results Page(file:///C:/Users/MuhammedKeskin/IdeaProjects/candela/src/test/resources/features/searchForJobs.feature:12)\r\n",
  "status": "failed"
});
});