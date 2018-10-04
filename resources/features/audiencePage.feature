Feature: Audience page functionality
  Here, need to set the target audience
  Locations and Devices which have to be taken onto



  Scenario: Validate the Audience Page
    Given Launch the URL ""
    When User enter EmailId "piyush@amuratech.com"
    And Enter Password "amura@123"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on Edit link
    Then User should be on start page
    When Click Audience page
    Then User should be on audience page
    And Select the Location to be included
    When Select Exclude
    Then Select the Locations to be excluded
    And Select 'Set to Default' for the campaigns
    Then Click Next button
    And Confirm the popup alert