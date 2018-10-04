Feature: Creative Page feature
  Here, need to add creative groups and marketing pitch accordingly

  Scenario: Validate 'create new creative' feature of the page for Google with Responsive Ad
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Product tab
#    Then Click the Cancel button to dismiss the alert
    And Click Next button
    And Click Creative Groups accordion
    When Click Google Display accordion to create a creative group
    And Select Responsive Ad from the dropdown to add creative group
    Then Enter Creative group name "Testing creative group for Google Adwords with Responsive Ad"
#    And Select Creatives
    And Upload Creatives
    And Click Submit button- New creative group for Google

  Scenario: Validate the creatives for Google with Image Ad
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Product tab
#    Then Click the Cancel button to dismiss the alert
    And Click Next button
    And Click Creative Groups accordion
    When Click Google Display accordion to create a creative group
    And Select Image Ad from the dropdown to add creative group
    Then Enter Creative group name for Image Ad "Testing creative group for Google Adwords"
    And Select Creatives
    And Upload Creatives
    And Click Submit button- New creative group for Google

  Scenario: Validate the creatives for Facebook
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Product tab
#    Then Click the Cancel button to dismiss the alert
    And Click Next button
    And Click Creative Groups accordion
    Then Click Facebook Default accordion to create a creative group
    And Click on plus button to create a new creative group
    Then Enter Creative group name for Facebook "Testing creative group for facebook"
    And Enter Headline "Testing headline"
    And Enter Description "Testing description"
    When Select Asset
    Then Click Submit button- New creative group

#  -------For uploading more assets----------
#    And Upload Asset
#    When Click 'Add Creative' button
#    Then Enter Headline "Testing second headline"
#    And Enter Description "Testing second description"
#    And Select another Assert
#    Then Click Submit button- New creative group
#    And Click Next button

  Scenario: Validate create new marketing pitch for Google
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Product tab
    Then Click the Cancel button to dismiss the alert
    And Click Next button
    When Click Marketing pitch accordion
    When Click plus icon to create new marketing pitch for Adwords
    Then Enter Communication name "Testing for adwords search"
#    And Enter Display URL path 1 "-testing"
    And Enter Description "Testing for the adwords search description"
    When Select Marketing Images from the dropdown
    Then Click Save button

  Scenario: Validate the marketing pitch for Facebook
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Product tab
    Then Click the Cancel button to dismiss the alert
    And Click Next button
    When Click Marketing pitch accordion
    And Click plus icon to create new marketing pitch for Facebook
    Then Enter Communication name for facebook "Testing"
    And Enter Ad's description "Testing ad description for the facebook default campaign"
    And Select Creative Groups from the dropdown
    And Click Save button for Facebook


