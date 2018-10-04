$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reverseSyncing.feature");
formatter.feature({
  "line": 1,
  "name": "Reverse Syncing when no accounts are generated and synced",
  "description": "This feature file describes about the reverse syncing of the campaigns and the adsets",
  "id": "reverse-syncing-when-no-accounts-are-generated-and-synced",
  "keyword": "Feature"
});
formatter.before({
  "duration": 228624,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the URL \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter EmailId \"piyush@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter Password \"piyush23\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign In button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "LoginSteps.launchTheURL(String)"
});
formatter.result({
  "duration": 5392949467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "piyush@amuratech.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.enterEmailId(String)"
});
formatter.result({
  "duration": 350925751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "piyush23",
      "offset": 16
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 114967146,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 3841302384,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate reverse syncing when no campaigns are synced",
  "description": "",
  "id": "reverse-syncing-when-no-accounts-are-generated-and-synced;validate-reverse-syncing-when-no-campaigns-are-synced",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Click \u0027Add Media Plan\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should be on start page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Name \"Testing the reverse syncing of the media plan campaigns\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter Budget \"100000\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select the Date range",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# Enable advertising account for Adwords"
    }
  ],
  "line": 19,
  "name": "Enable advertising account for Adwords",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Select Adwords campaign type",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose Adwords account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#    And Click Next button"
    },
    {
      "line": 24,
      "value": "# Enable advertising account for Facebook"
    }
  ],
  "line": 25,
  "name": "Enable advertising account for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click the Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Facebook campaign types",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Choose Facebook account",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#    And Click Next button"
    },
    {
      "line": 32,
      "value": "# Enable advertising account for LinkedIn"
    }
  ],
  "line": 33,
  "name": "Enable advertising account for LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Click LinkedIn",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Choose LinkedIn Campaign Types",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Choose LinkedIn Account",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "# Fetching campaigns for Adwords"
    }
  ],
  "line": 40,
  "name": "Click menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Select Reverse syncing",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User should be on Reverse syncing page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click Fetch for New campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Select campaigns to save them",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Existing Campaigns accordion should get generated",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click Fetch for Existing campaigns",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "# Fetching campaigns for Facebook"
    }
  ],
  "line": 49,
  "name": "Click Fetch for New Campaigns of Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Select campaigns to save them for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Existing Campaigns accordion should get generated for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click Fetch for Existing campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "# Fetching campaigns for LinkedIn"
    }
  ],
  "line": 55,
  "name": "Click Fetch for New Campaigns of LinkedIn",
  "keyword": "When "
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10186932568,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 23897574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the reverse syncing of the media plan campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 483638652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 14
    }
  ],
  "location": "StartSteps.enterBudget(String)"
});
formatter.result({
  "duration": 143257267,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1569476636,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 1267156296,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 179644357,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2187663099,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 1197103079,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 1166425051,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 112462110,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3241647235,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1299170744,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "duration": 1201885587,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "duration": 1165137050,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "duration": 1170923787,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "duration": 1178873573,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 218879940,
  "status": "passed"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "duration": 4093629142,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncing()"
});
formatter.result({
  "duration": 1284786184,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "duration": 22178946,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "duration": 3932878540,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "duration": 3279523415,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "duration": 38857382260,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "duration": 1729354336,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "duration": 7274147145,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "duration": 3005098243,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "duration": 38825371322,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "duration": 1702765469,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfLinkedIn()"
});
formatter.result({
  "duration": 6208551954,
  "status": "passed"
});
formatter.after({
  "duration": 149674,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void amura.selenium.steps.Hooks.afterRunning(org.testng.ITestResult) throws java.lang.Exception\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
});