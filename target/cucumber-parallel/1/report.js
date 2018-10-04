$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/amura/Desktop/Data /hawkeyeselenium/resources/features/product.feature");
formatter.feature({
  "line": 1,
  "name": "Product page",
  "description": "This page contains all the details related to the project\nIt fetches data from REKB, which contains all the details of Real Estate clients\nNeed to select the project from the suggestions",
  "id": "product-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Validate the product page",
  "description": "",
  "id": "product-page;validate-the-product-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Launch the URL \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter EmailId \"piyush@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter Password \"piyush23\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to login the page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    When Click on Edit link"
    }
  ],
  "line": 14,
  "name": "Click on the media plan name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on the Edit Plan link",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#    Then User should be on start page"
    }
  ],
  "line": 17,
  "name": "Click Next button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#    And Click the Confirm button on an alert popup"
    },
    {
      "line": 19,
      "value": "#    And Click the Cancel button to dismiss the alert"
    }
  ],
  "line": 20,
  "name": "User should be on product page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Select Project by searching with keywords",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#    Then Some fields should be auto filled"
    }
  ],
  "line": 23,
  "name": "Select Project stage",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select the Segment",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Landing page URL \"http://www.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select Configurations",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Property types",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select Property adjectives",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Next button",
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
  "duration": 8535142349,
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
  "duration": 298899880,
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
  "duration": 141191523,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 7203308533,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldBeAbleToLoginThePage()"
});
formatter.result({
  "duration": 4017913495,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickOnTheMediaPlanName()"
});
formatter.result({
  "duration": 5121300731,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.clickOnTheEditPlanLink()"
});
formatter.result({
  "duration": 9099175489,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.clickNextButton()"
});
formatter.result({
  "duration": 5175778131,
  "status": "passed"
});
formatter.match({
  "location": "StartSteps.userShouldBeOnProductPage()"
});
formatter.result({
  "duration": 4013449722,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectBySearchingWithKeywords()"
});
formatter.result({
  "duration": 4258569931,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProjectStage()"
});
formatter.result({
  "duration": 4265826171,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectTheSegment()"
});
formatter.result({
  "duration": 1077696863,
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
  "duration": 395086521,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectConfigurations()"
});
formatter.result({
  "duration": 1238680052,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881),platform\u003dLinux 3.13.0-45-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027amura-Latitude-3460\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-45-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528139 (47ead77cb35ad2..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 3d06b1f89baa5cd0e37e8a36c364ce36\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat amura.selenium.driver.TestDriver.myConfigurations(TestDriver.java:390)\n\tat amura.selenium.pages.ProductPage.selectConfigurations(ProductPage.java:54)\n\tat amura.selenium.steps.ProductSteps.selectConfigurations(ProductSteps.java:50)\n\tat ✽.And Select Configurations(/home/amura/Desktop/Data /hawkeyeselenium/resources/features/product.feature:26)\n",
  "status": "failed"
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
});