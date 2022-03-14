$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/demo.feature");
formatter.feature({
  "name": "Coupons and Affilliate",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add new coupons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Coupons"
    }
  ]
});
formatter.step({
  "name": "User navigates to coupons section",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters a \"\u003ccoupon name\u003e\" and \"\u003ccode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Coupon is successfully added",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "coupon name",
        "code"
      ]
    },
    {
      "cells": [
        "zoom",
        "zoo12"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new coupons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Coupons"
    }
  ]
});
formatter.step({
  "name": "User navigates to coupons section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_coupons_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a \"zoom\" and \"zoo12\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Coupon is successfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.coupon_is_successfully_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Coupon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "User navigates to coupons section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_coupons_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcks the checkbox of coupon to be deleted",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clcks_the_checkbox_of_coupon_to_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the delete icon and accept the pop up",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_delete_icon_and_accept_the_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Coupon  successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.coupon_successfully_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit the coupon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "User navigates to coupons section",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks the edit icon",
  "keyword": "When "
});
formatter.step({
  "name": "user enters a valid \"\u003ccoupon name\u003e\" and \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "the row should be edited and added to database along with proper message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "coupon name",
        "code"
      ]
    },
    {
      "cells": [
        "zoom",
        "zoo12"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit the coupon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "User navigates to coupons section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_coupons_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the edit icon",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_edit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid \"zoom\" and \"zoo12\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the row should be edited and added to database along with proper message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_row_should_be_edited_and_added_to_database_along_with_proper_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add New Affilliate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addaffilliate"
    }
  ]
});
formatter.step({
  "name": "User navigates to affilliate section",
  "keyword": "Given "
});
formatter.step({
  "name": "User moves to add affiliate page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters all required fields \"\u003cfname\u003e\" \"\u003clname\u003e\" \"\u003ctel\u003e\" \"\u003cpswrd\u003e\" \"\u003ccnfrmpswrd\u003e\" \"\u003cadrss\u003e\" \"\u003ccity\u003e\" \"\u003cpcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Selects the country and region",
  "keyword": "And "
});
formatter.step({
  "name": "Move to payment details",
  "keyword": "Then "
});
formatter.step({
  "name": "Enters \"\u003ccheque_payee_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "Then "
});
formatter.step({
  "name": "the above entered information should be added and verified with email",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "tel",
        "pswrd",
        "cnfrmpswrd",
        "adrss",
        "city",
        "pcode",
        "cheque_payee_name"
      ]
    },
    {
      "cells": [
        "Happy",
        "Singh",
        "8797345763",
        "abc12",
        "abc12",
        "Homi st, Fort",
        "Mumbai",
        "400001",
        "Rudra"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Affilliate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addaffilliate"
    }
  ]
});
formatter.step({
  "name": "User navigates to affilliate section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_affilliate_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User moves to add affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_moves_to_add_affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all required fields \"Happy\" \"Singh\" \"8797345763\" \"abc12\" \"abc12\" \"Homi st, Fort\" \"Mumbai\" \"400001\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_all_required_fields(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selects the country and region",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.selects_the_country_and_region()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Move to payment details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.move_to_payment_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"Rudra\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the above entered information should be added and verified with email",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_above_entered_information_should_be_added_and_verified_with_email()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Filter out search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter"
    }
  ]
});
formatter.step({
  "name": "User navigates to affilliate section",
  "keyword": "Given "
});
formatter.step({
  "name": "fills the \"\u003caffilliate_name\u003e\" \"\u003cdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Expected results should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "affilliate_name",
        "date"
      ]
    },
    {
      "cells": [
        "pop",
        "2022-03-13"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter out search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter"
    }
  ]
});
formatter.step({
  "name": "User navigates to affilliate section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_affilliate_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fills the \"pop\" \"2022-03-13\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.fills_the(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Expected results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.expected_results_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});