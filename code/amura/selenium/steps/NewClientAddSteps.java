package amura.selenium.steps;

import amura.selenium.pages.NewClientAddPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 26/7/18.
 */
public class NewClientAddSteps {

    NewClientAddPage dp;

    public NewClientAddSteps(){dp = new NewClientAddPage();}

    @When("^Click icon to add New Client$")
    public void clickIconToAddNewClient(){
        dp.clickIconToAddNewClient();
    }

    @Then("^Enter Client Name \"([^\"]*)\"$")
    public void enterClientName(String arg0){
        dp.enterClientName(arg0);
    }

    @And("^Enter Description \"([^\"]*)\"- New Client$")
    public void enterDescriptionNewClient(String arg0){
        dp.enterDescriptionNewClient(arg0);
    }

    @And("^Select Time Zone$")
    public void selectTimeZone() {
        dp.selectTimeZone();
    }

    @And("^Select Ad Account$")
    public void selectAdAccount() {
        dp.selectAdAccount();
    }

    @And("^Select User$")
    public void selectUser() {
        dp.selectUser();
    }

    @And("^Enter Credit Amount \"([^\"]*)\"$")
    public void enterCreditAmount(String arg0) {
        dp.enterCreditAmount(arg0);
    }

    @When("^Click Save button- New Client$")
    public void clickSaveButtonNewClient() {
        dp.clickSaveButtonNewClient();
    }

    @Then("^Client should be created$")
    public void clientShouldBeCreated() {
        dp.clientShouldBeCreated();
    }


}
