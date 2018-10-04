Feature: Reverse Syncing with and without synced campaigns
  This feature file describes about the reverse syncing of the campaigns and the adsets

  Background: User is logged in
    Given Launch the URL ""
    When Enter EmailId "piyush@amuratech.com"
    And Enter Password "piyush23"
    Then Click on Sign In button

  Scenario: Validate reverse syncing when no campaigns are synced
    When Click 'Add Media Plan' button
    Then User should be on start page
    When Enter Name "Testing the reverse syncing for media plans with synced campaigns"
    And Enter Budget "100000"
    And Select the Date range

    # Enable advertising account for Adwords
    When Enable advertising account for Adwords
    Then Select Adwords campaign type
    And Choose Adwords account
#    And Click Next button

    # Enable advertising account for Facebook
    When Enable advertising account for Facebook
    And Click the Facebook
    Then Select Facebook campaign types
    And Choose Facebook account
    And Select the Page
#    And Click Next button

    # Enable advertising account for LinkedIn
    When Enable advertising account for LinkedIn
    Then Click LinkedIn
    And Choose LinkedIn Campaign Types
    And Choose LinkedIn Account
    And Click Next button

    # Fetching campaigns for Adwords
    When Click menu icon
    And Select Reverse syncing
    Then User should be on Reverse syncing page
    And Click Fetch for New campaigns
    When Select campaigns to save them
    Then Existing Campaigns accordion should get generated
    And Click Fetch for Existing campaigns

    # Fetching campaigns for Facebook
    When Click Fetch for New Campaigns of Facebook
    Then Select campaigns to save them for Facebook
    And Existing Campaigns accordion should get generated for Facebook
    And Click Fetch for Existing campaigns for Facebook
    And Sign out

    # Fetching campaigns for LinkedIn
#    When Click Fetch for New Campaigns of LinkedIn

  Scenario: Validate reverse syncing when the campaigns are synced
    When Click 'Add Media Plan' button
    And User should be on start page
    Then Enter Name "Testing the plan for reverse syncing with synced campaigns"
    And Enter Budget "100000"
    And Select the Date range
    When Enable advertising account for Adwords
    Then Select Adwords campaign type
    And Choose Adwords account

    # Enable advertising account for Facebook
    When Enable advertising account for Facebook
    And Click the Facebook
    Then Select Facebook campaign types
    And Choose Facebook account
    And Select the Page

    # Enable advertising account for LinkedIn
    When Enable advertising account for LinkedIn
    Then Click LinkedIn
    And Choose LinkedIn Campaign Types
    And Choose LinkedIn Account
    When Click Next button
    Then User should be on product page

    # Project page
    When Select Project by searching with keywords
    And Enter Developer Advertising Name "Testing"
    And Select Project stage
    And Select the Segment
    And Enter Landing page URL "http://www.google.com"
    Then Select Configurations
    When Select Property types
    And Select Property adjectives
    Then Click Next button
    And User should be on creative page

    # Creative group for Adwords responsive ad
    When Click Creative Groups accordion
    And Click Google Display accordion to create a creative group
    And Select Responsive Ad from the dropdown to add creative group
    Then Enter Creative group name "Testing creative group for Google Adwords with Responsive Ad"
    And Select Creatives
    And Click Submit button- New creative group for Google

    # Creative group for Facebook
    When Click Facebook Default accordion to create a creative group
    And Click on plus button to create a new creative group
    Then Enter Creative group name for Facebook "Testing creative group form for the Facebook"
    And Enter Headline "Testing headline"
    And Enter Description "Testing description"
    When Select Asset
    Then Click Submit button- New creative group

    # Marketing pitch for Adwords
    When Click Marketing pitch accordion
    And Click plus icon to create new marketing pitch for Adwords
    Then Enter Communication name "Testing for adwords search"
    And Enter Description "Testing for the adwords search description"
    When Select Marketing Images from the dropdown
    Then Click Save button
