$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/amura/Desktop/Data /hawkeyeselenium/resources/features/start.feature");
formatter.feature({
  "line": 1,
  "name": "Add new Media Plan",
  "description": "Need to add new media plan for the selected client, to set up the campaign",
  "id": "add-new-media-plan",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Add new media plan with Start Page of the Media Plan wizard",
  "description": "",
  "id": "add-new-media-plan;add-new-media-plan-with-start-page-of-the-media-plan-wizard",
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
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should be loged in",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#    When Click on plus button"
    }
  ],
  "line": 12,
  "name": "Click \u0027Add Media Plan\u0027 button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    Then User should be on start page"
    }
  ],
  "line": 14,
  "name": "Enter Name \"Testing media plan- get started page\"",
  "keyword": "And "
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
  "line": 20,
  "name": "Enable advertising account for Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click the Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Select Facebook campaign types",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose Facebook account",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select the Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click Next button",
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
  "duration": 8740043816,
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
  "duration": 268669139,
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
  "duration": 148941897,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 7137851633,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldBeLogedIn()"
});
formatter.result({
  "duration": 4016051387,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickAddMediaPlanButton()"
});
formatter.result({
  "duration": 10148970250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing media plan- get started page",
      "offset": 12
    }
  ],
  "location": "StartSteps.enterName(String)"
});
formatter.result({
  "duration": 347268259,
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
  "duration": 128482247,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectTheDateRange()"
});
formatter.result({
  "duration": 1461575937,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForAdwords()"
});
formatter.result({
  "duration": 5196902472,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectAdwordsCampaignType()"
});
formatter.result({
  "duration": 1108783760,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseAdwordsAccount()"
});
formatter.result({
  "duration": 4182120580,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.enableAdvertisingAccountForFacebook()"
});
formatter.result({
  "duration": 5133053175,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickTheFacebook()"
});
formatter.result({
  "duration": 5109318714,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectFacebookCampaignTypes()"
});
formatter.result({
  "duration": 88359089,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.chooseFacebookAccount()"
});
formatter.result({
  "duration": 10181606618,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.selectThePage()"
});
formatter.result({
  "duration": 25527468,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881),platform\u003dLinux 3.13.0-45-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027amura-Latitude-3460\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-45-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528139 (47ead77cb35ad2..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: fdd1b33890b97fca216689b86ab64e48\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(@id,\u0027_facebook_page-\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat amura.selenium.driver.TestDriver.myFacebookPage(TestDriver.java:941)\n\tat amura.selenium.pages.StartPage.selectThePage(StartPage.java:89)\n\tat amura.selenium.steps.StartSteps.selectThePage(StartSteps.java:95)\n\tat ✽.And Select the Page(/home/amura/Desktop/Data /hawkeyeselenium/resources/features/start.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
});