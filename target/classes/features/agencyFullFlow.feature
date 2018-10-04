Feature: Agency sign up, Ad Accounts, Authorizations, Account Activate and Client add

  Scenario: Validate the functionality of signing up as an agency
    Given Launch the URL ""
    When Click Sign up as an Agency
    Then Enter Name of the Agency "Testing agency"
    And Enter First Name "Testing signup"
    And Enter Last Name "Testing agency"
    And Enter Email "piyush+agency_signup0@amuratech.com"
    And Enter Phone Number "1234567890"- Agency
    When Click Sign Up button
    Then User should be signed up

  Scenario: Validate the functionality of activating an agency
    When Enter EmailId "piyush+super_admin@amuratech.com"
    And Enter Password "amura123"
    Then Click on Sign In button
    When Click menu icon
    Then Select Agencies
    When Apply filter to search an agency name "Testing agency"
    Then Click Activate icon to activate the client

#    Here need to confirm the account and setting up the password before login as an agency

 Scenario: Validate the functionality of authorizing a Google account
    When Click menu icon
    And Click Connected Accounts
    Then Click Connect button to connect to the Google account
    And Click Authorize button to authorize Google account
    And Enter Email "coepmail@gmail.com"- Gmail
    When Click Next
    And Enter your Password "coepmail123"
    Then Click Next button after entering password

  Scenario: Validate the functionality of authorizing a Facebook Account
    When Click Connect button to connect to the Facebook account
    Then Click Authorize button to authorize an account
    When Enter Email address "sanket.r@amuratech.com"- Facebook
    And Enter Password "thegreatthanos"- Facebook
    Then Click Login button

  Scenario: Validate the functionality of adding an Ad account for Facebook
    When Click menu icon
    And Click Edit Agency
    Then Enter Facebook Business Id "123"
    And Click Submit button- Edit Agency
    When Click menu icon
    Then Click Ad Accounts
    And Select Facebook from the dropdown
    And Click New Account button
    When Select Client Ad Account
    Then Click Add button

