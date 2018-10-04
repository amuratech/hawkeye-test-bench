package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 25/5/18.
 */
public class BudgetPage extends  BasePage {

    UIElement budgetTab = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[6]/a/span/i");//*[@id="budgets"]/div/div[2]/div/div[1]/div[4]/ul/li[2]/a
    UIElement addDetailsGoogleSearch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[2]/div/div[1]/div[4]/button/i");//*[@id="budgets"]/div/div[2]/div/div[1]/div[4]/ul/li[1]/a
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"virtual_campaign_name\"]");
    UIElement categoriesGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[2]/span/span[1]/span/ul/li/input");
    UIElement communicationsGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[2]/span/span[1]/span/ul");
    UIElement remarketingLists = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[4]/span/span[1]/span/ul/li/input");
    UIElement bidAmount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[12]/div/input");
    UIElement defaultTracking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_campaign_default_tracking')]");//*[@id="virtual_campaign_use_campaign_default_tracking"]
    UIElement saveGoogleSearchCampaignForm = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[3]/button[2]");
    UIElement campaignNameFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"virtual_campaign_name\"]");//*[@id="virtual_campaign_name"]
    UIElement facebookCommunications = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[2]/span/span[1]/span/ul/li/input");
    UIElement platformPlacement = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[3]/div[4]/span/span[1]/span/ul/li/input");
    UIElement saveFacebookBudget = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[3]/button[2]");
    UIElement bidAmountFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[5]/div[3]/div/input");
    UIElement leadFormFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[5]/div[8]/span/span[1]/span");
    UIElement addDetailsFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[2]/div/div[1]/div[4]/button/i");//*[@id="budgets"]/div/div[2]/div/div[1]/div[4]/ul/li[1]/a
    UIElement customAudiences = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[2]/div/div[2]/span/span[1]/span/ul/li/input");
    UIElement facebookPublisher = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[3]/div[3]/span/span[1]/span/ul/li/input");
    UIElement facebookOS = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div[3]/div[2]/span/span[1]/span/ul/li/input");
    UIElement userInterests = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[7]/span/span[1]/span/ul/li/input");
    UIElement budgetTopics = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"budgets\"]/div/div[3]/div/div/div[2]/div/div/form/div/div[6]/span/span[1]/span/ul/li/input");


    public void clickBudgetTab() {
        tDriver.myBudgetTab(budgetTab);
    }

    public void selectGoogleSearchFromTheDropdownToAddCampaignDetails() {
        tDriver.myGoogleSearchAddDetails(addDetailsGoogleSearch);
    }

    public void selectCategories() {
        tDriver.myGoogleSearchCategories(categoriesGoogle);
    }

    public void selectCommunications() {
        tDriver.myGoogleSearchCommunications(communicationsGoogle);
    }


    public void selectRemarketingLists() {
        tDriver.myGoogleSearchRemarketingLists(remarketingLists);
    }

    public void enterBidAmount(String arg0) {
        tDriver.myCampaignBidAmount(bidAmount,arg0);
    }

    public void enterNameOfTheCampaign(String arg0){
        tDriver.myCampaignName(name,arg0);
    }

    public void uncheckDefaultTrackingCheckbox() {
        tDriver.myDefaultTrackingCheckbox(defaultTracking);
    }

    public void clickSaveButtonGoogleSearchCampaignForm() {
        tDriver.myClick(saveGoogleSearchCampaignForm);
    }

    public void enterNameForFacebook(String arg0) {
        tDriver.myFacebookCampaignName(campaignNameFacebook,arg0);
    }

    public void selectCommunicationsForFacebook() {
        tDriver.myFacebookCommunications(facebookCommunications);
    }

    public void selectPlatformPlacement() {
        tDriver.myFacebookPlatformPlacement(platformPlacement);
    }

    public void clickSaveButtonFacebookBudget() {
        tDriver.myClick(saveFacebookBudget);
    }

    public void enterBidAmountFacebookBudget(String arg0) {
        tDriver.myFacebookBidAmount(bidAmountFacebook,arg0);
    }

    public void selectLeadAdForm() {
        tDriver.myFacebookLeadAdForm(leadFormFacebook);
    }

    public void selectFacebookFromTheDropdownToAddCampaignDetails() {
        tDriver.myFacebookAddDetails(addDetailsFacebook);
    }

    public void selectCustomAudiences() {
        tDriver.myFacebookCampaignCustomAudiences(customAudiences);

    }

    public void selectTheOS() {
        tDriver.myBudgetFacebookOS(facebookOS);
    }

    public void selectPublisherPlatformsBudget() {
        tDriver.myBudgetFacebookPublisher(facebookPublisher);
    }

    public void selectUserInterests() {
        tDriver.myGoogleBudgetUserInterests(userInterests);
    }

    public void selectTopics() {
        tDriver.myGoogleBudgetTopics(budgetTopics);
    }

    public void userShouldBeOnBudgetPage() {
        tDriver.myPage();
    }
}
