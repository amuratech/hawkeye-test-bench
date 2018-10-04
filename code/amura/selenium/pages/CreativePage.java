package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amuraqa on 20/12/17.
 */
public class CreativePage extends BasePage {

    UIElement creativePage = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[3]/a/span/i");
    UIElement status = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-')]");//*[@id="select2-4qhn-container"]
    UIElement plus = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-facebook-default-accordian\"]/div[1]/div[2]/div[1]/a");//*[@id="creative-group-facebook-default-accordian"]/div[1]/div[2]/div[1]/a
    UIElement groupNameFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[1]/div[1]/div[1]/input");//*[@id="creative-group-form"]/div[1]/div[1]/div[1]/input
    UIElement headline = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative_headline\"]");//*[@id="creative_headline"]
    UIElement description = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_description')]");//*[@id="oc_description"]
    UIElement saveAssetFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-facebook-default-accordian\"]/div[3]/div/div/div[3]/button[2]");//*[@id="creative-asset-from"]/div[2]/button[2]
    UIElement addCreative = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[1]/div[3]/button");
    UIElement close = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[2]/button[1]");
    UIElement selectAssetFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div/div[2]/div/div[4]/div/div/a[1]");//*[@id="creative-group-form"]/div/div[2]/div/div[4]/div/div/a[1]
    UIElement uploadAssetFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"popover-asset-upload-0\"]");
    UIElement assert2 = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
//    UIElement newMarketing = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"create-pitch-points-tab\"]/div/div[2]/div[1]/h4/div[2]/a");//*[@id="create-pitch-points-tab"]/div/div[3]/div[1]/h4/div[2]/a
    UIElement communicationNameAdwords = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"oc_name\"]");//*[@id="oc_name"]
    UIElement urlPath = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"path1\"]");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement saveFacebookMarketingPitch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-facebook-default-accordian\"]/div[3]/div/div/div[3]/button[2]");//*[@id="create-pitch-points-tab"]/div/div[3]/div[3]/div/div/div/div[3]/button[2]
//    UIElement newMarketingFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"create-pitch-points-tab\"]/div/div[3]/div[1]/h4/div[2]/a");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement adDescription = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"oc_description\"]");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement communicationNameFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"oc_name\"]");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement creativeGroup = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-facebook-default-accordian\"]/div[3]/div/div/div[2]/div/form/div/div[5]/span/span[1]/span/ul/li/input");//*[@id="offer-communication-facebook-default-accordian"]/div[3]/div/div/div/div[2]/div/form/div/div[5]/span/span[1]/span/ul/li/input
    UIElement accordionMarketingPitch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative\"]/div/div/div[1]/div/ul/li[2]/a");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
