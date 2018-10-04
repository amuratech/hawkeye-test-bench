package amura.selenium.steps;

import amura.selenium.pages.GradeCampaignPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 3/9/18.
 */
public class GradeCampaignSteps {

    GradeCampaignPage dp;

    public GradeCampaignSteps(){dp = new GradeCampaignPage();}

    @When("^Click Authorize with Google$")
    public void clickAuthorizeWithGoogle() {
        dp.clickAuthorizeWithGoogle();
    }

    @Then("^Click Check Campaign Grader button$")
    public void clickCheckCampaignGraderButton() {
        dp.clickCheckCampaignGraderButton();
    }

    @When("^Select campaign for the grading$")
    public void selectCampaignForTheGrading(){
        dp.selectCampaignForTheGrading();
    }

    @Then("^Click Grade Campaign button$")
    public void clickGradeCampaignButton() {
        dp.clickGradeCampaignButton();
    }

    @When("^Select Ad account for campaign grading$")
    public void selectAdAccountForCampaignGrading(){
        dp.selectAdAccountForCampaignGrading();}

    @And("^Click Keyword Analysis$")
    public void clickKeywordAnalysis() {
        dp.clickKeywordAnalysis();
    }

    @And("^Click Ad Analysis$")
    public void clickAdAnalysis() {
        dp.clickAdAnalysis();
    }

    @And("^Click Extension$")
    public void clickExtension() {
        dp.clickExtension();
    }

    @And("^Click Setup Analysis$")
    public void clickSetupAnalysis() {
        dp.clickSetupAnalysis();
    }

    @And("^Click Reach, Delivery and Tracking$")
    public void clickReachDeliveryAndTracking() {
        dp.clickReachDeliveryAndTracking();
    }
}
