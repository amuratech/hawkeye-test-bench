  Feature: Targeting page feature

    Scenario: Validate the functionality of Tracking page
      Given Launch the URL ""
      When Enter EmailId "piyush@amuratech.com"
      And Enter Password "piyush23"
      And Click on Sign In button
      Then User should be able to login the page
      When Click on the media plan name
      Then Click on the Edit Plan link
      When Click Precise Targeting tab
      Then Click the Cancel button to dismiss the alert
      And Click Next button
      When Open Google Search accordion
      And Enter URL tagging specs  "utm_source="
      And Enter Phone Number "1234567890"
      And Select Default lead type
      And Click Next button
      And Click the Confirm button on an alert popup

#      ------Facebook----------
    Scenario: Validate the functionality of page for Facebook
      Given Launch the URL ""
      When Enter EmailId "piyush@amuratech.com"
      And Enter Password "piyush23"
      And Click on Sign In button
      Then User should be able to login the page
      When Click on the media plan name
      Then Click on the Edit Plan link
      When Click Precise Targeting tab
      Then Click the Cancel button to dismiss the alert
      And Click Next button
      When Open Facebook Lead Gen accordion
      Then Enter URL tagging specs for Facebook "utm_source="
      And Enter Phone Number for Facebook "1234567890"
      And Select Tracking Pixel
      And Select Default lead type for Facebook
      And Click Next button
      And Click the Confirm button on an alert popup







