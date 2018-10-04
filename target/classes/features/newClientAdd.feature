Feature: New Client Add functionality

  Scenario: Validate the functionality of adding new client
    Given Launch the URL ""
    When Enter EmailId "piyush+agency_admin@amuratech.com"
    And Enter Password "amura123"
    Then Click on Sign In button
    When Click icon to add New Client
    Then Enter Client Name "Testing Client"
    And Enter Description "Testing Description"- New Client
    And Select Time Zone
    And Select Ad Account
    And Select User
    And Enter Credit Amount "10000"
    When Click Save button- New Client
    Then Client should be created

