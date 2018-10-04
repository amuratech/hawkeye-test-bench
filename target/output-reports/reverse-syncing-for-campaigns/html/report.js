$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reverseSyncing.feature");
formatter.feature({
  "line": 1,
  "name": "Reverse Syncing when no accounts are generated and synced",
  "description": "This feature file describes about the reverse syncing of the campaigns and the adsets",
  "id": "reverse-syncing-when-no-accounts-are-generated-and-synced",
  "keyword": "Feature"
});
formatter.before({
  "duration": 302575,
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
  "duration": 7025211225,
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
  "duration": 194743101,
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
  "duration": 133457353,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 3401455195,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Validate reverse syncing when the campaigns are synced",
  "description": "",
  "id": "reverse-syncing-when-no-accounts-are-generated-and-synced;validate-reverse-syncing-when-the-campaigns-are-synced",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "Click \u0027Add Media Plan\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "Enter Name \"Testing the campaigns and adsets for synced campaigns\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Enter Budget \"100000\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Select the Date range",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enable advertising account for Adwords",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Select Adwords campaign type",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Choose Adwords account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 66,
      "value": "# Enable advertising account for Facebook"
    }
  ],
  "line": 67,
  "name": "Enable advertising account for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Click the Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Facebook campaign types",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Choose Facebook account",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 73,
      "value": "# Enable advertising account for LinkedIn"
    }
  ],
  "line": 74,
  "name": "Enable advertising account for LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Click LinkedIn",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Choose LinkedIn Campaign Types",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Choose LinkedIn Account",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "# Project page"
    }
  ],
  "line": 81,
  "name": "Select Project by searching with keywords",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "Enter Developer Advertising Name \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Select Project stage",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Select the Segment",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Enter Landing page URL \"http://www.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Select Configurations",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Select Property types",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Select Property adjectives",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Click Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "User should be on creative page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "# Creative group for Adwords responsive ad"
    }
  ],
  "line": 93,
  "name": "Click Creative Groups accordion",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Click Google Display accordion to create a creative group",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Select Responsive Ad from the dropdown to add creative group",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Enter Creative group name \"Testing creative group for Google Adwords with Responsive Ad\"",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Select Creatives",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Click Submit button- New creative group for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 100,
      "value": "# Creative group for Facebook"
    }
  ],
  "line": 101,
  "name": "Click Facebook Default accordion to create a creative group",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "Click on plus button to create a new creative group",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Enter Creative group name for Facebook \"Testing creative group form for the Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Enter Headline \"Testing headline\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Enter Description \"Testing description\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Select Asset",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Click Submit button- New creative group",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 109,
      "value": "# Marketing pitch for Adwords"
    }
  ],
  "line": 110,
  "name": "Click Marketing pitch accordion",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Click plus icon to create new marketing pitch for Adwords",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Enter Communication name \"Testing for adwords search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Enter Description \"Testing for the adwords search description\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Select Marketing Images from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 116,
      "value": "#    And Click Next button"
    },
    {
      "line": 118,
      "value": "# Marketing pitch for Facebook"
    }
  ],
  "line": 119,
  "name": "Click plus icon to create new marketing pitch for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "Enter Communication name for facebook \"Testing Facebook Marketing Pitch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "Enter Ad\u0027s description \"Testing ad description for the facebook default campaign\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Select Creative Groups from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Click Save button for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "User should be on precise control page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 127,
      "value": "# Precise control page"
    }
  ],
  "line": 128,
  "name": "Enter Location in Include",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Select Age Range for Google",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Select Gender for Google",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Select Parental Status for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 132,
      "value": "#    And Click Next button"
    },
    {
      "line": 134,
      "value": "# Precise control for Facebook"
    }
  ],
  "line": 135,
  "name": "Click Facebook Default accordion",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "Enter Location in Include for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "Select the Min and Max Age",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Select the Publisher Platforms",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Select Bid On from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Select Bidding Type and Bidding Amount",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "# Tracking page for Adwords"
    }
  ],
  "line": 144,
  "name": "User should be on Tracking page",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "Open Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "Enter URL tagging specs  \"utm_source\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Select Default lead type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 149,
      "value": "#    And Click Next button"
    },
    {
      "line": 150,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 152,
      "value": "# Tracking page for Facebook"
    }
  ],
  "line": 153,
  "name": "Open Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "Enter URL tagging specs for Facebook \"utm_source\u003d\"",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Enter Phone Number for Facebook \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Select Tracking Pixel",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Select Default lead type for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "User should be on Budget page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 162,
      "value": "# Budget page for Adwords"
    }
  ],
  "line": 163,
  "name": "Select Google Search from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "Enter Name of the campaign \"Testing the campaign details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "Select Communications",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Select Topics",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Enter Bid Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Uncheck Default Tracking checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Click Save button- Google Search Campaign Form",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 170,
      "value": "#    And Click Next button"
    },
    {
      "line": 172,
      "value": "# Budget page for Facebook"
    }
  ],
  "line": 173,
  "name": "Select Facebook from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "Enter Name for Facebook \"Testing Facebook Campaign Details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "Select Communications for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "Select the OS",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "Select Publisher Platforms- Budget",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "Select Platform Placement",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "Enter Bid Amount- Facebook budget \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "Click Save button- Facebook budget",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "User should be on Goals page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "# Goals page for Adwords"
    }
  ],
  "line": 185,
  "name": "Click Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "Enter Cost per Click \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "Enter Cost per Lead \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "Enter Total Leads \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "Enter Lead Velocity \"100\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 190,
      "value": "#    And Click Next button"
    },
    {
      "line": 191,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 193,
      "value": "# Goals page for Facebook"
    }
  ],
  "line": 194,
  "name": "Click Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "Enter Cost per Click for Facebook \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "Enter Cost per Lead for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "Enter Total Leads for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Enter Lead Velocity for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "User should be on Review page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 203,
      "value": "# Review page for Adwords"
    }
  ],
  "line": 204,
  "name": "Click Google Display accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "Click Generate Campaigns",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "Click Facebook Conversion accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "Click Generate Campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "Refresh the page to change the status",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 212,
      "value": "# Fetching campaigns for Adwords"
    }
  ],
  "line": 213,
  "name": "Click menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "Select Reverse syncing for synced campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "User should be on Reverse syncing page",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "Click Fetch for New campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "Select campaigns to save them",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "Existing Campaigns accordion should get generated",
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "Click Fetch for Existing campaigns",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 221,
      "value": "# Fetching campaigns for Facebook"
    }
  ],
  "line": 222,
  "name": "Click Fetch for New Campaigns of Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "Select campaigns to save them for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "Existing Campaigns accordion should get generated for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "Click Fetch for Existing campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 227,
      "value": "# Fetching campaigns for LinkedIn"
    }
  ],
  "line": 228,
  "name": "Click Fetch for New Campaigns of LinkedIn",
  "keyword": "When "
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10168816413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the campaigns and adsets for synced campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 492836246,
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
  "duration": 160824923,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1574029750,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 1255510145,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 173368269,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2169322117,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 1185094667,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 1174958512,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 106685150,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3221267094,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1299116703,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "duration": 1184862310,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "duration": 1150320370,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "duration": 1171082394,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "duration": 1172379394,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 230868172,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "duration": 6505057235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 34
    }
  ],
  "location": "ProductSteps.enterDeveloperAdvertisingName(String)"
});
formatter.result({
  "duration": 159072950,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "duration": 4203652583,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "duration": 1093030726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 24
    }
  ],
  "location": "ProductSteps.enterLandingPageURL(String)"
});
formatter.result({
  "duration": 311310796,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "duration": 2310078568,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyTypes()"
});
formatter.result({
  "duration": 281796675,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyAdjectives()"
});
formatter.result({
  "duration": 261777279,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 249188708,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.userShouldBeOnCreativePage()"
});
formatter.result({
  "duration": 16939224,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickCreativeGroupsAccordion()"
});
formatter.result({
  "duration": 4307458609,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickGoogleDisplayAccordionToCreateACreativeGroup()"
});
formatter.result({
  "duration": 1150341965,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectResponsiveAdFromTheDropdownToAddCreativeGroup()"
});
formatter.result({
  "duration": 4141947052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing creative group for Google Adwords with Responsive Ad",
      "offset": 27
    }
  ],
  "location": "CreativeSteps.enterCreativeGroupName(String)"
});
formatter.result({
  "duration": 433371020,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreatives()"
});
formatter.result({
  "duration": 6290721433,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroupForGoogle()"
});
formatter.result({
  "duration": 1246686594,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickFacebookDefaultAccordionToCreateCreativeGroup()"
});
formatter.result({
  "duration": 2077206176,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickOnPlusButtonToCreateANewCreativeGroup()"
});
formatter.result({
  "duration": 1189970354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing creative group form for the Facebook",
      "offset": 40
    }
  ],
  "location": "CreativeSteps.enterCreativeGroupNameForFacebook(String)"
});
formatter.result({
  "duration": 356741883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing headline",
      "offset": 16
    }
  ],
  "location": "CreativeSteps.enterHeadline(String)"
});
formatter.result({
  "duration": 176878336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing description",
      "offset": 19
    }
  ],
  "location": "CreativeSteps.enterDescription(String)"
});
formatter.result({
  "duration": 218702763,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectAsset()"
});
formatter.result({
  "duration": 6362019462,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroup()"
});
formatter.result({
  "duration": 5112903573,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickMarketingPitchAccordion()"
});
formatter.result({
  "duration": 1142486424,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForAdwords()"
});
formatter.result({
  "duration": 1217613608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for adwords search",
      "offset": 26
    }
  ],
  "location": "CreativeSteps.enterCommunicationName(String)"
});
formatter.result({
  "duration": 250658412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for the adwords search description",
      "offset": 19
    }
  ],
  "location": "CreativeSteps.enterDescription(String)"
});
formatter.result({
  "duration": 341469191,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectMarketingImagesFromTheDropdown()"
});
formatter.result({
  "duration": 2200087027,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButton()"
});
formatter.result({
  "duration": 1203825358,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForFacebook()"
});
formatter.result({
  "duration": 1165748046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Facebook Marketing Pitch",
      "offset": 39
    }
  ],
  "location": "CreativeSteps.enterCommunicationNameForFacebook(String)"
});
formatter.result({
  "duration": 239868253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing ad description for the facebook default campaign",
      "offset": 24
    }
  ],
  "location": "CreativeSteps.enterAdSDescription(String)"
});
formatter.result({
  "duration": 418298600,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreativeGroupsFromTheDropdown()"
});
formatter.result({
  "duration": 3175542765,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButtonForFacebook()"
});
formatter.result({
  "duration": 1174793315,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 161505990,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.userShouldBeOnPreciseControlPage()"
});
formatter.result({
  "duration": 22937021,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInInclude()"
});
formatter.result({
  "duration": 5374972447,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectAgeRangeForGoogle()"
});
formatter.result({
  "duration": 1222729249,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectGenderForGoogle()"
});
formatter.result({
  "duration": 1161592843,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectParentalStatusForGoogle()"
});
formatter.result({
  "duration": 1223097039,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.clickFacebookDefaultAccordion()"
});
formatter.result({
  "duration": 2153616187,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInIncludeForFacebook()"
});
formatter.result({
  "duration": 5350094815,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectTheMinAndMaxAge()"
});
formatter.result({
  "duration": 5395873108,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectThePublisherPlatforms()"
});
formatter.result({
  "duration": 1206455804,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBidOnFromTheDropdown()"
});
formatter.result({
  "duration": 2196152596,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBiddingTypeAndBiddingAmount()"
});
formatter.result({
  "duration": 2227374779,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 223986434,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.userShouldBeOnTrackingPage()"
});
formatter.result({
  "duration": 10083382,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openGoogleSearchAccordion()"
});
formatter.result({
  "duration": 2248450955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utm_source\u003d",
      "offset": 26
    }
  ],
  "location": "TrackingSteps.enterURLTaggingSpecs(String)"
});
formatter.result({
  "duration": 154826143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 20
    }
  ],
  "location": "TrackingSteps.enterPhoneNumber(String)"
});
formatter.result({
  "duration": 155476114,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadType()"
});
formatter.result({
  "duration": 2175660515,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 1161859795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utm_source\u003d",
      "offset": 38
    }
  ],
  "location": "TrackingSteps.enterURLTaggingSpecsForFacebook(String)"
});
formatter.result({
  "duration": 156099500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 33
    }
  ],
  "location": "TrackingSteps.enterPhoneNumberForFacebook(String)"
});
formatter.result({
  "duration": 173532016,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectTrackingPixel()"
});
formatter.result({
  "duration": 2193480320,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadTypeForFacebook()"
});
formatter.result({
  "duration": 2148297163,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 170529608,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1238342701,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.userShouldBeOnBudgetPage()"
});
formatter.result({
  "duration": 10998452,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectGoogleSearchFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 1323800836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the campaign details",
      "offset": 28
    }
  ],
  "location": "BudgetSteps.enterNameOfTheCampaign(String)"
});
formatter.result({
  "duration": 2391952981,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunications()"
});
formatter.result({
  "duration": 2206676990,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTopics()"
});
formatter.result({
  "duration": 4846241408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 18
    }
  ],
  "location": "BudgetSteps.enterBidAmount(String)"
});
formatter.result({
  "duration": 3150436044,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.uncheckDefaultTrackingCheckbox()"
});
formatter.result({
  "duration": 5121256183,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonGoogleSearchCampaignForm()"
});
formatter.result({
  "duration": 1231523053,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectFacebookFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 3197049982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Facebook Campaign Details",
      "offset": 25
    }
  ],
  "location": "BudgetSteps.enterNameForFacebook(String)"
});
formatter.result({
  "duration": 2472403924,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunicationsForFacebook()"
});
formatter.result({
  "duration": 3223525262,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTheOS()"
});
formatter.result({
  "duration": 2182076909,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPublisherPlatformsBudget()"
});
formatter.result({
  "duration": 2241818970,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPlatformPlacement()"
});
formatter.result({
  "duration": 3209819566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    }
  ],
  "location": "BudgetSteps.enterBidAmountFacebookBudget(String)"
});
formatter.result({
  "duration": 2140125478,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonFacebookBudget()"
});
formatter.result({
  "duration": 1238793784,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 193941368,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.userShouldBeOnGoalsPage()"
});
formatter.result({
  "duration": 27272022,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickGoogleSearchAccordion()"
});
formatter.result({
  "duration": 4676615420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    }
  ],
  "location": "GoalSteps.enterCostPerClick(String)"
});
formatter.result({
  "duration": 140387334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "GoalSteps.enterCostPerLead(String)"
});
formatter.result({
  "duration": 121543037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 19
    }
  ],
  "location": "GoalSteps.enterTotalLeads(String)"
});
formatter.result({
  "duration": 142271493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "GoalSteps.enterLeadVelocity(String)"
});
formatter.result({
  "duration": 126637915,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 1174525631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    }
  ],
  "location": "GoalSteps.enterCostPerClickForFacebook(String)"
});
formatter.result({
  "duration": 131268297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 34
    }
  ],
  "location": "GoalSteps.enterCostPerLeadForFacebook(String)"
});
formatter.result({
  "duration": 137720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "GoalSteps.enterTotalLeadsForFacebook(String)"
});
formatter.result({
  "duration": 162912349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 34
    }
  ],
  "location": "GoalSteps.enterLeadVelocityForFacebook(String)"
});
formatter.result({
  "duration": 139750786,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 201147053,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1183549307,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.userShouldBeOnReviewPage()"
});
formatter.result({
  "duration": 11332983,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGoogleDisplayAccordionForReview()"
});
formatter.result({
  "duration": 1185120143,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaigns()"
});
formatter.result({
  "duration": 3073522652,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1180583661,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickFacebookConversionAccordionForReview()"
});
formatter.result({
  "duration": 1164005958,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaignsForFacebook()"
});
formatter.result({
  "duration": 3070995217,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1141435975,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.refreshThePageToChangeTheStatus()"
});
formatter.result({
  "duration": 38941959368,
  "status": "passed"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "duration": 4110212645,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncingForSyncedCampaigns()"
});
formatter.result({
  "duration": 1152719721,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "duration": 11760336,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "duration": 3469638849,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "duration": 3274199497,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "duration": 38922185923,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "duration": 1689633691,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "duration": 7298611330,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "duration": 4078875049,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "duration": 38602745981,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "duration": 1669071197,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfLinkedIn()"
});
formatter.result({
  "duration": 6205374468,
  "status": "passed"
});
formatter.after({
  "duration": 42598,
  "status": "passed"
});
});