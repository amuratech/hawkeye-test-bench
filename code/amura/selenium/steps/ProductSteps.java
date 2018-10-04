package amura.selenium.steps;

import amura.selenium.pages.ProductPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 15/12/17.
 */
public class ProductSteps {

    ProductPage dp;

    public ProductSteps(){dp = new ProductPage();}

    @When("^Click on Edit link$")
    public void clickOnEditLink(){
        dp.clickOnEditLink();
    }

    @When("^Click Product tab$")
    public void clickProductTab() {
        dp.clickProductTab();
    }

    @And("^Select Project by searching with keywords$")
    public void selectProjectBySearchingWithKeywords() {
        dp.selectProjectBySearchingWithKeywords();
    }

    @Then("^Some fields should be auto filled$")
    public void someFieldsShouldBeAutoFilled() {
        dp.someFieldsShouldBeAutoFilled();
    }

    @And("^Enter Landing page URL \"([^\"]*)\"$")
    public void enterLandingPageURL(String arg0) {
        dp.enterLandingPageURL(arg0);
    }

    @And("^Select Project stage$")
    public void selectProjectStage() {
        dp.selectProjectStage();
    }

    @And("^Select Configurations$")
    public void selectConfigurations() {
        dp.selectConfigurations();
    }

    @When("^Click on the media plan name$")
    public void clickOnTheMediaPlanName() {
        dp.clickOnTheMediaPlanName();
    }

    @Then("^Select Property types$")
    public void selectPropertyTypes(){
        dp.selectPropertyTypes();
    }

    @And("^Select Property adjectives$")
    public void selectPropertyAdjectives() {
        dp.selectPropertyAdjectives();
    }

    @And("^Select the Segment$")
    public void selectTheSegment() {
        dp.selectTheSegment();
    }

    @Then("^Click on the Edit Plan link$")
    public void clickOnTheEditPlanLink() {
        dp.clickOnTheEditPlanLin();
    }

    @And("^Click the Confirm button on an alert popup$")
    public void clickTheConfirmButtonOnAnAlertPopup() {
        dp.clickTheConfirmButtonOnAnAlertPopup();
}

    @And("^Click the Cancel button to dismiss the alert$")
    public void clickTheCancelButtonToDismissTheAlert() {
        dp.clickTheCancelButtonToDismissTheAlert();

    }


    @And("^Enter Developer Advertising Name \"([^\"]*)\"$")
    public void enterDeveloperAdvertisingName(String arg0) {
        dp.enterDeveloperAdvertisingName(arg0);
    }
}