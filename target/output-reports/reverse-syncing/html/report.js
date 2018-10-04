$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reverseSyncing.feature");
formatter.feature({
  "line": 1,
  "name": "Reverse Syncing with and without synced campaigns",
  "description": "This feature file describes about the reverse syncing of the campaigns and the adsets",
  "id": "reverse-syncing-with-and-without-synced-campaigns",
  "keyword": "Feature"
});
formatter.before({
  "duration": 374769,
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
  "duration": 6015728758,
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
  "duration": 208279376,
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
  "duration": 121440027,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4585257284,
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
  "name": "Enter Name \"Testing the reverse syncing for media plans with synced campaigns\"",
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
  "line": 53,
  "name": "Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10172725974,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "duration": 21123354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the reverse syncing for media plans with synced campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 615542723,
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
  "duration": 145445627,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1556511760,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 2258340256,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 171758032,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 2217957916,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 2195159930,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 2165150246,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 123003197,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 3200452309,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 1328121720,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "duration": 2199052973,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "duration": 2172608173,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "duration": 2156057093,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "duration": 1171791538,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 233482662,
  "status": "passed"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "duration": 4124939379,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncing()"
});
formatter.result({
  "duration": 2202301876,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "duration": 17728431,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "duration": 3993523611,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "duration": 3291956422,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "duration": 38713185734,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "duration": 2725052380,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "duration": 7387279367,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "duration": 2482003720,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "duration": 38695635628,
  "status": "passed"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "duration": 2700834873,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.signOut()"
});
formatter.result({
  "duration": 20406533447,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@id\u003d\"container\"]/header/div/div/div/div[3]/div/div/a/span (tried for 20 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027amura-Latitude-3460\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-45-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528139 (47ead77cb35ad2..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: d1a6f1b87abb066777a73ee55353fa7f\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat amura.selenium.driver.TestDriver.mySignOut(TestDriver.java:2442)\n\tat amura.selenium.pages.LoginPage.signOut(LoginPage.java:61)\n\tat amura.selenium.steps.LoginSteps.signOut(LoginSteps.java:72)\n\tat ✽.And Sign out(reverseSyncing.feature:53)\n",
  "status": "failed"
});
formatter.after({
  "duration": 220941,
  "status": "passed"
});
formatter.after({
  "duration": 19479,
  "status": "passed"
});
formatter.before({
  "duration": 61859,
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
  "duration": 889127067,
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
  "duration": 35751533,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"user_email\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881),platform\u003dLinux 3.13.0-45-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027amura-Latitude-3460\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-45-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528139 (47ead77cb35ad2..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: d1a6f1b87abb066777a73ee55353fa7f\n*** Element info: {Using\u003did, value\u003duser_email}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat amura.selenium.driver.TestDriver.myEnter(TestDriver.java:90)\n\tat amura.selenium.pages.LoginPage.enterEmailId(LoginPage.java:49)\n\tat amura.selenium.steps.LoginSteps.enterEmailId(LoginSteps.java:56)\n\tat ✽.When Enter EmailId \"piyush@amuratech.com\"(reverseSyncing.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "# Fetching campaigns for LinkedIn"
    },
    {
      "line": 56,
      "value": "#    When Click Fetch for New Campaigns of LinkedIn"
    }
  ],
  "line": 59,
  "name": "Validate reverse syncing when the campaigns are synced",
  "description": "",
  "id": "reverse-syncing-with-and-without-synced-campaigns;validate-reverse-syncing-when-the-campaigns-are-synced",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@reversesmoke"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Click \u0027Add Media Plan\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User should be on start page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter Name \"Testing the plan for reverse syncing with synced campaigns\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Enter Budget \"100000\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Select the Date range",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Enable advertising account for Adwords",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "Select Adwords campaign type",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Choose Adwords account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 69,
      "value": "# Enable advertising account for Facebook"
    }
  ],
  "line": 70,
  "name": "Enable advertising account for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Click the Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Select Facebook campaign types",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Choose Facebook account",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 76,
      "value": "# Enable advertising account for LinkedIn"
    }
  ],
  "line": 77,
  "name": "Enable advertising account for LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Click LinkedIn",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Choose LinkedIn Campaign Types",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Choose LinkedIn Account",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User should be on product page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "# Project page"
    }
  ],
  "line": 85,
  "name": "Select Project by searching with keywords",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "Enter Developer Advertising Name \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Select Project stage",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Select the Segment",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Enter Landing page URL \"http://www.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Select Configurations",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Select Property types",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Select Property adjectives",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Click Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "User should be on creative page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 96,
      "value": "# Creative group for Adwords responsive ad"
    }
  ],
  "line": 97,
  "name": "Click Creative Groups accordion",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "Click Google Display accordion to create a creative group",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Select Responsive Ad from the dropdown to add creative group",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Enter Creative group name \"Testing creative group for Google Adwords with Responsive Ad\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Select Creatives",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Click Submit button- New creative group for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 104,
      "value": "# Creative group for Facebook"
    }
  ],
  "line": 105,
  "name": "Click Facebook Default accordion to create a creative group",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Click on plus button to create a new creative group",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Enter Creative group name for Facebook \"Testing creative group form for the Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Enter Headline \"Testing headline\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Enter Description \"Testing description\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Select Asset",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Click Submit button- New creative group",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 113,
      "value": "# Marketing pitch for Adwords"
    }
  ],
  "line": 114,
  "name": "Click Marketing pitch accordion",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "Click plus icon to create new marketing pitch for Adwords",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Enter Communication name \"Testing for adwords search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Enter Description \"Testing for the adwords search description\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Select Marketing Images from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 120,
      "value": "#    And Click Next button"
    },
    {
      "line": 122,
      "value": "# Marketing pitch for Facebook"
    }
  ],
  "line": 123,
  "name": "Click plus icon to create new marketing pitch for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "Enter Communication name for facebook \"Testing Facebook Marketing Pitch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Enter Ad\u0027s description \"Testing ad description for the facebook default campaign\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Select Creative Groups from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Click Save button for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "User should be on precise control page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 131,
      "value": "# Precise control page"
    }
  ],
  "line": 132,
  "name": "Enter Location in Include",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Select Age Range for Google",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Select Gender for Google",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Select Parental Status for Google",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 136,
      "value": "#    And Click Next button"
    },
    {
      "line": 138,
      "value": "# Precise control for Facebook"
    }
  ],
  "line": 139,
  "name": "Click Facebook Default accordion",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "Enter Location in Include for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Select the Min and Max Age",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Select the Publisher Platforms",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Select Bid On from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Select Bidding Type and Bidding Amount",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User should be on Tracking page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 148,
      "value": "# Tracking page for Adwords"
    }
  ],
  "line": 149,
  "name": "Open Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "Enter URL tagging specs  \"utm_source\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Select Default lead type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 153,
      "value": "#    And Click Next button"
    },
    {
      "line": 154,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 156,
      "value": "# Tracking page for Facebook"
    }
  ],
  "line": 157,
  "name": "Open Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "Enter URL tagging specs for Facebook \"utm_source\u003d\"",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "Enter Phone Number for Facebook \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Select Tracking Pixel",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Select Default lead type for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "User should be on Budget page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 166,
      "value": "# Budget page for Adwords"
    }
  ],
  "line": 167,
  "name": "Select Google Search from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "Enter Name of the campaign \"Testing the campaign details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "Select Communications",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "Select Topics",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "Enter Bid Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "Uncheck Default Tracking checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Click Save button- Google Search Campaign Form",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 174,
      "value": "#    And Click Next button"
    },
    {
      "line": 176,
      "value": "# Budget page for Facebook"
    }
  ],
  "line": 177,
  "name": "Select Facebook from the dropdown to add campaign details",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "Enter Name for Facebook \"Testing Facebook Campaign Details\"",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "Select Communications for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "Select the OS",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Select Publisher Platforms- Budget",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Select Platform Placement",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Enter Bid Amount- Facebook budget \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "Click Save button- Facebook budget",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "User should be on Goals page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 188,
      "value": "# Goals page for Adwords"
    }
  ],
  "line": 189,
  "name": "Click Google Search accordion",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "Enter Cost per Click \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "Enter Cost per Lead \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Enter Total Leads \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "Enter Lead Velocity \"100\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 194,
      "value": "#    And Click Next button"
    },
    {
      "line": 195,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 197,
      "value": "# Goals page for Facebook"
    }
  ],
  "line": 198,
  "name": "Click Facebook Lead Gen accordion",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "Enter Cost per Click for Facebook \"100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "Enter Cost per Lead for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "Enter Total Leads for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Enter Lead Velocity for Facebook \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "User should be on Review page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 207,
      "value": "# Review page for Adwords"
    }
  ],
  "line": 208,
  "name": "Click Google Display accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 209,
  "name": "Click Generate Campaigns",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "Click Facebook Conversion accordion for Review",
  "keyword": "When "
});
formatter.step({
  "line": 212,
  "name": "Click Generate Campaigns for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "Click the Confirm button on an alert popup",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "Refresh the page to change the status",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 216,
      "value": "# Fetching campaigns for Adwords"
    }
  ],
  "line": 217,
  "name": "Click menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "Select Reverse syncing for synced campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "User should be on Reverse syncing page",
  "keyword": "Then "
});
formatter.step({
  "line": 220,
  "name": "Click Fetch for New campaigns",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "Select campaigns to save them",
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "Existing Campaigns accordion should get generated",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "Click Fetch for Existing campaigns",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 225,
      "value": "# Fetching campaigns for Facebook"
    }
  ],
  "line": 226,
  "name": "Click Fetch for New Campaigns of Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "Select campaigns to save them for Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 228,
  "name": "Existing Campaigns accordion should get generated for Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "Click Fetch for Existing campaigns for Facebook",
  "keyword": "And "
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnStartPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing the plan for reverse syncing with synced campaigns",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForLinkedIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickLinkedIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInCampaignTypes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.chooseLinkedInAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnProductPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectPropertyTypes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.selectPropertyAdjectives()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.userShouldBeOnCreativePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickCreativeGroupsAccordion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickGoogleDisplayAccordionToCreateACreativeGroup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.selectResponsiveAdFromTheDropdownToAddCreativeGroup()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.selectCreatives()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroupForGoogle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickFacebookDefaultAccordionToCreateCreativeGroup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickOnPlusButtonToCreateANewCreativeGroup()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.selectAsset()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickSubmitButtonNewCreativeGroup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickMarketingPitchAccordion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForAdwords()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.selectMarketingImagesFromTheDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickPlusIconToCreateNewMarketingPitchForFacebook()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.selectCreativeGroupsFromTheDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreativeSteps.clickSaveButtonForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.userShouldBeOnPreciseControlPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInInclude()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectAgeRangeForGoogle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectGenderForGoogle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectParentalStatusForGoogle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.clickFacebookDefaultAccordion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.enterLocationInIncludeForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectTheMinAndMaxAge()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectThePublisherPlatforms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBidOnFromTheDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PreciseTargetingSteps.selectBiddingTypeAndBiddingAmount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.userShouldBeOnTrackingPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.openGoogleSearchAccordion()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadType()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.openFacebookLeadGenAccordion()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.selectTrackingPixel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TrackingSteps.selectDefaultLeadTypeForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.userShouldBeOnBudgetPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectGoogleSearchFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectCommunications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectTopics()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.uncheckDefaultTrackingCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonGoogleSearchCampaignForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectFacebookFromTheDropdownToAddCampaignDetails()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectCommunicationsForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectTheOS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectPublisherPlatformsBudget()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.selectPlatformPlacement()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "BudgetSteps.clickSaveButtonFacebookBudget()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoalSteps.userShouldBeOnGoalsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoalSteps.clickGoogleSearchAccordion()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "GoalSteps.clickFacebookLeadGenAccordion()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.userShouldBeOnReviewPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.clickGoogleDisplayAccordionForReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.clickFacebookConversionAccordionForReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.clickGenerateCampaignsForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.clickTheConfirmButtonOnAnAlertPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReviewSteps.refreshThePageToChangeTheStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AgencyActivateSteps.clickMenuIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectReverseSyncingForSyncedCampaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.userShouldBeOnReverseSyncingPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGenerated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForNewCampaignsOfFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.selectCampaignsToSaveThemForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.existingCampaignsAccordionShouldGetGeneratedForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReverseSyncingSteps.clickFetchForExistingCampaignsForFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 120518,
  "status": "passed"
});
formatter.after({
  "duration": 14921,
  "status": "passed"
});
});