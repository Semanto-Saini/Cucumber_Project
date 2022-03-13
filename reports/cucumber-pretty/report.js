$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/demo.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to Uniform Website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@uniform"
    }
  ]
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to Uniform Website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@uniform"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters the \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});