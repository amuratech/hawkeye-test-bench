package amura.selenium.steps;

import amura.selenium.pages.CreativePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by amuraqa on 20/12/17.
 */
public class CreativeSteps {

    CreativePage dp;

    public CreativeSteps(){dp = new CreativePage();}

    @When("^Click on Creative page$")
    public void clickOnCreativePage() {
        dp.clickOnCreativePage();
    }

    @Then("^User should be on creative page$")
    public void userShouldBeOnCreativePage() {
        dp.userShouldBeOnCreativePage();
    }

    @And("^Select the status for Facebook Default for creative group$")
    public void selectTheStatusForFacebookDefaultForCreativeGroup() {
        dp.selectTheStatusForFacebookDefaultForCreativeGroup();
    }

    @When("^Click on plus button to create a new creative group$")
    public void clickOnPlusButtonToCreateANewCreativeGroup(){
        dp.clickOnPlusButtonToCreateANewCreativeGroup();
    }

    @Then("^Enter Creative group name \"([^\"]*)\"$")
    public void enterCreativeGroupName(String arg0){
        dp.enterCreativeGroupName(arg0);
    }

    @And("^Enter Headline \"([^\"]*)\"$")
    public void enterHeadline(String arg0) {
        dp.enterHeadline(arg0);
    }

    @And("^Enter Description \"([^\"]*)\"$")
    public void enterDescription(String arg0) {
        dp.enterDescription(arg0);
    }

    @And("^Click Submit button- New creative group$")
    public void clickSubmitButtonNewCreativeGroup(){
        dp.clickSubmitButtonNewCreativeGroup();
    }

//    @When("^Click 'Add Creative' button$")
//    public void clickAddCreativeButton() {
//        dp.clickAddCreativeButton();
//    }

    @And("^Click Close button$")
    public void clickCloseButton() {
        dp.clickCloseButton();
    }

    @And("^Select Asset$")
    public void selectAsset() {
        dp.selectAsset();
    }

    @And("^Upload Asset$")
    public void uploadAsset() {
        dp.uploadAsset();
    }

    @And("^Select another Assert")
    public void selectAnotherAssert() {
        dp.selectAnotherAssert();
    }

    @Then("^Enter Communication name \"([^\"]*)\"$")
    public void enterCommunicationName(String arg0) {
        dp.enterCommunicationName(arg0);
    }

    @And("^Enter Display URL path 1 \"([^\"]*)\"$")
    public void enterDisplayURLPath1(String arg0){
        dp.enterDisplayURLPath1(arg0);
    }

    @And("^Click Save button$")
    public void clickSaveButton() {
        dp.clickSaveButton();
    }

    @When("^Click plus icon to create new marketing pitch for Facebook")
    public void clickPlusIconToCreateNewMarketingPitchForFacebook() {
        dp.clickCreatePlusIconToNewMarketingPitchForFacebook();
    }

    @Then("^Enter Communication name for facebook \"([^\"]*)\"$")
    public void enterCommunicationNameForFacebook(String arg0){
        dp.enterCommunicationNameForFacebook(arg0);
    }

    @And("^Enter Ad's description \"([^\"]*)\"$")
    public void enterAdSDescription(String arg0) {
        dp.enterAdSDescription(arg0);
    }

    @When("^Click Marketing pitch accordion")
    public void clickMarketingPitchAccordion() {
        dp.clickMarketingPitchAccordion();
    }

    @Then("^Click Facebook Default accordion to create a creative group$")
    public void clickFacebookDefaultAccordionToCreateCreativeGroup() {
        dp.clickFacebookDefaultAccordionToCreateCreativeGroup();
    }

    @And("^Click plus icon to create new marketing pitch for Adwords$")
    public void clickPlusIconToCreateNewMarketingPitchForAdwords() {
        dp.clickPlusIconToCreateNewMarketingPitchForAdwords();
    }

    @And("^Select Creative Groups from the dropdown$")
    public void selectCreativeGroupsFromTheDropdown(){
        dp.selectCreativeGroupsFromTheDropdown();
    }

    @When("^Click Save button for Facebook$")
    public void clickSaveButtonForFacebook(){
        dp.clickSaveButtonForFacebook();
    }


//    @Then("^Click Facebook Default accordion- Creative page$")
//    public void clickFacebookDefaultAccordionCreativePage() {
//        dp.clickFacebookDefaultAccordionCreativePage();
//
//    }

    @When("^Click Google Display accordion to create a creative group$")
    public void clickGoogleDisplayAccordionToCreateACreativeGroup() {
        dp.clickGoogleDisplayAccordionToCreateACreativeGroup();
    }

    @And("^Select Image Ad from the dropdown to add creative group$")
    public void selectImageAdFromTheDropdownToAddCreativeGroup() {
        dp.selectImageAdFromTheDropdownToAddCreativeGroup();
    }
    @Then("^Enter Creative group name for Image Ad \"([^\"]*)\"$")
    public void enterCreativeGroupNameForImageAd(String arg0) {
        dp.enterCreativeGroupNameForImageAd(arg0);
    }

    @And("^Click Submit button- New creative group for Google$")
    public void clickSubmitButtonNewCreativeGroupForGoogle() {
        dp.clickSubmitButtonNewCreativeGroupForGoogle();
    }

    @And("^Select Creatives$")
    public void selectCreatives(){
        dp.selectCreatives();
    }

    @When("^Select Marketing Images from the dropdown$")
    public void selectMarketingImagesFromTheDropdown() {
        dp.selectMarketingImagesFromTheDropdown();
    }

    @And("^Select Responsive Ad from the dropdown to add creative group$")
    public void selectResponsiveAdFromTheDropdownToAddCreativeGroup() {
        dp.selectResponsiveAdFromTheDropdownToAddCreativeGroup();
    }

    @Then("^Enter Creative group name for Facebook \"([^\"]*)\"$")
    public void enterCreativeGroupNameForFacebook(String arg0) {
        dp.enterCreativeGroupNameForFacebook(arg0);
    }

    @When("^Click Creative Groups accordion$")
    public void clickCreativeGroupsAccordion() {
        dp.clickCreativeGroupsAccordion();
    }

    @When("^Upload Creatives$")
    public void uploadCreatives() {
        dp.uploadCreatives();
    }
}
