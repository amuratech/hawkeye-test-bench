package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 3/9/18.
 */
public class GradeCampaignPage extends BasePage {

    UIElement authorizeGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"/html/body/div[2]/div/div/form/input[3]");
    UIElement campaignGraderButton = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"check-grader\"]");
    UIElement campaignForGrading = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-select-campaign-container\"]");
    UIElement gradeCampaignButton = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"grade-campaign-btn\"]");
    UIElement adAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-adaccount_select-container\"]");
    UIElement gradingKeywordAnalysis = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"campaign-grader-sections\"]/div/section[3]/div[8]/div/div/div/button[2]");
    UIElement gradingAdAnalysis = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"campaign-grader-sections\"]/div/section[3]/div[8]/div/div/div/button[3]");
    UIElement gradingExtension = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"campaign-grader-sections\"]/div/section[3]/div[8]/div/div/div/button[4]");
    UIElement gradingSetupAnalysis = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"campaign-grader-sections\"]/div/section[3]/div[8]/div/div/div/button[5]");
    UIElement gradingTracking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"campaign-grader-sections\"]/div/section[3]/div[8]/div/div/div/button[6]");


    public void clickAuthorizeWithGoogle() {
        tDriver.myClick(authorizeGoogle);
    }

    public void clickCheckCampaignGraderButton() {
        tDriver.myClick(campaignGraderButton);
    }

    public void selectCampaignForTheGrading() {
        tDriver.myCampaignForGrading(campaignForGrading);
    }

    public void clickGradeCampaignButton() {
        tDriver.myClick(gradeCampaignButton);
    }

    public void selectAdAccountForCampaignGrading() {
        tDriver.myAccountForCampaignGrading(adAccount);

    }

    public void clickKeywordAnalysis() {
        tDriver.myGradingKeywordAnalysis(gradingKeywordAnalysis);
    }

    public void clickAdAnalysis() {
        tDriver.myGradingAdAnalysis(gradingAdAnalysis);
    }

    public void clickExtension() {
        tDriver.myGradingExtenion(gradingExtension);
    }

    public void clickSetupAnalysis() {
        tDriver.myGradingSetupAnalysis(gradingSetupAnalysis);
    }

    public void clickReachDeliveryAndTracking() {
        tDriver.myGradingTracking(gradingTracking);
    }
}