//    UIElement facebookDefaultAccordion = new UIElement(UIType.Button, UILocatorType.ID,"creative-group-facebook-default-accordian");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement plusAdwordsMarketingPitch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-adwords-display-accordian\"]/div[1]/div[2]/div[1]/a/i");
    UIElement plusFacebookMarketingPitch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-facebook-default-accordian\"]/div[1]/div[2]/div[1]/a");//*[@id="offer-communication-facebook-default-accordian"]/div[1]/div[1]/h4/a
    UIElement saveAdwordsMarketingPitch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-adwords-display-accordian\"]/div[3]/div/div/div[3]/button[2]");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement accordionFacebookDefault = new UIElement(UIType.Button, UILocatorType.ID,"creative-group-facebook-default-accordian");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement accordionGoogleDisplay = new UIElement(UIType.Button, UILocatorType.ID,"creative-group-adwords-display-accordian");//*[@id="creative-group-adwords-display-accordian"]/div[1]/div[1]/h4/a
    UIElement imageAd = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new-creative-group-display\"]/button");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement saveAssetGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-adwords-display-accordian\"]/div[4]/div/div/div[3]/button[2]");//*[@id="creative-group-adwords-display-accordian"]/div[4]/div/div/div[3]/button[2]
    UIElement assetGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[1]/div[3]/div/div[1]/a");//*[@id="creative-group-form"]/div/div[3]/div/div[1]/a
    UIElement groupNameGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div[1]/div[1]/div/div[1]/input");//*[@id="creative-group-form"]/div[1]/div[1]/div/div[1]/input
    UIElement marketingImage = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"offer-communication-adwords-display-accordian\"]/div[3]/div/div/div[2]/div/form/div/div[5]/span/span[1]/span/ul");//*[@id="offer-communication-adwords-display-accordian"]/div[3]/div/div/div[2]/div/form/div/div[5]/span/span[1]/span/ul
    UIElement responsiveAd = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'new-creative-group-display')]");//*[@id="new-creative-group-display"]/a/i[1]
    UIElement accordionCreativeGroup = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative\"]/div/div/div[1]/div/ul/li[1]/a");//*[@id="creative-group-form"]/div[1]/div[2]/div[2]/div[4]/div/div/a[1]
    UIElement uploadCreativeGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"creative-group-form\"]/div/div[3]/div/div[2]/a");//*[@id="popover-asset-upload-0"]

    public void clickOnCreativePage() {
        tDriver.myCreativePage(creativePage);
    }

    public void userShouldBeOnCreativePage() {
        tDriver.myPage();
    }

    public void selectTheStatusForFacebookDefaultForCreativeGroup() {
        tDriver.myStatus(status);
    }

    public void clickOnPlusButtonToCreateANewCreativeGroup() {
        tDriver.myClick(plus);
    }

    public void enterCreativeGroupName(String arg0) {
        tDriver.myEnter(groupNameGoogle,arg0);
    }

    public void enterHeadline(String arg0) {
        tDriver.myCreative(headline,arg0);
    }

    public void enterDescription(String arg0) {
        tDriver.myCreative(description, arg0);
    }

    public void clickSubmitButtonNewCreativeGroup() {
        tDriver.myClick(saveAssetFacebook);
    }

    public void clickAddCrtiveButton() {
        tDriver.myClick(addCreative);
    }

    public void clickCloseButton() {
        tDriver.myClicking(close);
    }

    public void selectAsset() {
        tDriver.myAssetFacebook(selectAssetFacebook);
    }

    public void uploadAsset() {
        tDriver.myAssetUploadFacebook(uploadAssetFacebook);
    }

    public void selectAnotherAssert() {
        tDriver.myAsset2(assert2);
    }

    public void enterCommunicationName(String arg0) {
        tDriver.myEnter(communicationNameAdwords,arg0);
    }

    public void enterDisplayURLPath1(String arg0) {
        tDriver.myEnter(urlPath,arg0);
    }

    public void clickSaveButton() {
        tDriver.myClick(saveAdwordsMarketingPitch);
    }

    public void enterAdSDescription(String arg0) {
        tDriver.myEnter(adDescription,arg0);
    }

    public void enterCommunicationNameForFacebook(String arg0) {
        tDriver.myEnter(communicationNameFacebook,arg0);
    }

    public void clickMarketingPitchAccordion() {
        tDriver.myMarketingPitchAccordion(accordionMarketingPitch);
    }

    public void clickFacebookDefaultAccordionToCreateCreativeGroup() {
        tDriver.myFacebookDefaultAccordion(accordionFacebookDefault);

    }

    public void clickPlusIconToCreateNewMarketingPitchForAdwords() {
        tDriver.myClick(plusAdwordsMarketingPitch);
    }

    public void clickCreatePlusIconToNewMarketingPitchForFacebook() {
        tDriver.myClick(plusFacebookMarketingPitch);
    }

    public void selectCreativeGroupsFromTheDropdown() {
        tDriver.myCreativeGroup(creativeGroup);
    }

    public void clickSaveButtonForFacebook() {
        tDriver.myClick(saveFacebookMarketingPitch);
    }

//    public void clickFacebookDefaultAccordionCreativePage() {
//        tDriver.myClicking(accordionFacebookDefault);
//    }

    public void clickGoogleDisplayAccordionToCreateACreativeGroup() {
        tDriver.myClick(accordionGoogleDisplay);
    }

    public void selectImageAdFromTheDropdownToAddCreativeGroup() {
        tDriver.myCreativeImageAd(imageAd);
    }

    public void enterCreativeGroupNameForImageAd(String arg0) {
        tDriver.myEnter(groupNameGoogle,arg0);
    }

    public void clickSubmitButtonNewCreativeGroupForGoogle() {
        tDriver.myClick(saveAssetGoogle);
    }

    public void selectCreatives() {
        tDriver.myGoogleAsset(assetGoogle);
    }

    public void selectMarketingImagesFromTheDropdown() {
        tDriver.myMarketingPitchMarketingImages(marketingImage);
    }

    public void selectResponsiveAdFromTheDropdownToAddCreativeGroup() {
        tDriver.myCreativeResponsiveAd(responsiveAd);
    }

    public void enterCreativeGroupNameForFacebook(String arg0) {
        tDriver.myEnter(groupNameFacebook,arg0);
    }

    public void clickCreativeGroupsAccordion() {
        tDriver.myClick(accordionCreativeGroup);
    }

    public void uploadCreatives() {
        tDriver.myCreativeUploadGoogle(uploadCreativeGoogle);
    }
}
