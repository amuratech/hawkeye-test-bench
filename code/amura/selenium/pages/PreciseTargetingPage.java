package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amuraqa on 19/12/17.
 */
public class PreciseTargetingPage extends BasePage {

    UIElement preciseTageting = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[4]/a/span/i");
    UIElement interest = new UIElement(UIType.Button, UILocatorType.ClassName,"select2-selection__rendered");//*[@id="select2-pb1e-container"]
    UIElement gender = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[2]/div[2]/div/div[3]/div/div");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[2]/div/div[1]/label
    UIElement age = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-media_planfacebook_mcsage_min-')]");//*[@id="select2-media_planfacebook_mcsage_min-ta-container"]
    UIElement devices = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[4]/div/div[1]/label");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[4]/div/div[1]/label
    UIElement publisherPlatform = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[2]/div[2]/div/div[5]/div/div[1]/label/i");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[5]/div/div[1]/label
    UIElement placement = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[6]/div/div[1]/label");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[6]/div/div[1]/label
    UIElement bidding = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-media_planfacebook_mcsbidding_type-')]/span");//*[@id="select2-media_planfacebook_mcsbidding_type-wy-container"]
    UIElement accordionGoogle= new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[1]/h4/a/span");
    UIElement includeLocationGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[2]/div/div[2]/div/div/div[1]/div[2]/span/span[1]/span/ul/li/input");
    UIElement excludeLocationGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div[2]/span/span[1]/span/ul/li/input");
    UIElement accordionFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[2]/div[1]/h4/a/span");
    UIElement includeLocationFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[2]/div[2]/div/div[2]/div/div/div[1]/div[2]/span/span[1]/span/ul/li/input");
    UIElement bidOn = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-media_planfacebook_mcspay_')]");//*[@id="select2-media_planfacebook_mcspay_for-t1-container"]
    UIElement ageRangeGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[2]/div/div[5]/div[1]/div/div[6]/label/i");//*[@id="select2-media_planfacebook_mcspay_for-t1-container"]
    UIElement genderGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[2]/div/div[5]/div[2]/div/div[1]/label/i");//*[@id="select2-media_planfacebook_mcspay_for-t1-container"]
    UIElement parentalStatusGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[2]/div/div[5]/div[3]/div/div[1]/label/i");//*[@id="select2-media_planfacebook_mcspay_for-t1-container"]
    UIElement closeGoogleAccordion= new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"precise_control\"]/div/form/div/div[1]/div[1]/h4/a");

    public void clickPreciseTargetingTab() {//*[@id="select2-2uoq-container"]/span
        tDriver.myPreciseTargetingTab(preciseTageting);
    }

    public void userShouldBeOnPreciseControlPage() {
        tDriver.myPage();
    }

    public void enterInterestForTheCampaign() {
        tDriver.myInterest(interest);
    }

    public void selectTheGender() {
        tDriver.myGender(gender);
    }

    public void selectTheMinAndMaxAge() {
        tDriver.myAge(age);
    }

    public void selectTheDevices() {
        tDriver.myDevices(devices);
    }

    public void selectThePublisherPlatforms() {
        tDriver.myClick(publisherPlatform);
    }

    public void selectThePlacement() {
        tDriver.myClick(placement);
    }

//    public void selectTheBidOnBiddingTypeAndBiddingAmount() {
//        tDriver.myBidding(bidding);
//    }

    public void clickGoogleDefaultAccordion() {
        tDriver.myClick(accordionGoogle);
    }

    public void enterLocationInInclude() {
        tDriver.myGoogleIncludeLocation(includeLocationGoogle);
    }

    public void enterLocationInExclude() {
        tDriver.myGoogleExcludeLocation(excludeLocationGoogle);
    }

    public void clickFacebookDefaultAccordion() {
        tDriver.myFacebookPreciseTargetingAccordion(accordionFacebook);
    }

    public void enterLocationInIncludeForFacebook() {
        tDriver.myFacebookIncludeLocation(includeLocationFacebook);

    }

    public void selectBidOnFromTheDropdown() {
        tDriver.myFacebookBidOn(bidOn);
    }
    public void selectBiddingTypeAndBiddingAmount() {
        tDriver.myFacebookBidding(bidding);
    }

    public void selectAgeRangeForGoogle() {
        tDriver.myClick(ageRangeGoogle);
    }

    public void selectGenderForGoogle() {
        tDriver.myClick(genderGoogle);
    }

    public void selectParentalStatusForGoogle() {
        tDriver.myClick(parentalStatusGoogle);
    }

    public void closeTheGoogleAdwordsAccordion() {
        tDriver.myClick(closeGoogleAccordion);
    }
}
