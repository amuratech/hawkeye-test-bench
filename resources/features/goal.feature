Feature: Validate the functionality of Goal page

  Scenario: Validate goals for Google
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    And Click on the Edit Plan link
    When Click Budget tab
#    And Click the Cancel button to dismiss the alert
    And Click Next button
    Then Click Google Search accordion
    And Enter Cost per Click "100"
    And Enter Cost per Lead "100"
    And Enter Total Leads "100"
    And Enter Lead Velocity "100"
    And Click Next button

  Scenario: Validate goals for Facebook
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    And Click on the Edit Plan link
    When Click Budget tab
#    And Click the Cancel button to dismiss the alert
    And Click Next button
    When Click Facebook Lead Gen accordion
    Then Enter Cost per Click for Facebook "100"
    And Enter Cost per Lead for Facebook "100"
    And Enter Total Leads for Facebook "100"
    And Enter Lead Velocity for Facebook "100"
    And Click Next button





