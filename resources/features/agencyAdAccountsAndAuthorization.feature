Feature: Ad Accounts and Account Authorization functionality

  Scenario: Validate the functionality of authorizing a Google Account
    Given Launch the URL ""
    When Enter EmailId "piyush+agency_0@amuratech.com"
    And Enter Password "piyush23@#"
    And Click on Sign In button
    Then Click menu icon
    And Click Connected Accounts
    When Click Connect button to connect to the Google account
    Then Click Authorize button to authorize Google account
    And Enter Email "coepmail@gmail.com"- Gmail
    When Click Next
    And Enter your Password "coepmail123"
    Then Click Next button after entering password

  Scenario: Validate the functionality of authorizing a Facebook Account
#    Given Launch the URL ""
#    When Enter EmailId "piyush+agency0@amuratech.com"
#    And Enter Password "piyush23@#"
#    And Click on Sign In button
#    Then Click menu icon
#    And Click Connected Accounts
    When Click Connect button to connect to the Facebook account
    Then Click Authorize button to authorize an account
    When Enter Email address "sanket.r@amuratech.com"- Facebook
    And Enter Password "thegreatthanos"- Facebook
    Then Click Login button

   Scenario: Validate the functionality of adding an Ad Account for Facebook
     Given Launch the URL ""
     When Enter EmailId "piyush+agency0@amuratech.com"
     And Enter Password "piyush23@#"
     And Click on Sign In button
     Then Click menu icon
     And Click Edit Agency
     When Enter Facebook Business Id "123"
     Then Click Submit button- Edit Agency
     And Click menu icon
     When Click Ad Accounts
     Then Select Facebook from the dropdown
     And Click New Account button
     When Select Client Ad Account
     Then Click Add button



