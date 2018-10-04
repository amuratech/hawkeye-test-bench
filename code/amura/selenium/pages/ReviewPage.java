package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 28/5/18.
 */
public class ReviewPage extends BasePage {

    UIElement reviewTab = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[8]/a/span/i");
    UIElement accordionFacebookLeadGeneration = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review\"]/div/div[1]/div[2]/div[1]/h4/a");//*[@id="review"]/div/div[1]/div[1]/div[1]/h4/a
    UIElement generateCampaignGoogleDisplay = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_accordion')]/div/div[2]/div/button");//*[@id="facebook_conversion_accordion"]/div/div[2]/div/button
    UIElement accordionGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review\"]/div/div[1]/div[1]/div[1]/h4/a");
    UIElement generateCampaignGoogleSearch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"adwords_display_accordion\"]/div/div[2]/div/button");
    UIElement syncFacebookLeadGen = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"facebook_leadgen_accordion\"]/div/div[2]/div/button[1]");
    UIElement syncAndGoLiveFacebookLeadGen = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"facebook_leadgen_accordion\"]/div/div[2]/div/button[2]");
    UIElement syncAndGoLiveGoogleSearch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"adwords_search_accordion\"]/div/div[2]/div/button[2]");
    UIElement syncGoogleSearch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"adwords_search_accordion\"]/div/div[2]/div/button[1]");
    UIElement accordionGoogleDisplay = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review\"]/div/div[1]/div[1]");
    UIElement stageChange = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review\"]/div/div[1]/div[1]/div[1]/h4/a/span[2]");//*[@id="review"]/div/div[1]/div[2]/div[1]/h4/a/span[2]
    UIElement generateCampaignFacebookConversion = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"facebook_conversion_accordion\"]/div/div[2]/div/button");//*[@id="review"]/div/div[1]/div[1]/div[1]/h4/a


    public void clickReviewTab() {
        tDriver.myReviewTab(reviewTab);
    }

    public void clickFacebookLeadGenAccordionReviewPage() {
        tDriver.myReviewFacebookLeadGenAccordion(accordionFacebookLeadGeneration);
    }

    public void clickGenerateCampaigns() {
        tDriver.myGenerateCampaign(generateCampaignGoogleDisplay);
    }

    public void clickGoogleSearchAccordionReviewPage() {
        tDriver.myReviewGoogleSearchAccordion(accordionGoogle);
    }

    public void clickGenerateCampaignsGoogleSearch() {
        tDriver.myClick(generateCampaignGoogleSearch);
    }

    public void clickSyncButtonForFacebookLeadGen() {
        tDriver.myClick(syncFacebookLeadGen);
    }

    public void clickSyncAndGoLiveButtonForFacebookLeadGen() {
        tDriver.myClick(syncAndGoLiveFacebookLeadGen);
    }

    public void clickSyncButtonForGoogleSearch() {
        tDriver.myClick(syncGoogleSearch);
    }

    public void clickSyncAndGoLiveButtonForGoogleSearch() {
        tDriver.myClick(syncAndGoLiveGoogleSearch);
    }

    public void clickGoogleDisplayAccordionForReview() {
        tDriver.myClick(accordionGoogleDisplay);
    }

    public void refreshThePageToChangeTheStatus() {
        tDriver.myStageChange(stageChange);
    }

    public void clickFacebookConversionAccordionForReview() {
        tDriver.myClick(accordionFacebookLeadGeneration);
    }

    public void clickGenerateCampaignsForFacebook() {
        tDriver.myGenerateCampaign(generateCampaignFacebookConversion);
    }

    public void userShouldBeOnReviewPage() {
        tDriver.myPage();
    }
}
