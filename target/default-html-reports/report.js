$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchForJobs.feature");
formatter.feature({
  "name": "Apply for Jobs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Apply for \"\u003cjob Type\u003e\"",
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
  "name": "Apply for \"qa engineer\"",
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
