Feature: Client sign up functionality

  Scenario: Validate the functionality of client sign up
    Given Launch the URL ""
    When Click sign up as a Client
    Then Enter First Name "Testing"- Client
    And Enter Last Name "Testing"- Client
    And Enter Email "piyush+testing@amuratech.com"-  Client
    And Enter Business Name "Testing business name"
    And Click Sign Up button- Client
