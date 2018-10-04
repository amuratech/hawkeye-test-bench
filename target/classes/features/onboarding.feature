Feature: Grade campaign functionality

  Scenario: Validate 'Authorize with Google'
    Given Launch the URL ""
    When Click Authorize with Google
    Then Enter Email "coepmail@gmail.com"- Gmail
    And Click Next
    When Enter your Password "coepmail123"
    Then Click Next button after entering password

   Scenario: Validate the 'Campaign grading'
     When Select Ad account for campaign grading
     Then Click Check Campaign Grader button
     When Select campaign for the grading
     Then Click Grade Campaign button
     And Click Keyword Analysis
     And Click Ad Analysis
     And Click Extension
     And Click Setup Analysis
     And Click Reach, Delivery and Tracking
