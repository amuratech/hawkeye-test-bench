package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 24/5/18.
 */
public class TrackingPage extends BasePage{

    UIElement trackingTab = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[5]/a/span/i");
    UIElement accordionGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"tracking\"]/div/form/div/div[2]/div[1]/h4/a/span[1]");
    UIElement urlTaggingGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"media_plan_micro_campaign_settings_0_url_tagging\"]");
    UIElement phoneNumberGoogle   = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"tracking-adwords-display\"]/div/div[2]/div/input");
    UIElement leadTypeGoogle  = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-default-lead-type-adwords_display-container\"]");
    UIElement accordionFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"tracking\"]/div/form/div/div[3]/div[1]/h4/a/span[1]");
    UIElement urlTaggingFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"media_plan_micro_campaign_settings_1_url_tagging\"]");
    UIElement phoneNumberFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"tracking-facebook_conversion\"]/div/div[2]/div/input");
    UIElement trackingPixel = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes1conversion_pixel_id-')]");//*[@id="select2-media_planmicro_campaign_settings_attributes1conversion_pixel_id-yc-container"]
    UIElement leadTypeFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-default-lead-type-facebook_conversion-container\"]");



    public void clickTrackingTab() {
        tDriver.myTrackingTab(trackingTab);
    }

    public void openGoogleSearchAccordion() {
        tDriver.myClick(accordionGoogle);
    }

    public void enterURLTaggingSpecs(String arg0) {
        tDriver.myEnter(urlTaggingGoogle,arg0);
    }

    public void enterPhoneNumber(String arg0) {
        tDriver.myEnter(phoneNumberGoogle,arg0);
    }


    public void selectDefaultLeadType() {
        tDriver.myGoogleLeadType(leadTypeGoogle);
    }

    public void openFacebookLeadGenAccordion() {
        tDriver.myClick(accordionFacebook);
    }

    public void enterURLTaggingSpecsForFacebook(String arg0) {
        tDriver.myEnter(urlTaggingFacebook,arg0);
    }

    public void enterPhoneNumberForFacebook(String arg0) {
        tDriver.myEnter(phoneNumberFacebook,arg0);
    }

    public void selectTrackingPixel() {
        tDriver.myFacebookTrackingPixel(trackingPixel);
    }

    public void selectDefaultLeadTypeForFacebook() {
        tDriver.myFacebookDefaultLeadType(leadTypeFacebook);
    }

    public void userShouldBeOnTrackingPage() {
        tDriver.myPage();
    }
}
