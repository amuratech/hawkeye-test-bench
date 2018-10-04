Feature: Login feature
  Here, need to verify the functionality of login with valid and invalid credentials

  Scenario Outline: Login with valid and invalid credentials
    Given Launch the URL ""
    When User enter "<EmailId>" and "<Password>"
    And Click on Sign In button
    Then User should be able to login the page

    Examples:
      | EmailId | Password |
      | piyush  | amura@123 |
      | piyush@amuratech.com  | amura123  |
      | piyush                | amura123  |
      | piyush@amuratech.com  | amura@123 |

   Scenario: Validate 'Select client to login for'
     Given Launch the URL ""
#     When User enter "piyush@amuratech.com" and "amura@123"
     When User enter EmailId "piyush@amuratech.com"
     And Enter Password "amura@123"
     And Click on Sign In button
     Then User should be able to login the page
     And Click on Media Plan
#     When I select the client to login
#     And Click Submit button
#     Then User should be loged in


