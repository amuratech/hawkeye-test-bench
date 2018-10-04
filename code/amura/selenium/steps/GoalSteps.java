package amura.selenium.steps;

import amura.selenium.pages.GoalPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 27/5/18.
 */
public class GoalSteps {
    GoalPage dp;

    public GoalSteps(){dp = new GoalPage();}

    @When("^Click Goals tab$")
    public void clickGoalsTab() {
        dp.clickGoalsTab();
    }

    @Then("^Click Google Search accordion$")
    public void clickGoogleSearchAccordion() {
        dp.clickGoogleSearchAccordion();
    }

    @And("^Enter Cost per Click \"([^\"]*)\"$")
    public void enterCostPerClick(String arg0){
        dp.enterCostPerClick(arg0);
    }

    @And("^Enter Cost per Lead \"([^\"]*)\"$")
    public void enterCostPerLead(String arg0) {
        dp.enterCostPerLead(arg0);
    }

    @And("^Enter Total Leads \"([^\"]*)\"$")
    public void enterTotalLeads(String arg0) {
        dp.enterTotalLeads(arg0);
    }

    @And("^Enter Lead Velocity \"([^\"]*)\"$")
    public void enterLeadVelocity(String arg0) {
        dp.enterLeadVelocity(arg0);
    }

    @When("^Click Facebook Lead Gen accordion$")
    public void clickFacebookLeadGenAccordion(){
        dp.clickFacebookLeadGenAccordion();
    }

    @Then("^Enter Cost per Click for Facebook \"([^\"]*)\"$")
    public void enterCostPerClickForFacebook(String arg0){
        dp.enterCostPerClickForFacebook(arg0);
    }

    @And("^Enter Cost per Lead for Facebook \"([^\"]*)\"$")
    public void enterCostPerLeadForFacebook(String arg0) {
        dp.enterCostPerLeadForFacebook(arg0);
    }

    @And("^Enter Total Leads for Facebook \"([^\"]*)\"$")
    public void enterTotalLeadsForFacebook(String arg0) {
        dp.enterTotalLeadsForFacebook(arg0);
    }

    @And("^Enter Lead Velocity for Facebook \"([^\"]*)\"$")
    public void enterLeadVelocityForFacebook(String arg0){
        dp.enterLeadVelocityForFacebook(arg0);
    }


    @Then("^User should be on Goals page$")
    public void userShouldBeOnGoalsPage() {
        dp.userShouldBeOnGoalsPage();
    }
}
