Feature: Validate the functionality of Review page

  Scenario:  Validate Generate Campaigns for Google Search
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    And Click on the Edit Plan link
    When Click Goals tab
    And Click Next button
    When Click Google Display accordion for Review
    Then Click Generate Campaigns
    And Click the Confirm button on an alert popup
    When Click Facebook Conversion accordion for Review
    And Click Generate Campaigns for Facebook
    Then Click the Confirm button on an alert popup
    And Refresh the page to change the status
#    Then Click Sync and Go Live button for Facebook Lead Gen
#    And Click Sync button for Facebook Lead Gen
#    Then Click the Confirm button on an alert popup
#    When Click Google Search accordion- Review page
##    And Click Generate Campaigns- Google Search
##    And Click Sync button for Google Search
#    And Click Generate Campaigns- Google Search
#    Then Click the Confirm button on an alert popup
#




