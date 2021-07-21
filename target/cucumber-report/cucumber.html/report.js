$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Yes I agree Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;1"
    },
    {
      "cells": [
        "raj111",
        "12ab3c"
      ],
      "line": 14,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;2"
    },
    {
      "cells": [
        "JOHN89",
        "568905"
      ],
      "line": 15,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;3"
    },
    {
      "cells": [
        "",
        "Abc12"
      ],
      "line": 16,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;4"
    },
    {
      "cells": [
        "Daniel",
        ""
      ],
      "line": 17,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23356354200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Yes I agree Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"raj111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"12ab3c\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFunctions.userAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 348104300,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnYesIAgreeLink()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj111",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 6761000,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.bbc.stepdefs.SignInFunctions.userEnterUsernameAs(SignInFunctions.java:28)\r\n\tat ✽.When User enter username as \"raj111\"(src/test/java/resources/featurefiles/LoginFunctionality.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "12ab3c",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1024815200,
  "status": "passed"
});
formatter.before({
  "duration": 9112240400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Yes I agree Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"JOHN89\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"568905\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFunctions.userAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnYesIAgreeLink()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOHN89",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 491300,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.bbc.stepdefs.SignInFunctions.userEnterUsernameAs(SignInFunctions.java:28)\r\n\tat ✽.When User enter username as \"JOHN89\"(src/test/java/resources/featurefiles/LoginFunctionality.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "568905",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 944445500,
  "status": "passed"
});
formatter.before({
  "duration": 12252271800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Yes I agree Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"Abc12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFunctions.userAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnYesIAgreeLink()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 459900,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.bbc.stepdefs.SignInFunctions.userEnterUsernameAs(SignInFunctions.java:28)\r\n\tat ✽.When User enter username as \"\"(src/test/java/resources/featurefiles/LoginFunctionality.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc12",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 818982000,
  "status": "passed"
});
formatter.before({
  "duration": 7989119600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Yes I agree Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Daniel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFunctions.userAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 70800,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnYesIAgreeLink()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 150600,
  "status": "passed"
});
formatter.match({
  "location": "SignInFunctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daniel",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 2940600,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.bbc.stepdefs.SignInFunctions.userEnterUsernameAs(SignInFunctions.java:28)\r\n\tat ✽.When User enter username as \"Daniel\"(src/test/java/resources/featurefiles/LoginFunctionality.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignInFunctions.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.userClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInFunctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 887861800,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/Searchbar.feature");
formatter.feature({
  "line": 1,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10490554600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Search bar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"sports\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should able to read all articles related \u0027sports\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarFunction.iAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 97600,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarFunction.iClickOnSearchBar()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "SearchBarFunction.iAmOnSearchPage()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sports",
      "offset": 9
    }
  ],
  "location": "SearchBarFunction.iEnterInTheSearchBar(String)"
});
formatter.result({
  "duration": 354900,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.bbc.stepdefs.SearchBarFunction.iEnterInTheSearchBar(SearchBarFunction.java:28)\r\n\tat ✽.When I enter \"sports\" in the search bar(src/test/java/resources/featurefiles/Searchbar.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "SearchBarFunction.iClickOnTheSearchIconButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchBarFunction.iShouldAbleToReadAllArticlesRelatedSports()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 943625500,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/TeamsRecord.feature");
formatter.feature({
  "line": 1,
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10266389700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Output all team names with a match today. If there are no matches today, output a message to convey this.",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today;output-all-team-names-with-a-match-today.-if-there-are-no-matches-today,-output-a-message-to-convey-this.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on www.bbc.co.uk homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sport tab header",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on now sport webpage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Football tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Score \u0026 Fixtures",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Today",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see all team names with a match today",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBarFunction.iAmOnWwwBbcCoUkHomepage()"
});
formatter.result({
  "duration": 123600,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iClickOnSportTabHeader()"
});
formatter.result({
  "duration": 143200,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iAmOnNowSportWebpage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iClickOnFootballTab()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iClickOnScoreFixtures()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iClickOnToday()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "TeamRecordList.iShouldBeAbleToSeeAllTeamNamesWithAMatchToday()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.after({
  "duration": 1028198600,
  "status": "passed"
});
});