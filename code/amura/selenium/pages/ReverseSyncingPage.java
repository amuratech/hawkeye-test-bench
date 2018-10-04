package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 3/9/18.
 */
public class ReverseSyncingPage extends BasePage {

    UIElement reverseSyncing = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"sidebar\"]/div/a[2]");//*[@id="sidebar"]/div/a[2]
    UIElement newCampaignsFetchAdwords = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"reverse-syncing-accordion\"]/div/div[1]/h4/a");//*[@id="reverse-syncing-accordion"]/div/div[1]/h4/a
    UIElement newCampaignsSaveAdwords = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new-campaign-panels-adwords_display\"]/div/div[1]/div[1]/h4/label/i");
    UIElement existingCampaignsAccordion = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"reverse-syncing-accordion\"]/div[1]/div[1]/h4/a");//*[@id="entity-change-panels-list-adwords_display"]/div[2]/div/div/div[1]/div/div[1]/h4/a
    UIElement existingCampaignsFetchAdwords = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"entity-change-panels-list-adwords_display\"]/div[2]/div/div/div[1]/div/div[2]/button[1]");
    UIElement newCampaignsFetchFacebook = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"reverse-syncing-accordion\"]/div[2]/div[1]/h4/a");
    UIElement newCampaignsSaveFacebook = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new-adset-panels-facebook_conversion\"]/div/div[1]/div[1]/h4/label/i");
    UIElement newCampaignsFetchLinkedIn = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"reverse-syncing-accordion\"]/div[3]/div[1]/h4/a");
    UIElement existingCampaignsAccordionFacebook = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"reverse-syncing-accordion\"]/div[2]/div[1]/h4/a");
    UIElement existingCampaignsFetchFacebook = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"entity-change-panels-list-facebook_conversion\"]/div[2]/div/div/div/div[1]/div[2]/button[1]");
    UIElement campaigns = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"save-new-campaigns-adwords_display\"]");//*[@id="reverse-syncing-accordion"]/div[2]/div[1]/h4/a
    UIElement reverseSyncingSyncedCampaigns = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"home\"]/a[5]");//*[@id="reverse-syncing-accordion"]/div[2]/div[1]/h4/a

    public void selectReverseSyncing() {
        tDriver.myReverseSyncing(reverseSyncing);//*[@id="entity-change-panels-list-adwords_display"]/div[2]/div/div/div[1]/div/div[1]/h4
    }

    public void clickFetchForNewCampaigns() {
        tDriver.myRSNewCampaignsFetchAdwords(newCampaignsFetchAdwords);
    }

    public void userShouldBeOnReverseSyncingPage() {
        tDriver.myPage();
    }

    public void selectCampaignsToSaveThem() {
        tDriver.myRSNewCampaignsSaveAdwords(newCampaignsSaveAdwords,campaigns);
    }

    public void existingCampaignsAccordionShouldGetGenerated() {
        tDriver.myRSExistingCampaignsAccordionAdwords(existingCampaignsAccordion);
    }


    public void clickFetchForExistingCampaigns() {
        tDriver.myClick(existingCampaignsFetchAdwords);
    }

    public void clickFetchForNewCampaignsOfFacebook() {
        tDriver.myRSNewCampaignsFetchFacebook(newCampaignsFetchFacebook);
    }

    public void selectCampaignsToSaveThemForFacebook() {
        tDriver.myRSNewCampaignsSaveFacebook(newCampaignsSaveFacebook);
    }

    public void clickFetchForNewCampaignsOfLinkedIn() {
        tDriver.myRSNewCampaignsFetchLinkedIn(newCampaignsFetchLinkedIn);
    }

    public void existingCampaignsAccordionShouldGetGeneratedForFacebook() {
        tDriver.myRSExistingCampaignsAccordionFacebook(existingCampaignsAccordionFacebook);
    }

    public void clickFetchForExistingCampaignsForFacebook() {
        tDriver.myRSExistingCampaignsFetch(existingCampaignsFetchFacebook);
    }

    public void selectReverseSyncingForSyncedCampaigns() {
        tDriver.myClick(reverseSyncingSyncedCampaigns);
    }
}
