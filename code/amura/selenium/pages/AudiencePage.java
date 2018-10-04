package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amuraqa on 18/12/17.
 */
public class AudiencePage extends BasePage{
    UIElement audience = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/ul/li[3]/a");
    UIElement locationInclude = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-location-')]/span");//*[@id="select2-location-j4-container"]/span
    UIElement locationExclude = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-location-')]/span");//*[@id="select2-location-j4-container"]/span
    UIElement setToDefault = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[3]/div/form/div/div[2]/div[1]/h4/a/span[1]");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[3]/div/form/div/div[2]/div[1]/h4/a/span[1]
    UIElement exclude = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[3]/div/form/div/div[1]/div[2]/div[1]/div/div/div[1]/div/button");
    UIElement popup = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Confirm')]");

    public void clickAudiencePage() {
        tDriver.myAudienceTab(audience);
    }

    public void selectTheLocationsToBeExcluded() {
        tDriver.myExcludedLocation(locationExclude);
    }

    public void selectExclude() {
        tDriver.myExclude(exclude);
    }

    public void selectTheLocationToBeIncluded() {
        tDriver.myIncludedLocation(locationInclude);

    }

    public void selectSetToDefaultForTheCampaigns() {
        tDriver.myDefaultSetting(setToDefault);
    }


    public void userShouldBeOnAudiencePage() {
        tDriver.myPage();
    }

    public void confirmThePopupAlert() {
        tDriver.myPopup(popup);
    }
}
