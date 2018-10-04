Feature: Sign up functionality of an Agency

  Scenario: Sign up with valid credentials
    Given Launch the URL ""
    When Click Sign up as an Agency
    Then Enter Name of the Agency "Testing agency sign up"
    And Enter First Name "Testing"
    And Enter Last Name "Testing"
    And Enter Email "piyush+agency_signup@amuratech.com"
    And Enter Phone Number "1234567890"- Agency
    When Click Sign Up button
    Then User should be signed up