#    And Click Next button

    # Marketing pitch for Facebook
    When Click plus icon to create new marketing pitch for Facebook
    Then Enter Communication name for facebook "Testing Facebook Marketing Pitch"
    And Enter Ad's description "Testing ad description for the facebook default campaign"
    And Select Creative Groups from the dropdown
    And Click Save button for Facebook
    When Click Next button
    Then User should be on precise control page

    # Precise control page
    And Enter Location in Include
    And Select Age Range for Google
    And Select Gender for Google
    And Select Parental Status for Google
#    And Click Next button

    # Precise control for Facebook
    When Click Facebook Default accordion
    Then Enter Location in Include for Facebook
    And Select the Min and Max Age
    And Select the Publisher Platforms
    And Select Bid On from the dropdown
    And Select Bidding Type and Bidding Amount
    When Click Next button
    Then User should be on Tracking page

    # Tracking page for Adwords
    When Open Google Search accordion
    And Enter URL tagging specs  "utm_source="
    And Enter Phone Number "1234567890"
    And Select Default lead type
#    And Click Next button
#    And Click the Confirm button on an alert popup

    # Tracking page for Facebook
    When Open Facebook Lead Gen accordion
    Then Enter URL tagging specs for Facebook "utm_source="
    And Enter Phone Number for Facebook "1234567890"
    And Select Tracking Pixel
    And Select Default lead type for Facebook
    When Click Next button
    Then Click the Confirm button on an alert popup
    And User should be on Budget page

    # Budget page for Adwords
    When Select Google Search from the dropdown to add campaign details
    Then Enter Name of the campaign "Testing the campaign details"
    And Select Communications
    And Select Topics
    And Enter Bid Amount "100"
    And Uncheck Default Tracking checkbox
    And Click Save button- Google Search Campaign Form
#    And Click Next button

    # Budget page for Facebook
    When Select Facebook from the dropdown to add campaign details
    Then Enter Name for Facebook "Testing Facebook Campaign Details"
    And Select Communications for Facebook
    And Select the OS
    And Select Publisher Platforms- Budget
    And Select Platform Placement
    And Enter Bid Amount- Facebook budget "100"
    And Click Save button- Facebook budget
    When Click Next button
    Then User should be on Goals page

    # Goals page for Adwords
    When Click Google Search accordion
    Then Enter Cost per Click "100"
    And Enter Cost per Lead "100"
    And Enter Total Leads "100"
    And Enter Lead Velocity "100"
#    And Click Next button
#    And Click the Confirm button on an alert popup

    # Goals page for Facebook
    When Click Facebook Lead Gen accordion
    Then Enter Cost per Click for Facebook "100"
    And Enter Cost per Lead for Facebook "100"
    And Enter Total Leads for Facebook "100"
    And Enter Lead Velocity for Facebook "100"
    And Click Next button
    When Click the Confirm button on an alert popup
    Then User should be on Review page

    # Review page for Adwords
    When Click Google Display accordion for Review
    Then Click Generate Campaigns
    And Click the Confirm button on an alert popup
    When Click Facebook Conversion accordion for Review
    And Click Generate Campaigns for Facebook
    Then Click the Confirm button on an alert popup
    And Refresh the page to change the status

    # Fetching campaigns for Adwords
    When Click menu icon
    And Select Reverse syncing for synced campaigns
    Then User should be on Reverse syncing page
    And Click Fetch for New campaigns
    When Select campaigns to save them
    Then Existing Campaigns accordion should get generated
    And Click Fetch for Existing campaigns

    # Fetching campaigns for Facebook
    When Click Fetch for New Campaigns of Facebook
    Then Select campaigns to save them for Facebook
    And Existing Campaigns accordion should get generated for Facebook
    And Click Fetch for Existing campaigns for Facebook

    # Fetching campaigns for LinkedIn
#    When Click Fetch for New Campaigns of LinkedIn

