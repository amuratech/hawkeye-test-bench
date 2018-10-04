package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amuraqa on 14/12/17.
 */
public class StartPage extends BasePage {

    UIElement plus = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div[1]/button/i");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[1]");//*[@id="start"]/div/form/div/div[1]/input
    UIElement budget = new UIElement(UIType.Button, UILocatorType.Name,"media_plan[budget]");
    UIElement dateRange = new UIElement(UIType.Button, UILocatorType.Name,"media_plan[starts_on]");
    UIElement account = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[1]/div/form/div[6]/div/span[1]/span/small");
    UIElement adwordsAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-')]");//*[@id="select2-8g9t-container"]
    UIElement display = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/div/div[1]/div[1]/div[1]/label[1]/i");
    UIElement facebookAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_facebook_ad_account-')]");//*[@id="select2-ad_facebook_ad_account-ns-container"]
    UIElement facebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/ul/li[2]/a");
    UIElement adwordsAccountEnable = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[6]/div/span[1]/label/span");
    UIElement facebookAccountEnable = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[6]/div/span[2]/label/span");
    UIElement leadgen = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/div/div[2]/div[1]/div/label[1]/i");
    UIElement next = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[3]/div/button[2]");//*[@id="page-content"]/div/div/div/div/div[3]/div/button[2]
    UIElement addMediaPlan = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/section/div/div/div/button");//*[@id="page-content"]/div/div/div[1]/div/div[2]/button[2]
    UIElement page = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-ad_facebook_page-')]");//*[@id="select2-ad_facebook_page-cs-container"]
    UIElement linkedInAccountEnable = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[6]/div/span[3]/label/span");//*[@id="select2-ad_facebook_page-cs-container"]
    UIElement linkedInAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Please Select AD Account')]");//*[@id="select2-sa7o-container"]
    UIElement linkedIn = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/ul/li[3]/a");//*[@id="start"]/div/form/div/div[7]/div/ul/li/a
    UIElement linkedInCampaignType = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/div/div[3]/div[1]/div/label[2]/i");//*[@id="start"]/div/form/div/div[7]/div/div/div[3]/div[1]/div/label[1]/i
    UIElement unique = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"start\"]/div/form/div/div[7]/div/div/div[3]/div[1]/div/label[1]/i");//*[@id="start"]/div/form/div/div[7]/div/div/div[3]/div[1]/div/label[1]/i

    public void clickOnPlusButton() {
        tDriver.myClicking(plus);
    }

    public void userShouldBeOnStartPage() {
        tDriver.myPage();
    }

    public void enterName(String arg0) {
        tDriver.myEnter(name,arg0);
    }

    public void enterBudget(String arg0) {
        tDriver.myEnter(budget,arg0);
    }

    public void selectTheDateRange() {
        tDriver.myDateRange(dateRange);
    }

    public void enableAdvertisingAccountForAdwords() {
        tDriver.myClick(adwordsAccountEnable);
    }

    public void selectAdwordsCampaignType() {
        tDriver.myAdwordsCampaignType(display);
    }

    public void chooseAdwordsAccount() {
       tDriver.myAdwordsAccount(adwordsAccount);
    }

    public void enableAdvertisingAccountForFacebook() {
        tDriver.myClick(facebookAccountEnable);
    }

    public void clickTheFacebook() {
        tDriver.myClick(facebook);
    }

    public void selectFacebookCampaignTypes() {
        tDriver.myFacebookCampaignType(leadgen);
    }

    public void chooseFacebookAccount() {
        tDriver.myFacebookAccount(facebookAccount);
    }

    public void clickNextButton() {
        tDriver.myNext(next);
    }

    public void userShouldBeOnProductPage() {
        tDriver.myPage();
    }

    public void clickAddMediaPlanButton() {
        tDriver.myAddMediaPlan(addMediaPlan);
    }

    public void selectThePage() {
        tDriver.myFacebookPage(page);
    }

    public void selectFacebookCampaignTypeAsSearch() {

    }

    public void enableAdvertisingAccountForLinkedIn() {
        tDriver.myClick(linkedInAccountEnable);
    }

    public void clickLinkedIn() {
        tDriver.myClick(linkedIn);
    }

    public void chooseLinkedInCampaignTypes() {
        tDriver.myClick(linkedInCampaignType);
    }

    public void chooseLinkedInAccount() {
        tDriver.myLinkedInAccount(linkedInAccount);
    }

    public void enterNameOfTheMediaPlan() {
        tDriver.myUniqueEnter(name);
    }
}
