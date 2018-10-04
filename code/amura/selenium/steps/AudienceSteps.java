package amura.selenium.steps;

import amura.selenium.pages.AudiencePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 18/12/17.
 */
public class AudienceSteps {

    AudiencePage dp;

    public AudienceSteps(){dp = new AudiencePage();}

    @When("^Click Audience page$")
    public void clickAudiencePage() {
        dp.clickAudiencePage();
    }

    @Then("^Select the Locations to be excluded$")
    public void selectTheLocationsToBeExcluded(){
        dp.selectTheLocationsToBeExcluded();
    }

    @And("^Select the Location to be included$")
    public void selectTheLocationToBeIncluded() {
        dp.selectTheLocationToBeIncluded();
    }

    @And("^Select 'Set to Default' for the campaigns$")
    public void selectSetToDefaultForTheCampaigns(){
        dp.selectSetToDefaultForTheCampaigns();
    }

    @When("^Select Exclude$")
    public void selectExclude(){
        dp.selectExclude();
    }

    @Then("^User should be on audience page$")
    public void userShouldBeOnAudiencePage() {
        dp.userShouldBeOnAudiencePage();
    }

    @And("^Confirm the popup alert$")
    public void confirmThePopupAlert() {
        dp.confirmThePopupAlert();
    }


}

