package amura.selenium.steps;

import amura.selenium.pages.AgencySignUpPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 26/7/18.
 */
public class AgencySignUpSteps {

    AgencySignUpPage dp;

    public AgencySignUpSteps(){dp = new AgencySignUpPage();}

    @When("^Click Sign up as an Agency$")
    public void clickSignUpAsAnAgency() {
        dp.clickSignUpAsAnAgency();
    }

    @Then("^Enter Name of the Agency \"([^\"]*)\"$")
    public void enterNameOfTheAgency(String arg0){
        dp.enterNameOfTheAgency(arg0);
    }

    @And("^Enter First Name \"([^\"]*)\"$")
    public void enterFirstName(String arg0) {
        dp.enterFirstName(arg0);
    }

    @And("^Enter Last Name \"([^\"]*)\"$")
    public void enterLastName(String arg0) {
        dp.enterLastName(arg0);
    }

    @And("^Enter Email \"([^\"]*)\"$")
    public void enterEmail(String arg0) {
        dp.enterEmail(arg0);
    }

    @And("^Enter Phone Number \"([^\"]*)\"- Agency$")
    public void enterPhoneNumberAgency(String arg0) {
        dp.enterPhoneNumberAgency(arg0);
    }

    @When("^Click Sign Up button$")
    public void clickSignUpButton() {
        dp.clickSignUpButton();
    }

    @Then("^User should be signed up$")
    public void userShouldBeSignedUp() {
        dp.userShouldBeSignedUp();
    }


    @Given("^Navigate to the URL \"([^\"]*)\"$")
    public void navigateToTheURL(String arg0) {
        dp.navigateToTheURL(arg0);
    }


}
