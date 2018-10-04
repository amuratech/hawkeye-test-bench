package amura.selenium.steps;

import amura.selenium.pages.ClientSignUpPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 26/7/18.
 */
public class ClientSignUpSteps {

    ClientSignUpPage dp;

    public ClientSignUpSteps(){dp = new ClientSignUpPage();}

    @When("^Click sign up as a Client$")
    public void clickSignUpAsAClient() {
        dp.clickSignUpAsAClient();
    }

    @Then("^Enter First Name \"([^\"]*)\"- Client$")
    public void enterFirstNameClient(String arg0) {
        dp.enterFirstNameClient(arg0);
    }

    @And("^Enter Last Name \"([^\"]*)\"- Client$")
    public void enterLastNameClient(String arg0) {
        dp.enterLastNameClient(arg0);
    }

    @And("^Enter Email \"([^\"]*)\"-  Client$")
    public void enterEmailClient(String arg0) {
        dp.enterEmailClient(arg0);
    }

    @And("^Enter Business Name \"([^\"]*)\"$")
    public void enterBusinessName(String arg0) {
        dp.enterBusinessName(arg0);
    }

    @And("^Click Sign Up button- Client$")
    public void clickSignUpButtonClient() {
        dp.clickSignUpButtonClient();
    }



}
