$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reverseSyncing.feature");
formatter.feature({
  "line": 1,
  "name": "Reverse Syncing with and without synced campaigns",
  "description": "This feature file describes about the reverse syncing of the campaigns and the adsets",
  "id": "reverse-syncing-with-and-without-synced-campaigns",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1509061,
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
  "duration": 19251869164,
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
  "duration": 1010595393,
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
  "duration": 579124282,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 13687742411,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate reverse syncing when no campaigns are synced",
  "description": "",
  "id": "reverse-syncing-with-and-without-synced-campaigns;validate-reverse-syncing-when-no-campaigns-are-synced",
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
  "name": "Enter Name \"Testing the syncing of the campaigns in the plan for reverse syncing\"",
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
  "duration": 10603439179,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 202219311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the syncing of the campaigns in the plan for reverse syncing",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 4330801377,
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
  "duration": 677827967,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 3510737258,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 2935949834,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 624559654,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2801537729,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 2617599510,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 2561608990,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 427557115,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3920425030,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 2392144209,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "duration": 2887466393,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "duration": 2700315620,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "duration": 2542438186,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "duration": 1758215367,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 951679630,
  "status": "passed"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "duration": 4701810665,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncing()"
});
formatter.result({
  "duration": 2741035628,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "duration": 64493969,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "duration": 6458633555,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "duration": 3917315629,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "duration": 47448256733,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "duration": 2689152356,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "duration": 8021476252,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "duration": 4802292913,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "duration": 55502174160,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "duration": 2803844612,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfLinkedIn()"
});
formatter.result({
  "duration": 6710554725,
  "status": "passed"
});
formatter.after({
  "duration": 740735,
  "status": "passed"
});
formatter.after({
  "duration": 3956414575,
  "status": "passed"
});
});