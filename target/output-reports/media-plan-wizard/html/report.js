$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mediaPlanWizard.feature");
formatter.feature({
  "line": 1,
  "name": "Media plan wizard",
  "description": "This feature describes about the media plan wizard for the campaigns from start to review page",
  "id": "media-plan-wizard",
  "keyword": "Feature"
});
formatter.before({
  "duration": 338197,
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
  "name": "Enter Name \"Testing the syncing of the campaigns\"",
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
  "comments": [
    {
      "line": 47,
      "value": "#    And Select Creatives"
    }
  ],
  "line": 48,
  "name": "Upload Creatives",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click Submit button- New creative group for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "#    -----Creative Page- Facebook--------------"
    }
  ],
  "line": 52,
  "name": "Click Facebook Default accordion to create a creative group",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Click on plus button to create a new creative group",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Enter Creative group name for Facebook \"Testing creative group form for the Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Enter Headline \"Testing headline\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Enter Description \"Testing description\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Select Asset",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "#    When Upload Asset"
    }
  ],
  "line": 59,
  "name": "Click Submit button- New creative group",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 61,
      "value": "# Marketing pitch for Adwords"
    }
  ],
  "line": 62,
  "name": "Click Marketing pitch accordion",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Click plus icon to create new marketing pitch for Adwords",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Enter Communication name \"Testing for adwords search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Enter Description \"Testing for the adwords search description\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Select Marketing Images from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#    And Click Next button"
    },
    {
      "line": 70,
      "value": "# Marketing pitch for Facebook"
    }
  ],
  "line": 71,
  "name": "Click plus icon to create new marketing pitch for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Enter Communication name for facebook \"Testing Facebook Marketing Pitch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Enter Ad\u0027s description \"Testing ad description for the facebook default campaign\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Select Creative Groups from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Click Save button for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User should be on precise control page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 79,
      "value": "# Precise targeting for Adwords"
    }
  ],
  "line": 80,
  "name": "Enter Location in Include",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 81,
      "value": "#    And Enter Location in Exclude"
    }
  ],
  "line": 82,
  "name": "Select Age Range for Google",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Select Gender for Google",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Select Parental Status for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 85,
      "value": "#    And Click Next button"
    },
    {
      "line": 87,
      "value": "# Precise targeting for Facebook"
    }
  ],
  "line": 88,
  "name": "Click Facebook Default accordion",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Enter Location in Include for Facebook",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#    And Select the Gender"
    }
  ],
  "line": 91,
  "name": "Select the Min and Max Age",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Select the Publisher Platforms",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 93,
      "value": "#    And Select the Devices"
    },
    {
      "line": 94,
      "value": "#    And Select the Placement"
    }
  ],
  "line": 95,
  "name": "Select Bid On from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Select Bidding Type and Bidding Amount",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 97,
      "value": "#    And Enter Interest for the campaign"
    }
  ],
  "line": 98,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 100,
      "value": "# Tracking page for Adwords"
    }
  ],
  "line": 101,
  "name": "User should be on Tracking page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "Open Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Enter URL tagging specs  \"utm_source\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Select Default lead type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 107,
      "value": "# Tracking page for Facebook"
    }
  ],
  "line": 108,
  "name": "Open Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Enter URL tagging specs for Facebook \"utm_source\u003d\"",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "Enter Phone Number for Facebook \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Select Tracking Pixel",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Select Default lead type for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "User should be on Budget page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 117,
      "value": "# Budget page for Adwords"
    }
  ],
  "line": 118,
  "name": "Select Google Search from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "Enter Name of the campaign \"Testing the campaign details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "Select Communications",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Select Topics",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Enter Bid Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Uncheck Default Tracking checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Click Save button- Google Search Campaign Form",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 126,
      "value": "# Budget page for Facebook"
    }
  ],
  "line": 127,
  "name": "Select Facebook from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Enter Name for Facebook \"Testing Facebook Campaign Details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "Select Communications for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Select the OS",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Select Publisher Platforms- Budget",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Select Platform Placement",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Enter Bid Amount- Facebook budget \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Click Save button- Facebook budget",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "User should be on Goals page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 138,
      "value": "# Goals page for Adwords"
    }
  ],
  "line": 139,
  "name": "Click Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "Enter Cost per Click \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Enter Cost per Lead \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Enter Total Leads \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Enter Lead Velocity \"100\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 145,
      "value": "# Goals page for Facebook"
    }
  ],
  "line": 146,
  "name": "Click Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "Enter Cost per Click for Facebook \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Enter Cost per Lead for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Enter Total Leads for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Enter Lead Velocity for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User should be on Review page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 155,
      "value": "# Review page"
    }
  ],
  "line": 156,
  "name": "Click Google Display accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "Click Generate Campaigns",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Click Facebook Conversion accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 160,
  "name": "Click Generate Campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
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
  "duration": 8270793655,
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
  "duration": 237957103,
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
  "duration": 108580599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 6885395001,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 13498044,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10192969903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the syncing of the campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 413532468,
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
  "duration": 186688612,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1612783188,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 2274329356,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 196246945,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2186490163,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 2173664666,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 2177842871,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 99543613,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3289227188,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1305739158,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 221640493,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnProductPage()"
});
formatter.result({
  "duration": 12733300,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "duration": 7593365070,
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
  "duration": 175349172,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "duration": 4214501251,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "duration": 1074638715,
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
  "duration": 347299202,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "duration": 2317012132,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyTypes()"
});
formatter.result({
  "duration": 296170305,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectPropertyAdjectives()"
});
formatter.result({
  "duration": 297732426,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 265854843,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.userShouldBeOnCreativePage()"
});
formatter.result({
  "duration": 12408575,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickCreativeGroupsAccordion()"
});
formatter.result({
  "duration": 5808013435,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickGoogleDisplayAccordionToCreateACreativeGroup()"
});
formatter.result({
  "duration": 2155481024,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectResponsiveAdFromTheDropdownToAddCreativeGroup()"
});
formatter.result({
  "duration": 5154990240,
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
  "duration": 471164038,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.uploadCreatives()"
});
formatter.result({
  "duration": 6251190745,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroupForGoogle()"
});
formatter.result({
  "duration": 2174124838,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickFacebookDefaultAccordionToCreateCreativeGroup()"
});
formatter.result({
  "duration": 2109486923,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickOnPlusButtonToCreateANewCreativeGroup()"
});
formatter.result({
  "duration": 2178693861,
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
  "duration": 354471024,
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
  "duration": 183744738,
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
  "duration": 237092500,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectAsset()"
});
formatter.result({
  "duration": 5379201759,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroup()"
});
formatter.result({
  "duration": 2330059590,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickMarketingPitchAccordion()"
});
formatter.result({
  "duration": 1151210765,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForAdwords()"
});
formatter.result({
  "duration": 2219084163,
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
  "duration": 294644017,
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
  "duration": 393169545,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectMarketingImagesFromTheDropdown()"
});
formatter.result({
  "duration": 2193780901,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButton()"
});
formatter.result({
  "duration": 2197042483,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForFacebook()"
});
formatter.result({
  "duration": 2190682754,
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
  "duration": 253606553,
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
  "duration": 459245585,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.selectCreativeGroupsFromTheDropdown()"
});
formatter.result({
  "duration": 3187611121,
  "status": "passed"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButtonForFacebook()"
});
formatter.result({
  "duration": 2183932602,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 166292953,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.userShouldBeOnPreciseControlPage()"
});
formatter.result({
  "duration": 13256508,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInInclude()"
});
formatter.result({
  "duration": 5460459944,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectAgeRangeForGoogle()"
});
formatter.result({
  "duration": 2215724214,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectGenderForGoogle()"
});
formatter.result({
  "duration": 2180921452,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectParentalStatusForGoogle()"
});
formatter.result({
  "duration": 2194313250,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.clickFacebookDefaultAccordion()"
});
formatter.result({
  "duration": 2151577064,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInIncludeForFacebook()"
});
formatter.result({
  "duration": 5351860175,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectTheMinAndMaxAge()"
});
formatter.result({
  "duration": 5447172306,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectThePublisherPlatforms()"
});
formatter.result({
  "duration": 2188763724,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBidOnFromTheDropdown()"
});
formatter.result({
  "duration": 2185759701,
  "status": "passed"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBiddingTypeAndBiddingAmount()"
});
formatter.result({
  "duration": 2199455237,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 246137700,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.userShouldBeOnTrackingPage()"
});
formatter.result({
  "duration": 44618727,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openGoogleSearchAccordion()"
});
formatter.result({
  "duration": 3276437915,
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
  "duration": 159984855,
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
  "duration": 153830960,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadType()"
});
formatter.result({
  "duration": 2182518190,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.openFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 2220587365,
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
  "duration": 176682518,
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
  "duration": 139732249,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectTrackingPixel()"
});
formatter.result({
  "duration": 2203698824,
  "status": "passed"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadTypeForFacebook()"
});
formatter.result({
  "duration": 2183102567,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 199916140,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2298742190,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.userShouldBeOnBudgetPage()"
});
formatter.result({
  "duration": 31324542,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectGoogleSearchFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 1250278357,
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
  "duration": 2495415731,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunications()"
});
formatter.result({
  "duration": 2214692874,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTopics()"
});
formatter.result({
  "duration": 4856888795,
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
  "duration": 3145249897,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.uncheckDefaultTrackingCheckbox()"
});
formatter.result({
  "duration": 5105373450,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonGoogleSearchCampaignForm()"
});
formatter.result({
  "duration": 2232195505,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectFacebookFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "duration": 3212885033,
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
  "duration": 2525324978,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectCommunicationsForFacebook()"
});
formatter.result({
  "duration": 3238960994,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectTheOS()"
});
formatter.result({
  "duration": 2183065018,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPublisherPlatformsBudget()"
});
formatter.result({
  "duration": 2260055739,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.selectPlatformPlacement()"
});
formatter.result({
  "duration": 3262675162,
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
  "duration": 2161906722,
  "status": "passed"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonFacebookBudget()"
});
formatter.result({
  "duration": 2202866449,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 223670508,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.userShouldBeOnGoalsPage()"
});
formatter.result({
  "duration": 25944494,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickGoogleSearchAccordion()"
});
formatter.result({
  "duration": 4655959150,
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
  "duration": 144451364,
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
  "duration": 123634317,
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
  "duration": 127831525,
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
  "duration": 122164283,
  "status": "passed"
});
formatter.match({
  "location": "GoalSteps.clickFacebookLeadGenAccordion()"
});
formatter.result({
  "duration": 2200790803,
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
  "duration": 171287152,
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
  "duration": 150067468,
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
  "duration": 150111012,
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
  "duration": 118050074,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 211057481,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2236929170,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.userShouldBeOnReviewPage()"
});
formatter.result({
  "duration": 13010088,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGoogleDisplayAccordionForReview()"
});
formatter.result({
  "duration": 2158398257,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaigns()"
});
formatter.result({
  "duration": 3066357748,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2114461430,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickFacebookConversionAccordionForReview()"
});
formatter.result({
  "duration": 2154017152,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaignsForFacebook()"
});
formatter.result({
  "duration": 3094345215,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "duration": 2147897709,
  "status": "passed"
});
formatter.match({
  "location": "ReviewSteps.refreshThePageToChangeTheStatus()"
});
formatter.result({
  "duration": 46021434523,
  "status": "passed"
});
formatter.after({
  "duration": 3989056327,
  "status": "passed"
});
formatter.after({
  "duration": 289544,
  "status": "passed"
});
formatter.after({
  "duration": 4447092,
  "error_message": "java.lang.NullPointerException\n\tat amura.selenium.steps.Hooks.passTest(Hooks.java:133)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n",
  "status": "failed"
});
formatter.after({
  "duration": 222215,
  "error_message": "java.lang.NullPointerException\n\tat amura.selenium.steps.Hooks.failTest(Hooks.java:141)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n",
  "status": "failed"
});
formatter.after({
  "duration": 7482450,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [null] but found [assertion]\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:47)\n\tat amura.selenium.steps.Hooks.softAssertion(Hooks.java:153)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n",
  "status": "failed"
});
});