$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Application login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home Page login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "name": "The user is on the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_netbanking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"ramya\" and \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.the_user_enters_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.validate_successful_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check cards are present \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.check_cards_are_present(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/feature/loginexample.feature");
formatter.feature({
  "name": "Application login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Home Page login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "name": "The user is on the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user gives \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "validate successful login",
  "keyword": "Then "
});
formatter.step({
  "name": "check cards are present \"false\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "pwd1"
      ]
    },
    {
      "cells": [
        "user2",
        "pwd2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home Page login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "name": "The user is on the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_netbanking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user gives user1 and pwd1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.the_user_gives_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.validate_successful_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check cards are present \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.check_cards_are_present(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Home Page login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "name": "The user is on the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_netbanking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user gives user2 and pwd2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.the_user_gives_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.validate_successful_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check cards are present \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.check_cards_are_present(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Home Page login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Mobiletest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user is on the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_netbanking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters  the credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.the_user_enters_the_credentials(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.validate_successful_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});