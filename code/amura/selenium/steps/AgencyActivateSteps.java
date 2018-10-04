package amura.selenium.steps;

import amura.selenium.pages.AgencyActivatePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 9/8/18.
 */
public class AgencyActivateSteps {

    AgencyActivatePage dp;

    public AgencyActivateSteps(){dp = new AgencyActivatePage();}

    @When("^Click menu icon$")
    public void clickMenuIcon() {
        dp.clickMenuIcon();
    }

    @Then("^Select Agencies$")
    public void selectAgencies() {
        dp.selectAgencies();
    }

    @And("^Click Activate icon to activate the client$")
    public void clickActivateIconToActivateTheClient() {
        dp.clickActivateIconToActivateTheClient();
    }

    @When("^Apply filter to search an agency name \"([^\"]*)\"$")
    public void applyFilterToSearchAnAgencyName(String arg0){
        dp.applyFilterToSearchAnAgencyName(arg0);
    }

//    @And("^Confirm an account$")
//    public void confirmAnAccount(){
//        dp.confirmAnAccount();
//    }
}
