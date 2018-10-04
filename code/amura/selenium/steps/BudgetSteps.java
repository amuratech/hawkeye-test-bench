package amura.selenium.steps;

import amura.selenium.pages.BudgetPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 25/5/18.
 */
public class BudgetSteps {
    BudgetPage dp;

    public BudgetSteps(){ dp = new BudgetPage();}

    @Then("^Click Budget tab$")
    public void clickBudgetTab(){
        dp.clickBudgetTab();
    }

    @When("^Select Google Search from the dropdown to add campaign details$")
    public void selectGoogleSearchFromTheDropdownToAddCampaignDetails(){
        dp.selectGoogleSearchFromTheDropdownToAddCampaignDetails();
    }

    @And("^Select Categories$")
    public void selectCategories() {
        dp.selectCategories();
    }

    @And("^Select Communications$")
    public void selectCommunications(){
        dp.selectCommunications();
    }

    @And("^Select Remarketing Lists$")
    public void selectRemarketingLists() {
        dp.selectRemarketingLists();
    }

    @And("^Enter Bid Amount \"([^\"]*)\"$")
    public void enterBidAmount(String arg0) {
        dp.enterBidAmount(arg0);
    }

    @Then("^Enter Name of the campaign \"([^\"]*)\"$")
    public void enterNameOfTheCampaign(String arg0){
        dp.enterNameOfTheCampaign(arg0);
    }

    @And("^Uncheck Default Tracking checkbox$")
    public void uncheckDefaultTrackingCheckbox() {
        dp.uncheckDefaultTrackingCheckbox();
    }

    @And("^Click Save button- Google Search Campaign Form$")
    public void clickSaveButtonGoogleSearchCampaignForm() {
        dp.clickSaveButtonGoogleSearchCampaignForm();
    }

    @When("^Select Facebook from the dropdown to add campaign details$")
    public void selectFacebookFromTheDropdownToAddCampaignDetails(){
        dp.selectFacebookFromTheDropdownToAddCampaignDetails();
    }

    @Then("^Enter Name for Facebook \"([^\"]*)\"$")
    public void enterNameForFacebook(String arg0){
        dp.enterNameForFacebook(arg0);
    }

    @And("^Select Communications for Facebook$")
    public void selectCommunicationsForFacebook(){
        dp.selectCommunicationsForFacebook();
    }

    @And("^Select Platform Placement$")
    public void selectPlatformPlacement() {
        dp.selectPlatformPlacement();
    }

    @And("^Click Save button- Facebook budget$")
    public void clickSaveButtonFacebookBudget() {
        dp.clickSaveButtonFacebookBudget();
    }

    @And("^Enter Bid Amount- Facebook budget \"([^\"]*)\"$")
    public void enterBidAmountFacebookBudget(String arg0){
        dp.enterBidAmountFacebookBudget(arg0);
    }

    @And("^Select Lead Ad Form$")
    public void selectLeadAdForm() {
        dp.selectLeadAdForm();
    }

    @And("^Select Custom Audiences$")
    public void selectCustomAudiences() {
        dp.selectCustomAudiences();
    }

    @And("^Select the OS$")
    public void selectTheOS(){
        dp.selectTheOS();
    }

    @And("^Select Publisher Platforms- Budget$")
    public void selectPublisherPlatformsBudget() {
        dp.selectPublisherPlatformsBudget();
    }

    @And("^Select User Interests$")
    public void selectUserInterests() {
        dp.selectUserInterests();
    }

    @And("^Select Topics$")
    public void selectTopics() {
        dp.selectTopics();
    }

    @Then("^User should be on Budget page$")
    public void userShouldBeOnBudgetPage() {
        dp.userShouldBeOnBudgetPage();
    }
}
