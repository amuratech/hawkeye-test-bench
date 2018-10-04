package amura.selenium.steps;

import amura.selenium.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 13/12/17.
 */
public class LoginSteps {

    LoginPage dp;

    public LoginSteps(){dp = new LoginPage();}

    @Given("^Launch the URL \"([^\"]*)\"$")
    public void launchTheURL(String arg0){
        dp.launchTheURL(arg0);
    }

    @When("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterAnd(String arg0, String arg1){
        dp.userEnterAnd(arg0, arg1);
    }

    @And("^Click on Sign In button$")
    public void clickOnSignInButton(){
        dp.clickOnSignInButton();
    }

    @Then("^User should be able to login the page$")
    public void userShouldBeAbleToLoginThePage(){
        dp.userShouldBeAbleToLoginThePage();
    }

    @When("^I select the client to login$")
    public void iSelectTheClientToLogin() {
        dp.iSelectTheClientToLogin();
    }

    @And("^Click Submit button$")
    public void clickSubmitButton() {
        dp.clickSubmitButton();
    }

    @Then("^User should be logged in$")
    public void userShouldBeLoggedIn(){
        dp.userShouldBeLoggedIn();
    }

    @When("^Enter EmailId \"([^\"]*)\"$")
    public void enterEmailId(String arg0){
        dp.enterEmailId(arg0);
    }

    @And("^Enter Password \"([^\"]*)\"$")
    public void enterPassword(String arg0) {
        dp.enterPassword(arg0);
    }


    @And("^Click on Media Plan$")
    public void clickOnMediaPlan() {
        dp.clickOnMediaPlan();
    }

    @And("^Sign out$")
    public void signOut(){
        dp.signOut();
    }
}
