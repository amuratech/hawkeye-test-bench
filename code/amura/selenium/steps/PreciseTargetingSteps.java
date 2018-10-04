package amura.selenium.steps;

import amura.selenium.pages.PreciseTargetingPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 19/12/17.
 */
public class PreciseTargetingSteps {

    PreciseTargetingPage dp;

    public PreciseTargetingSteps(){dp = new PreciseTargetingPage();}

    @When("^Click Precise Targeting tab$")
    public void clickPreciseTargetingTab() {
        dp.clickPreciseTargetingTab();
    }

    @Then("^User should be on precise control page$")
    public void userShouldBeOnPreciseControlPage() {
        dp.userShouldBeOnPreciseControlPage();
    }

    @And("^Enter Interest for the campaign$")
    public void enterInterestForTheCampaign() {
        dp.enterInterestForTheCampaign();
    }

    @And("^Select the Gender$")
    public void selectTheGender() {
        dp.selectTheGender();
    }

    @And("^Select the Min and Max Age$")
    public void selectTheMinAndMaxAge() {
        dp.selectTheMinAndMaxAge();
    }

    @And("^Select the Devices$")
    public void selectTheDevices() {
        dp.selectTheDevices();
    }

    @And("^Select the Publisher Platforms")
    public void selectThePublisherPlatforms(){
        dp.selectThePublisherPlatforms();
    }

    @And("^Select the Placement$")
    public void selectThePlacement() {
        dp.selectThePlacement();
    }

//    @And("^Select the Bid On, Bidding type and Bidding Amount$")
//    public void selectTheBidOnBiddingTypeAndBiddingAmount() {
//        dp.selectTheBidOnBiddingTypeAndBiddingAmount();
//    }


    @And("^Click Google Default accordion$")
    public void clickGoogleDefaultAccordion() {
        dp.clickGoogleDefaultAccordion();
    }

    @Then("^Enter Location in Include$")
    public void enterLocationInInclude() {
        dp.enterLocationInInclude();
    }

    @And("^Enter Location in Exclude$")
    public void enterLocationInExclude() {
        dp.enterLocationInExclude();
    }

    @When("^Click Facebook Default accordion$")
    public void clickFacebookDefaultAccordion(){
        dp.clickFacebookDefaultAccordion();
    }

    @Then("^Enter Location in Include for Facebook$")
    public void enterLocationInIncludeForFacebook(){
        dp.enterLocationInIncludeForFacebook();
    }

    @And("^Select Bid On from the dropdown$")
    public void selectBidOnFromTheDropdown(){
        dp.selectBidOnFromTheDropdown();
    }

    @And("^Select Bidding Type and Bidding Amount$")
    public void selectBiddingTypeAndBiddingAmount() {
        dp.selectBiddingTypeAndBiddingAmount();
    }


    @And("^Select Age Range for Google$")
    public void selectAgeRangeForGoogle() {
        dp.selectAgeRangeForGoogle();
    }

    @And("^Select Gender for Google$")
    public void selectGenderForGoogle() {
        dp.selectGenderForGoogle();
    }

    @And("^Select Parental Status for Google$")
    public void selectParentalStatusForGoogle() {
        dp.selectParentalStatusForGoogle();
    }

    @And("^Close the Google Adwords accordion$")
    public void closeTheGoogleAdwordsAccordion() {
        dp.closeTheGoogleAdwordsAccordion();
    }
}
