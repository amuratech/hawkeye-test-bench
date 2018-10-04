Feature: Precise control page
  Here, need to fill the data about Demographics, Devices, Platforms, etc. for all the campaigns

  Scenario: Validate the precise control page
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click on Creative page
#    Then User should be on precise control page
#    And Click the Cancel button to dismiss the alert
    Then Click Next button
    And Enter Location in Include
#    And Enter Location in Exclude
    And Select Age Range for Google
    And Select Gender for Google
    And Select Parental Status for Google
#    And Close the Google Adwords accordion
    And Click Next button

#    ---------For Facebook--------
   Scenario: Validate the functionality of page for Facebook
     Given Launch the URL ""
     When Enter EmailId "piyush@amuratech.com"
     And Enter Password "piyush23"
     And Click on Sign In button
     Then User should be able to login the page
     When Click on the media plan name
     Then Click on the Edit Plan link
     When Click on Creative page
     And Click the Cancel button to dismiss the alert
     Then Click Next button
     And Close the Google Adwords accordion
    When Click Facebook Default accordion
    Then Enter Location in Include for Facebook
#    And Select the Gender
    And Select the Min and Max Age
    And Select the Publisher Platforms
#    And Select the Devices
#    And Select the Placement
    And Select Bid On from the dropdown
    And Select Bidding Type and Bidding Amount
#    And Enter Interest for the campaign
