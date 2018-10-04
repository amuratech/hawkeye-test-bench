Feature: Agency onboarding functionality

  Scenario: Sign up with valid credentials
    Given Launch the URL ""
    When Click Sign up as an Agency
    Then Enter Name of the Agency "Testing an agency creation"
    And Enter First Name "Testing"
    And Enter Last Name "Testing"
    And Enter Email "piyush+agency_0@amuratech.com"
    And Enter Phone Number "1234567890"- Agency
    When Click Sign Up button
    Then User should be signed up

  Scenario: Validate the functionality of activating an agency
    Given Launch the URL ""
    When Enter EmailId "piyush+super_admin@amuratech.com"
    And Enter Password "amura123"
    Then Click on Sign In button
    When Click menu icon
    Then Select Agencies
    When Apply filter to search an agency name "Testing an agency creation"
    Then Click Activate icon to activate the client
