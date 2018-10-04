package amura.selenium.steps;

import amura.selenium.pages.StartPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 14/12/17.
 */
public class StartSteps {
    StartPage dp;

    public StartSteps(){dp = new StartPage();}

    @When("^Click on plus button$")
    public void clickOnPlusButton() {
        dp.clickOnPlusButton();
    }

    @Then("^User should be on start page$")
    public void userShouldBeOnStartPage(){
        dp.userShouldBeOnStartPage();
    }

    @And("^Enter Name \"([^\"]*)\"$")
    public void enterName(String arg0) {
        dp.enterName(arg0);
    }

    @And("^Enter Budget \"([^\"]*)\"$")
    public void enterBudget(String arg0) {
        dp.enterBudget(arg0);
    }

    @And("^Select the Date range$")
    public void selectTheDateRange(){
        dp.selectTheDateRange();
    }


    @When("^Enable advertising account for Adwords$")
    public void enableAdvertisingAccountForAdwords(){
        dp.enableAdvertisingAccountForAdwords();
    }

    @Then("^Select Adwords campaign type$")
    public void selectAdwordsCampaignType() {
        dp.selectAdwordsCampaignType();
    }

    @And("^Choose Adwords account$")
    public void chooseAdwordsAccount(){
        dp.chooseAdwordsAccount();
    }

    @When("^Enable advertising account for Facebook$")
    public void enableAdvertisingAccountForFacebook(){
        dp.enableAdvertisingAccountForFacebook();
    }

    @Then("^Click the Facebook$")
    public void clickTheFacebook() {
        dp.clickTheFacebook();
    }

    @And("^Select Facebook campaign types$")
    public void selectFacebookCampaignTypes(){
        dp.selectFacebookCampaignTypes();
    }

    @And("^Choose Facebook account$")
    public void chooseFacebookAccount() {
        dp.chooseFacebookAccount();
    }

    @Then("^Click Next button$")
    public void clickNextButton() {
        dp.clickNextButton();
    }

    @And("^User should be on product page$")
    public void userShouldBeOnProductPage(){
        dp.userShouldBeOnProductPage();
    }


    @When("^Click 'Add Media Plan' button$")
        public void clickAddMediaPlanButton(){
        dp.clickAddMediaPlanButton();
    }

    @And("^Select the Page$")
    public void selectThePage() {
        dp.selectThePage();
    }

    @When("^Select facebook campaign type as Search$")
    public void selectFacebookCampaignTypeAsSearch() {
        dp.selectFacebookCampaignTypeAsSearch();
    }

    @When("^Enable advertising account for LinkedIn$")
    public void enableAdvertisingAccountForLinkedIn(){
        dp.enableAdvertisingAccountForLinkedIn();
    }

    @Then("^Click LinkedIn$")
    public void clickLinkedIn(){
        dp.clickLinkedIn();
    }

    @And("^Choose LinkedIn Campaign Types$")
    public void chooseLinkedInCampaignTypes() {
        dp.chooseLinkedInCampaignTypes();
    }

    @And("^Choose LinkedIn Account$")
    public void chooseLinkedInAccount() {
        dp.chooseLinkedInAccount();
    }

    @When("^Enter name of the media plan$")
    public void enterNameOfTheMediaPlan() {
        dp.enterNameOfTheMediaPlan();
    }
}
