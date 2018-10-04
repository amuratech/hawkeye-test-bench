$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reverseSyncing.feature");
formatter.feature({
  "line": 1,
  "name": "Reverse Syncing with and without synced campaigns",
  "description": "This feature file describes about the reverse syncing of the campaigns and the adsets",
  "id": "reverse-syncing-with-and-without-synced-campaigns",
  "keyword": "Feature"
});
formatter.before({
  "duration": 317513,
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
  "duration": 6056305209,
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
  "duration": 235858862,
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
  "duration": 133534395,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4393281766,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Validate reverse syncing when the campaigns are synced",
  "description": "",
  "id": "reverse-syncing-with-and-without-synced-campaigns;validate-reverse-syncing-when-the-campaigns-are-synced",
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
  "name": "User should be on start page",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Enter Name \"Testing the campaign syncing for the synced campaigns\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Enter Budget \"100000\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Select the Date range",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Enable advertising account for Adwords",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "Select Adwords campaign type",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Choose Adwords account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "# Enable advertising account for Facebook"
    }
  ],
  "line": 68,
  "name": "Enable advertising account for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Click the Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Select Facebook campaign types",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Choose Facebook account",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 74,
      "value": "# Enable advertising account for LinkedIn"
    }
  ],
  "line": 75,
  "name": "Enable advertising account for LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Click LinkedIn",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Choose LinkedIn Campaign Types",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Choose LinkedIn Account",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "User should be on product page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "# Project page"
    }
  ],
  "line": 83,
  "name": "Select Project by searching with keywords",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "Enter Developer Advertising Name \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Select Project stage",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Select the Segment",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Enter Landing page URL \"http://www.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Select Configurations",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Select Property types",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "Select Property adjectives",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Click Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User should be on creative page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 94,
      "value": "# Creative group for Adwords responsive ad"
    }
  ],
  "line": 95,
  "name": "Click Creative Groups accordion",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "Click Google Display accordion to create a creative group",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Select Responsive Ad from the dropdown to add creative group",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Enter Creative group name \"Testing creative group for Google Adwords with Responsive Ad\"",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "Select Creatives",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Click Submit button- New creative group for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "# Creative group for Facebook"
    }
  ],
  "line": 103,
  "name": "Click Facebook Default accordion to create a creative group",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Click on plus button to create a new creative group",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Enter Creative group name for Facebook \"Testing creative group form for the Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "Enter Headline \"Testing headline\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Enter Description \"Testing description\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Select Asset",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Click Submit button- New creative group",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 111,
      "value": "# Marketing pitch for Adwords"
    }
  ],
  "line": 112,
  "name": "Click Marketing pitch accordion",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "Click plus icon to create new marketing pitch for Adwords",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Enter Communication name \"Testing for adwords search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Enter Description \"Testing for the adwords search description\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Select Marketing Images from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 118,
      "value": "#    And Click Next button"
    },
    {
      "line": 120,
      "value": "# Marketing pitch for Facebook"
    }
  ],
  "line": 121,
  "name": "Click plus icon to create new marketing pitch for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "Enter Communication name for facebook \"Testing Facebook Marketing Pitch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Enter Ad\u0027s description \"Testing ad description for the facebook default campaign\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Select Creative Groups from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Click Save button for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "User should be on precise control page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 129,
      "value": "# Precise control page"
    }
  ],
  "line": 130,
  "name": "Enter Location in Include",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Select Age Range for Google",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Select Gender for Google",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Select Parental Status for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 134,
      "value": "#    And Click Next button"
    },
    {
      "line": 136,
      "value": "# Precise control for Facebook"
    }
  ],
  "line": 137,
  "name": "Click Facebook Default accordion",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "Enter Location in Include for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Select the Min and Max Age",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Select the Publisher Platforms",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Select Bid On from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Select Bidding Type and Bidding Amount",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "User should be on Tracking page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 146,
      "value": "# Tracking page for Adwords"
    }
  ],
  "line": 147,
  "name": "Open Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "Enter URL tagging specs  \"utm_source\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Select Default lead type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 151,
      "value": "#    And Click Next button"
    },
    {
      "line": 152,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 154,
      "value": "# Tracking page for Facebook"
    }
  ],
  "line": 155,
  "name": "Open Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "Enter URL tagging specs for Facebook \"utm_source\u003d\"",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "Enter Phone Number for Facebook \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Select Tracking Pixel",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Select Default lead type for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "User should be on Budget page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 164,
      "value": "# Budget page for Adwords"
    }
  ],
  "line": 165,
  "name": "Select Google Search from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "Enter Name of the campaign \"Testing the campaign details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Select Communications",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Select Topics",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Enter Bid Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "Uncheck Default Tracking checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "Click Save button- Google Search Campaign Form",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 172,
      "value": "#    And Click Next button"
    },
    {
      "line": 174,
      "value": "# Budget page for Facebook"
    }
  ],
  "line": 175,
  "name": "Select Facebook from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "Enter Name for Facebook \"Testing Facebook Campaign Details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 177,
  "name": "Select Communications for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "Select the OS",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "Select Publisher Platforms- Budget",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "Select Platform Placement",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Enter Bid Amount- Facebook budget \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Click Save button- Facebook budget",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "User should be on Goals page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 186,
      "value": "# Goals page for Adwords"
    }
  ],
  "line": 187,
  "name": "Click Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "Enter Cost per Click \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "Enter Cost per Lead \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "Enter Total Leads \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Enter Lead Velocity \"100\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 192,
      "value": "#    And Click Next button"
    },
    {
      "line": 193,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 195,
      "value": "# Goals page for Facebook"
    }
  ],
  "line": 196,
  "name": "Click Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 197,
  "name": "Enter Cost per Click for Facebook \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 198,
  "name": "Enter Cost per Lead for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "Enter Total Leads for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "Enter Lead Velocity for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "User should be on Review page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 205,
      "value": "# Review page for Adwords"
    }
  ],
  "line": 206,
  "name": "Click Google Display accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "Click Generate Campaigns",
  "keyword": "Then "
});
formatter.step({
  "line": 208,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "Click Facebook Conversion accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "Click Generate Campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "Refresh the page to change the status",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 214,
      "value": "# Fetching campaigns for Adwords"
    }
  ],
  "line": 215,
  "name": "Click menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "Select Reverse syncing for synced campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "User should be on Reverse syncing page",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "Click Fetch for New campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "Select campaigns to save them",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "Existing Campaigns accordion should get generated",
  "keyword": "Then "
});
formatter.step({
  "line": 221,
  "name": "Click Fetch for Existing campaigns",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 223,
      "value": "# Fetching campaigns for Facebook"
    }
  ],
  "line": 224,
  "name": "Click Fetch for New Campaigns of Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "Select campaigns to save them for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "Existing Campaigns accordion should get generated for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "Click Fetch for Existing campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 229,
      "value": "# Fetching campaigns for LinkedIn"
    }
  ],
  "line": 230,
  "name": "Click Fetch for New Campaigns of LinkedIn",
  "keyword": "When "
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10175845271,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 18621504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the campaign syncing for the synced campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 469730421,
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
  "duration": 179392237,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1560187047,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 2256952524,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 187180932,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2189171986,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 2181069664,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 2169931528,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 118161530,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3218326298,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1304643877,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "duration": 2211441713,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "duration": 2184579245,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "duration": 2170556213,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "duration": 1181692319,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 217644054,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnProductPage()"
});
formatter.result({
  "duration": 14210067,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "duration": 6504891514,
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
  "duration": 169837179,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "duration": 4201111813,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "duration": 1079345673,
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
  "duration": 323304693,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "duration": 2294490916,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyTypes()"
});
formatter.result({
  "duration": 279049408,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyAdjectives()"
});
formatter.result({
  "duration": 279955773,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 249006164,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.userShouldBeOnCreativePage()"
});
formatter.result({
  "duration": 20234391,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickCreativeGroupsAccordion()"
});
formatter.result({
  "duration": 4799900881,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickGoogleDisplayAccordionToCreateACreativeGroup()"
});
formatter.result({
  "duration": 2170767471,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectResponsiveAdFromTheDropdownToAddCreativeGroup()"
});
formatter.result({
  "duration": 5179404676,
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
  "duration": 445933937,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreatives()"
});
formatter.result({
  "duration": 7442708615,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroupForGoogle()"
});
formatter.result({
  "duration": 2348738540,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickFacebookDefaultAccordionToCreateCreativeGroup()"
});
formatter.result({
  "duration": 2075039615,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickOnPlusButtonToCreateANewCreativeGroup()"
});
formatter.result({
  "duration": 2183912294,
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
  "duration": 401817297,
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
  "duration": 207924558,
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
  "duration": 237063319,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectAsset()"
});
formatter.result({
  "duration": 5364353810,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroup()"
});
formatter.result({
  "duration": 2325592294,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickMarketingPitchAccordion()"
});
formatter.result({
  "duration": 1158051709,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForAdwords()"
});
formatter.result({
  "duration": 2220394246,
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
  "duration": 255825381,
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
  "duration": 362953925,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectMarketingImagesFromTheDropdown()"
});
formatter.result({
  "duration": 2213148390,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButton()"
});
formatter.result({
  "duration": 2205375669,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForFacebook()"
});
formatter.result({
  "duration": 2194946799,
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
  "duration": 274064675,
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
  "duration": 451797188,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreativeGroupsFromTheDropdown()"
});
formatter.result({
  "duration": 3170224981,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButtonForFacebook()"
});
formatter.result({
  "duration": 2194521692,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 200258585,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.userShouldBeOnPreciseControlPage()"
});
formatter.result({
  "duration": 12950236,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInInclude()"
});
formatter.result({
  "duration": 5411770355,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectAgeRangeForGoogle()"
});
formatter.result({
  "duration": 2242175043,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectGenderForGoogle()"
});
formatter.result({
  "duration": 2203130913,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectParentalStatusForGoogle()"
});
formatter.result({
  "duration": 2156621736,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.clickFacebookDefaultAccordion()"
});
formatter.result({
  "duration": 2164127486,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInIncludeForFacebook()"
});
formatter.result({
  "duration": 5373298010,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectTheMinAndMaxAge()"
});
formatter.result({
  "duration": 5390783890,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectThePublisherPlatforms()"
});
formatter.result({
  "duration": 2213801782,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBidOnFromTheDropdown()"
});
formatter.result({
  "duration": 2155100616,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBiddingTypeAndBiddingAmount()"
});
formatter.result({
  "duration": 2204129172,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 247131235,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.userShouldBeOnTrackingPage()"
});
formatter.result({
  "duration": 19452079,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openGoogleSearchAccordion()"
});
formatter.result({
  "duration": 3251796203,
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
  "duration": 176928106,
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
  "duration": 148226816,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadType()"
});
formatter.result({
  "duration": 2178500697,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 2183116163,
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
  "duration": 174729785,
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
  "duration": 165321948,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectTrackingPixel()"
});
formatter.result({
  "duration": 2217299639,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadTypeForFacebook()"
});
formatter.result({
  "duration": 2172615190,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 172322085,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2225791067,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.userShouldBeOnBudgetPage()"
});
formatter.result({
  "duration": 12237433,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectGoogleSearchFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 1266791223,
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
  "duration": 2524075482,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunications()"
});
formatter.result({
  "duration": 2186269425,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTopics()"
});
formatter.result({
  "duration": 4838013979,
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
  "duration": 3157331544,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.uncheckDefaultTrackingCheckbox()"
});
formatter.result({
  "duration": 5127804643,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonGoogleSearchCampaignForm()"
});
formatter.result({
  "duration": 2218267848,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectFacebookFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 3253488127,
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
  "duration": 2513317237,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunicationsForFacebook()"
});
formatter.result({
  "duration": 3215511774,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTheOS()"
});
formatter.result({
  "duration": 2177731301,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPublisherPlatformsBudget()"
});
formatter.result({
  "duration": 2269628535,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPlatformPlacement()"
});
formatter.result({
  "duration": 3281428582,
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
  "duration": 2178045704,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonFacebookBudget()"
});
formatter.result({
  "duration": 2184731712,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 214963499,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.userShouldBeOnGoalsPage()"
});
formatter.result({
  "duration": 21950668,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickGoogleSearchAccordion()"
});
formatter.result({
  "duration": 4677676691,
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
  "duration": 169734322,
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
  "duration": 137139742,
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
  "duration": 119524086,
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
  "duration": 121282637,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 2162284893,
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
  "duration": 135096051,
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
  "duration": 134147723,
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
  "duration": 123652830,
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
  "duration": 128641589,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 224043993,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2212091959,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.userShouldBeOnReviewPage()"
});
formatter.result({
  "duration": 12482957,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGoogleDisplayAccordionForReview()"
});
formatter.result({
  "duration": 2161426179,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaigns()"
});
formatter.result({
  "duration": 3077824239,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2146209696,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickFacebookConversionAccordionForReview()"
});
formatter.result({
  "duration": 2171693833,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaignsForFacebook()"
});
formatter.result({
  "duration": 3089817316,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2165256316,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.refreshThePageToChangeTheStatus()"
});
formatter.result({
  "duration": 46175312013,
  "status": "passed"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "duration": 4093501099,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncingForSyncedCampaigns()"
});
formatter.result({
  "duration": 2181541523,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "duration": 12384377,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "duration": 3421385598,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "duration": 3292395697,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "duration": 39098934273,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "duration": 2741324066,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "duration": 7623435753,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "duration": 2497189379,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "duration": 38676093579,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "duration": 2731543191,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfLinkedIn()"
});
formatter.result({
  "duration": 6186064162,
  "status": "passed"
});
formatter.after({
  "duration": 412773,
  "status": "passed"
});
formatter.after({
  "duration": 3297373758,
  "status": "passed"
});
});