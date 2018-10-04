$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mediaPlanWizard.feature");
formatter.feature({
  "line": 1,
  "name": "Media plan wizard",
  "description": "This feature describes about the media plan wizard for the campaigns from start to review page",
  "id": "media-plan-wizard",
  "keyword": "Feature"
});
formatter.before({
  "duration": 355597,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate the generation and syncing of the campaigns",
  "description": "",
  "id": "media-plan-wizard;validate-the-generation-and-syncing-of-the-campaigns",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the URL \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter EmailId \"piyush@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Password \"piyush23\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be on start page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# Add media plan and enable advertising account for Adwords"
    }
  ],
  "line": 13,
  "name": "Click \u0027Add Media Plan\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Name \"Testing the campaigns for generating and syncing in media plan\"",
  "keyword": "Then "
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
  "line": 17,
  "name": "Enable advertising account for Adwords",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Select Adwords campaign type",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Choose Adwords account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Enable advertising account for Facebook"
    }
  ],
  "line": 22,
  "name": "Enable advertising account for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click the Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Facebook campaign types",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Choose Facebook account",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be on product page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "# Add project"
    }
  ],
  "line": 31,
  "name": "Select Project by searching with keywords",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter Developer Advertising Name \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Select Project stage",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select the Segment",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Landing page URL \"http://www.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select Configurations",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Select Property types",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Select Property adjectives",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User should be on creative page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "# Creative group for Adwords"
    }
  ],
  "line": 43,
  "name": "Click Creative Groups accordion",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Click Google Display accordion to create a creative group",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Select Responsive Ad from the dropdown to add creative group",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Enter Creative group name \"Testing creative group for Google Adwords with Responsive Ad\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select Creatives",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click Submit button- New creative group for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#    -----Creative Page- Facebook--------------"
    }
  ],
  "line": 51,
  "name": "Click Facebook Default accordion to create a creative group",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Click on plus button to create a new creative group",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Enter Creative group name for Facebook \"Testing creative group form for the Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Enter Headline \"Testing headline\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Enter Description \"Testing description\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Select Asset",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Click Submit button- New creative group",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 59,
      "value": "# Marketing pitch for Adwords"
    }
  ],
  "line": 60,
  "name": "Click Marketing pitch accordion",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Click plus icon to create new marketing pitch for Adwords",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter Communication name \"Testing for adwords search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Enter Description \"Testing for the adwords search description\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Select Marketing Images from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 66,
      "value": "#    And Click Next button"
    },
    {
      "line": 68,
      "value": "# Marketing pitch for Facebook"
    }
  ],
  "line": 69,
  "name": "Click plus icon to create new marketing pitch for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Enter Communication name for facebook \"Testing Facebook Marketing Pitch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Enter Ad\u0027s description \"Testing ad description for the facebook default campaign\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Select Creative Groups from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click Save button for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User should be on precise control page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 77,
      "value": "# Precise targeting for Adwords"
    }
  ],
  "line": 78,
  "name": "Enter Location in Include",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 79,
      "value": "#    And Enter Location in Exclude"
    }
  ],
  "line": 80,
  "name": "Select Age Range for Google",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Select Gender for Google",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Select Parental Status for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 83,
      "value": "#    And Click Next button"
    },
    {
      "line": 85,
      "value": "# Precise targeting for Facebook"
    }
  ],
  "line": 86,
  "name": "Click Facebook Default accordion",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Enter Location in Include for Facebook",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 88,
      "value": "#    And Select the Gender"
    }
  ],
  "line": 89,
  "name": "Select the Min and Max Age",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Select the Publisher Platforms",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 91,
      "value": "#    And Select the Devices"
    },
    {
      "line": 92,
      "value": "#    And Select the Placement"
    }
  ],
  "line": 93,
  "name": "Select Bid On from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Select Bidding Type and Bidding Amount",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 95,
      "value": "#    And Enter Interest for the campaign"
    }
  ],
  "line": 96,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 98,
      "value": "# Tracking page for Adwords"
    }
  ],
  "line": 99,
  "name": "User should be on Tracking page",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Open Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "Enter URL tagging specs  \"utm_source\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Select Default lead type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 105,
      "value": "# Tracking page for Facebook"
    }
  ],
  "line": 106,
  "name": "Open Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Enter URL tagging specs for Facebook \"utm_source\u003d\"",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Enter Phone Number for Facebook \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Select Tracking Pixel",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Select Default lead type for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "User should be on Budget page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 115,
      "value": "# Budget page for Adwords"
    }
  ],
  "line": 116,
  "name": "Select Google Search from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Enter Name of the campaign \"Testing the campaign details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "Select Communications",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Select Topics",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "Enter Bid Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Uncheck Default Tracking checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Click Save button- Google Search Campaign Form",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 124,
      "value": "# Budget page for Facebook"
    }
  ],
  "line": 125,
  "name": "Select Facebook from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "Enter Name for Facebook \"Testing Facebook Campaign Details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Select Communications for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "Select the OS",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Select Publisher Platforms- Budget",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Select Platform Placement",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Enter Bid Amount- Facebook budget \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Click Save button- Facebook budget",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "User should be on Goals page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 136,
      "value": "# Goals page for Adwords"
    }
  ],
  "line": 137,
  "name": "Click Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "Enter Cost per Click \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Enter Cost per Lead \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Enter Total Leads \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Enter Lead Velocity \"100\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "# Goals page for Facebook"
    }
  ],
  "line": 144,
  "name": "Click Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "Enter Cost per Click for Facebook \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "Enter Cost per Lead for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Enter Total Leads for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Enter Lead Velocity for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "User should be on Review page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 153,
      "value": "# Review page"
    }
  ],
  "line": 154,
  "name": "Click Google Display accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "Click Generate Campaigns",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Click Facebook Conversion accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "Click Generate Campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "Refresh the page to change the status",
  "keyword": "And "
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
  "duration": 12710683053,
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
  "duration": 216166097,
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
  "duration": 123171236,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 5903844498,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 12313852,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10185026995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the campaigns for generating and syncing in media plan",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 630435190,
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
  "duration": 185415340,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1584680296,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 1299678678,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 187383334,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2172533132,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 1193403903,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 1143959697,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 107553546,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3251500799,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1298978731,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 235038283,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnProductPage()"
});
formatter.result({
  "duration": 20520567,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "duration": 6545094092,
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
  "duration": 192289388,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "duration": 4204482780,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "duration": 1095170102,
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
  "duration": 303258070,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "duration": 2314598174,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyTypes()"
});
formatter.result({
  "duration": 265204641,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyAdjectives()"
});
formatter.result({
  "duration": 281243552,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 230155049,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.userShouldBeOnCreativePage()"
});
formatter.result({
  "duration": 21714046,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickCreativeGroupsAccordion()"
});
formatter.result({
  "duration": 4298097605,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickGoogleDisplayAccordionToCreateACreativeGroup()"
});
formatter.result({
  "duration": 1155740711,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectResponsiveAdFromTheDropdownToAddCreativeGroup()"
});
formatter.result({
  "duration": 4183247072,
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
  "duration": 430056119,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreatives()"
});
formatter.result({
  "duration": 6298111427,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroupForGoogle()"
});
formatter.result({
  "duration": 1235449970,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickFacebookDefaultAccordionToCreateCreativeGroup()"
});
formatter.result({
  "duration": 2091441789,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickOnPlusButtonToCreateANewCreativeGroup()"
});
formatter.result({
  "duration": 1177577998,
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
  "duration": 357166234,
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
  "duration": 188007155,
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
  "duration": 201421879,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectAsset()"
});
formatter.result({
  "duration": 6351555902,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroup()"
});
formatter.result({
  "duration": 5116887516,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickMarketingPitchAccordion()"
});
formatter.result({
  "duration": 1138111042,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForAdwords()"
});
formatter.result({
  "duration": 1173924399,
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
  "duration": 262459504,
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
  "duration": 335780948,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectMarketingImagesFromTheDropdown()"
});
formatter.result({
  "duration": 2218789702,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButton()"
});
formatter.result({
  "duration": 1197567840,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForFacebook()"
});
formatter.result({
  "duration": 1185627094,
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
  "duration": 241467089,
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
  "duration": 417284903,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreativeGroupsFromTheDropdown()"
});
formatter.result({
  "duration": 3189808568,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButtonForFacebook()"
});
formatter.result({
  "duration": 1165547594,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 157193881,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.userShouldBeOnPreciseControlPage()"
});
formatter.result({
  "duration": 22815310,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInInclude()"
});
formatter.result({
  "duration": 5515455352,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectAgeRangeForGoogle()"
});
formatter.result({
  "duration": 1230507346,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectGenderForGoogle()"
});
formatter.result({
  "duration": 1176899666,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectParentalStatusForGoogle()"
});
formatter.result({
  "duration": 1200832130,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.clickFacebookDefaultAccordion()"
});
formatter.result({
  "duration": 2160499488,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInIncludeForFacebook()"
});
formatter.result({
  "duration": 5364251993,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectTheMinAndMaxAge()"
});
formatter.result({
  "duration": 5404841096,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectThePublisherPlatforms()"
});
formatter.result({
  "duration": 1198802320,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBidOnFromTheDropdown()"
});
formatter.result({
  "duration": 2184042864,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBiddingTypeAndBiddingAmount()"
});
formatter.result({
  "duration": 2232308461,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 228720087,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.userShouldBeOnTrackingPage()"
});
formatter.result({
  "duration": 10644540,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openGoogleSearchAccordion()"
});
formatter.result({
  "duration": 2232345773,
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
  "duration": 145427355,
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
  "duration": 160528737,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadType()"
});
formatter.result({
  "duration": 2218197946,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 1216590162,
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
  "duration": 141639889,
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
  "duration": 146965308,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectTrackingPixel()"
});
formatter.result({
  "duration": 2165000489,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadTypeForFacebook()"
});
formatter.result({
  "duration": 2204478591,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 171565333,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1231265937,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.userShouldBeOnBudgetPage()"
});
formatter.result({
  "duration": 14441812,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectGoogleSearchFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 1837666854,
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
  "duration": 2475516587,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunications()"
});
formatter.result({
  "duration": 2211083559,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTopics()"
});
formatter.result({
  "duration": 4853949051,
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
  "duration": 3136719442,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.uncheckDefaultTrackingCheckbox()"
});
formatter.result({
  "duration": 5127624112,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonGoogleSearchCampaignForm()"
});
formatter.result({
  "duration": 1230653362,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectFacebookFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 3211312353,
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
  "duration": 2495982560,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunicationsForFacebook()"
});
formatter.result({
  "duration": 3236038930,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTheOS()"
});
formatter.result({
  "duration": 2188659973,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPublisherPlatformsBudget()"
});
formatter.result({
  "duration": 2254100579,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPlatformPlacement()"
});
formatter.result({
  "duration": 3241799671,
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
  "duration": 2147438022,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonFacebookBudget()"
});
formatter.result({
  "duration": 1204087929,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 249813856,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.userShouldBeOnGoalsPage()"
});
formatter.result({
  "duration": 22357330,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickGoogleSearchAccordion()"
});
formatter.result({
  "duration": 4699155480,
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
  "duration": 137383180,
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
  "duration": 115351260,
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
  "duration": 122044003,
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
  "duration": 110446921,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 1169116238,
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
  "duration": 147158036,
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
  "duration": 134520201,
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
  "duration": 133843656,
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
  "duration": 159992825,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 197381364,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1178408429,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.userShouldBeOnReviewPage()"
});
formatter.result({
  "duration": 11360316,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGoogleDisplayAccordionForReview()"
});
formatter.result({
  "duration": 1161645315,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaigns()"
});
formatter.result({
  "duration": 3089327568,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1124647963,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickFacebookConversionAccordionForReview()"
});
formatter.result({
  "duration": 1145211244,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaignsForFacebook()"
});
formatter.result({
  "duration": 3083686384,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 1148595290,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.refreshThePageToChangeTheStatus()"
});
formatter.result({
  "duration": 38921704084,
  "status": "passed"
});
formatter.after({
  "duration": 205548,
  "status": "passed"
});
formatter.after({
  "duration": 8443379257,
  "status": "passed"
});
});