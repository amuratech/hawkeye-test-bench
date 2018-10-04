package amura.selenium.steps;

import amura.selenium.pages.ReverseSyncingPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 3/9/18.
 */
public class ReverseSyncingSteps {

    ReverseSyncingPage dp;

    public ReverseSyncingSteps(){dp = new ReverseSyncingPage();}

    @Then("^Select Reverse syncing$")
    public void selectReverseSyncing(){
        dp.selectReverseSyncing();
    }

    @And("^Click Fetch for New campaigns$")
    public void clickFetchForNewCampaigns() {
        dp.clickFetchForNewCampaigns();
    }

    @And("^User should be on Reverse syncing page$")
    public void userShouldBeOnReverseSyncingPage() {
        dp.userShouldBeOnReverseSyncingPage();
    }

    @When("^Select campaigns to save them$")
    public void selectCampaignsToSaveThem() {
        dp.selectCampaignsToSaveThem();
    }

    @Then("^Existing Campaigns accordion should get generated$")
    public void existingCampaignsAccordionShouldGetGenerated() {
        dp.existingCampaignsAccordionShouldGetGenerated();
    }

    @And("^Click Fetch for Existing campaigns$")
    public void clickFetchForExistingCampaigns() {
        dp.clickFetchForExistingCampaigns();
    }

    @When("^Click Fetch for New Campaigns of Facebook$")
    public void clickFetchForNewCampaignsOfFacebook() {
        dp.clickFetchForNewCampaignsOfFacebook();
    }

    @Then("^Select campaigns to save them for Facebook$")
    public void selectCampaignsToSaveThemForFacebook(){
        dp.selectCampaignsToSaveThemForFacebook();
    }

    @When("^Click Fetch for New Campaigns of LinkedIn$")
    public void clickFetchForNewCampaignsOfLinkedIn() {
        dp.clickFetchForNewCampaignsOfLinkedIn();
    }

    @And("^Existing Campaigns accordion should get generated for Facebook$")
    public void existingCampaignsAccordionShouldGetGeneratedForFacebook() {
        dp.existingCampaignsAccordionShouldGetGeneratedForFacebook();
    }

    @And("^Click Fetch for Existing campaigns for Facebook$")
    public void clickFetchForExistingCampaignsForFacebook() {
        dp.clickFetchForExistingCampaignsForFacebook();
    }

    @And("^Select Reverse syncing for synced campaigns$")
    public void selectReverseSyncingForSyncedCampaigns() {
        dp.selectReverseSyncingForSyncedCampaigns();
    }
}
