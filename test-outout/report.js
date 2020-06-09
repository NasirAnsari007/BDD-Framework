$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Mavenproject/BDDFramework/src/test/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "loginApplication",
  "description": "",
  "id": "loginapplication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "loginapplication;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "loginapplication;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "loginapplication;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "simplynasir77@gmail.com",
        "nasir123"
      ],
      "line": 14,
      "id": "loginapplication;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "loginapplication;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"simplynasir77@gmail.com\" and \"nasir123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.user_already_on_login_page()"
});
formatter.result({
  "duration": 8811994149,
  "status": "passed"
});
formatter.match({
  "location": "loginPage.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 19747519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simplynasir77@gmail.com",
      "offset": 13
    },
    {
      "val": "nasir123",
      "offset": 43
    }
  ],
  "location": "loginPage.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1074855548,
  "status": "passed"
});
formatter.match({
  "location": "loginPage.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2858905444,
  "status": "passed"
});
formatter.match({
  "location": "loginPage.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 10080731,
  "status": "passed"
});
formatter.match({
  "location": "loginPage.close_the_browser()"
});
formatter.result({
  "duration": 1645219069,
  "status": "passed"
});
});