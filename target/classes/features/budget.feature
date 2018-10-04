Feature: Validate Budget page

  Scenario: Validate the functionality of Budget page for Google
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    And Click on the Edit Plan link
    Then Click Tracking tab
#    And Click the Cancel button to dismiss the alert
    And Click Next button
    When Select Google Search from the dropdown to add campaign details
    Then Enter Name of the campaign "Testing the campaign details"
#    And Select Categories
    And Select Communications
#    And Select Remarketing Lists
    And Select Topics
    And Enter Bid Amount "100"
    And Uncheck Default Tracking checkbox
    And Click Save button- Google Search Campaign Form
    And Click Next button



  Scenario: Validate the functionality of Budget page for Facebook
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    And Click on the Edit Plan link
    Then Click Tracking tab
#    And Click the Cancel button to dismiss the alert
    And Click Next button
    When Select Facebook from the dropdown to add campaign details
    Then Enter Name for Facebook "Testing Facebook Campaign Details for the media plan"
    And Select Communications for Facebook
#    And Select Custom Audiences
    And Select the OS
    And Select Publisher Platforms- Budget
    And Select Platform Placement
    And Enter Bid Amount- Facebook budget "100"
#    And Select Lead Ad Form
    And Click Save button- Facebook budget
    And Click Next button



