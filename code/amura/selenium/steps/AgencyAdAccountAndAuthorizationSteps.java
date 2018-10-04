package amura.selenium.steps;

import amura.selenium.pages.AgencyAccountAndAuthorizationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 10/8/18.
 */
public class AgencyAdAccountAndAuthorizationSteps {

    AgencyAccountAndAuthorizationPage dp;

    public AgencyAdAccountAndAuthorizationSteps(){dp = new AgencyAccountAndAuthorizationPage();}

    @And("^Click Connected Accounts$")
    public void clickConnectedAccounts() {
        dp.clickConnectedAccounts();
    }

    @And("^Click Connect button to connect to the Google account$")
    public void clickConnectButtonToConnectToTheGoogleAccount() {
        dp.clickConnectButtonToConnectToTheGoogleAccount();
    }

    @And("^Click Connect button to connect to the Facebook account$")
    public void clickConnectButtonToConnectToTheFacebookAccount() {
        dp.clickConnectButtonToConnectToTheFacebookAccount();
    }

    @Then("^Click Authorize button to authorize an account$")
    public void clickAuthorizeButtonToAuthorizeAnAccount() {
        dp.clickAuthorizeButtonToAuthorizeAnAccount();
    }

    @Then("^Click Authorize button to authorize Google account$")
    public void clickAuthorizeButtonToAuthorizeGoogleAccount() {
        dp.clickAuthorizeButtonToAuthorizeGoogleAccount();
    }

    @When("^Enter Email address \"([^\"]*)\"- Facebook$")
    public void enterEmailAddressFacebook(String arg0){
        dp.enterEmailAddressFacebook(arg0);
    }

    @And("^Enter Password \"([^\"]*)\"- Facebook$")
    public void enterPasswordFacebook(String arg0) {
        dp.enterPasswordFacebook(arg0);
    }

    @Then("^Click Login button$")
    public void clickLoginButton() {
        dp.clickLoginButton();
    }

    @And("^Click Edit Agency$")
    public void clickEditAgency() {
        dp.clickEditAgency();
    }

    @When("^Enter Facebook Business Id \"([^\"]*)\"$")
    public void enterFacebookBusinessId(String arg0){
        dp.enterFacebookBusinessId(arg0);
    }

    @Then("^Click Submit button- Edit Agency$")
    public void clickSubmitButtonEditAgency() {
        dp.clickSubmitButtonEditAgency();
    }

    @When("^Click Ad Accounts$")
    public void clickAdAccounts() {
        dp.clickAdAccounts();
    }

    @Then("^Select Facebook from the dropdown$")
    public void selectFacebookFromTheDropdown() {
        dp.selectFacebookFromTheDropdown();
    }

    @And("^Click New Account button$")
    public void clickNewAccountButton(){
        dp.clickNewAccountButton();
    }

    @When("^Select Client Ad Account$")
    public void selectClientAdAccount() {
        dp.selectClientAdAccount();
    }

    @Then("^Click Add button$")
    public void clickAddButton() {
        dp.clickAddButton();
    }
}
