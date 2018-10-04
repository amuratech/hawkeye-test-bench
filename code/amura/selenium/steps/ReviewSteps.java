package amura.selenium.steps;

import amura.selenium.pages.ReviewPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 28/5/18.
 */
public class ReviewSteps {
    ReviewPage dp;
    public ReviewSteps(){dp = new ReviewPage();}

    @Then("^Click Review tab$")
    public void clickReviewTab() {
        dp.clickReviewTab();
    }

    @When("^Click Facebook Lead Gen accordion- Review page$")
    public void clickFacebookLeadGenAccordionReviewPage(){
        dp.clickFacebookLeadGenAccordionReviewPage();
    }

    @Then("^Click Generate Campaigns$")
    public void clickGenerateCampaigns() {
        dp.clickGenerateCampaigns();
    }

    @When("^Click Google Search accordion- Review page$")
    public void clickGoogleSearchAccordionReviewPage() {
        dp.clickGoogleSearchAccordionReviewPage();
    }

    @Then("^Click Generate Campaigns- Google Search$")
    public void clickGenerateCampaignsGoogleSearch() {
        dp.clickGenerateCampaignsGoogleSearch();
    }

    @And("^Click Sync button for Facebook Lead Gen$")
    public void clickSyncButtonForFacebookLeadGen() {
        dp.clickSyncButtonForFacebookLeadGen();
    }

    @And("^Click Sync and Go Live button for Facebook Lead Gen$")
    public void clickSyncAndGoLiveButtonForFacebookLeadGen(){
        dp.clickSyncAndGoLiveButtonForFacebookLeadGen();
    }

    @And("^Click Sync button for Google Search$")
    public void clickSyncButtonForGoogleSearch(){
        dp.clickSyncButtonForGoogleSearch();
    }

    @And("^Click Sync and Go Live button for Google Search$")
    public void clickSyncAndGoLiveButtonForGoogleSearch() {
        dp.clickSyncAndGoLiveButtonForGoogleSearch();
    }

    @When("^Click Google Display accordion for Review$")
    public void clickGoogleDisplayAccordionForReview() {
        dp.clickGoogleDisplayAccordionForReview();
    }

    @And("^Refresh the page to change the status$")
    public void refreshThePageToChangeTheStatus() {
        dp.refreshThePageToChangeTheStatus();
    }

    @When("^Click Facebook Conversion accordion for Review$")
    public void clickFacebookConversionAccordionForReview(){
        dp.clickFacebookConversionAccordionForReview();
    }

    @Then("^Click Generate Campaigns for Facebook$")
    public void clickGenerateCampaignsForFacebook() {
        dp.clickGenerateCampaignsForFacebook();
    }

    @Then("^User should be on Review page$")
    public void userShouldBeOnReviewPage() {
        dp.userShouldBeOnReviewPage();
    }
}
