Feature: Start page
  Need to add new media plan for the selected client, to set up the campaign

  Scenario: Validate the functionality of enabling an Adwords Account
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    Then Click on Sign In button
    When Click 'Add Media Plan' button
    And User should be on start page
    Then Enter Name "Testing the start page of the media plan"
    And Enter Budget "100000"
    And Select the Date range
    When Enable advertising account for Adwords
    Then Select Adwords campaign type
    And Choose Adwords account
    And Click Next button

  Scenario: Validate the functionality of enabling a Facebook Account
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    Then Click on Sign In button
    And User should be logged in
    When Click 'Add Media Plan' button
    Then Enable advertising account for Facebook
    And Click the Facebook
    When Select Facebook campaign types
    Then Choose Facebook account
    And Select the Page
    And Click Next button

  Scenario: Validate the functionality of enabling AdWords account for Search
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    Then Click on Sign In button
    And User should be logged in
    When Click 'Add Media Plan' button
    Then Enable advertising account for Facebook
    And Click the Facebook
    When Select facebook campaign type as Search
    Then Choose Facebook account
    And Select the Page
    And Click Next button