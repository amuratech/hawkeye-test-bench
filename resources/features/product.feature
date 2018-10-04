Feature: Product page
  This page contains all the details related to the project
  It fetches data from REKB, which contains all the details of Real Estate clients
  Need to select the project from the suggestions

  @product
  Scenario: Validate the product page
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    And Click on Sign In button
    Then User should be able to login the page
    When Click on the media plan name
    Then Click on the Edit Plan link
    When Click Next button
    Then User should be on product page
    When Select Project by searching with keywords
#    Then Some fields should be auto filled
    And Select Project stage
    And Select the Segment
    And Enter Landing page URL "http://www.google.com"
    And Select Configurations
    And Select Property types
    And Select Property adjectives
    Then Click Next button

