package amura.selenium.steps;

import amura.selenium.pages.ConfirmAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 10/8/18.
 */
public class ConfirmAccountSteps {

    ConfirmAccountPage dp;

    public ConfirmAccountSteps(){dp = new ConfirmAccountPage();}

    @When("^Enter Email \"([^\"]*)\"- Gmail$")
    public void enterEmailGmail(String arg0) {
        dp.enterEmailGmail(arg0);
    }

    @And("^Click Next$")
    public void clickNext() {
        dp.clickNext();
    }

    @Then("^Enter your Password \"([^\"]*)\"$")
    public void enterYourPassword(String arg0){
        dp.enterYourPassword(arg0);
    }

    @When("^Open an email$")
    public void openAnEmail() {
        dp.openAnEmail();
    }

    @And("^Click Next button after entering password$")
    public void clickNextButtonAfterEnteringPassword() {
        dp.clickNextButtonAfterEnteringPassword();
    }

    @When("^Click Gmail link$")
    public void clickGmailLink(){
        dp.clickGmailLink();
    }

    @And("^Click Sign In$")
    public void clickSignIn() {
        dp.clickSignIn();

    }

}
