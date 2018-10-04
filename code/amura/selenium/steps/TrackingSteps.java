package amura.selenium.steps;

import amura.selenium.pages.TrackingPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amura on 24/5/18.
 */
public class TrackingSteps {

    TrackingPage dp;

    public TrackingSteps(){ dp = new TrackingPage();}

    @When("^Click Tracking tab$")
    public void clickTrackingTab() {
        dp.clickTrackingTab();
    }

    @Then("^Open Google Search accordion$")
    public void openGoogleSearchAccordion(){
        dp.openGoogleSearchAccordion();
    }

    @And("^Enter URL tagging specs  \"([^\"]*)\"$")
    public void enterURLTaggingSpecs(String arg0) {
        dp.enterURLTaggingSpecs(arg0);
    }

    @And("^Enter Phone Number \"([^\"]*)\"$")
    public void enterPhoneNumber(String arg0) {
        dp.enterPhoneNumber(arg0);
    }

    @And("^Select Default lead type$")
    public void selectDefaultLeadType() {
        dp.selectDefaultLeadType();
    }

    @When("^Open Facebook Lead Gen accordion$")
    public void openFacebookLeadGenAccordion(){
        dp.openFacebookLeadGenAccordion();
    }

    @Then("^Enter URL tagging specs for Facebook \"([^\"]*)\"$")
    public void enterURLTaggingSpecsForFacebook(String arg0) {
        dp.enterURLTaggingSpecsForFacebook(arg0);
    }

    @And("^Enter Phone Number for Facebook \"([^\"]*)\"$")
    public void enterPhoneNumberForFacebook(String arg0){
        dp.enterPhoneNumberForFacebook(arg0);
    }

    @And("^Select Tracking Pixel$")
    public void selectTrackingPixel() {
        dp.selectTrackingPixel();
    }

    @And("^Select Default lead type for Facebook$")
    public void selectDefaultLeadTypeForFacebook(){
        dp.selectDefaultLeadTypeForFacebook();
    }

    @Then("^User should be on Tracking page$")
    public void userShouldBeOnTrackingPage(){
        dp.userShouldBeOnTrackingPage();
    }
}
