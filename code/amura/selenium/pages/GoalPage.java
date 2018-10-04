package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 27/5/18.
 */
public class GoalPage extends BasePage{
    UIElement goalsTab = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[7]/a/span/i");
    UIElement accordionGoogleSearch = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[1]/div[1]/h4/a");
    UIElement costPerClick = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[1]/div[2]/div/div[4]/div[1]/div/div/div/input");
    UIElement costPerLead = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[1]/div[2]/div/div[5]/div[1]/div/div/div/input");
    UIElement totalLeads = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[1]/div[2]/div/div[6]/div[1]/div/input");
    UIElement leadVelocity = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[1]/div[2]/div/div[7]/div[1]/div/input");
    UIElement accordionFacebookLead = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[2]/div[1]/h4/a");
    UIElement costPerClickFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[2]/div[2]/div/div[4]/div[1]/div[1]/div/div/input");
    UIElement costPerLeadFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[2]/div[2]/div/div[5]/div[1]/div/div/div/input");
    UIElement totalLeadsFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[2]/div[2]/div/div[6]/div[1]/div/input");
    UIElement leadVelocityFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"targets\"]/div/form/div/div[2]/div[2]/div/div[7]/div[1]/div/input");

    public void clickGoalsTab() {
        tDriver.myGoalsTab(goalsTab);
    }

    public void clickGoogleSearchAccordion() {
        tDriver.myGoalsGoogleSearchAccordion(accordionGoogleSearch);
    }

    public void enterCostPerClick(String arg0) {
        tDriver.myEnter(costPerClick,arg0);
    }

    public void enterCostPerLead(String arg0) {
        tDriver.myEnter(costPerLead,arg0);
    }

    public void enterTotalLeads(String arg0) {
        tDriver.myEnter(totalLeads,arg0);
    }

    public void enterLeadVelocity(String arg0) {
        tDriver.myEnter(leadVelocity,arg0);
    }

    public void clickFacebookLeadGenAccordion() {
        tDriver.myClick(accordionFacebookLead);
    }

    public void enterCostPerClickForFacebook(String arg0) {
        tDriver.myEnter(costPerClickFacebook,arg0);
    }

    public void enterCostPerLeadForFacebook(String arg0) {
        tDriver.myEnter(costPerLeadFacebook,arg0);
    }

    public void enterTotalLeadsForFacebook(String arg0) {
        tDriver.myEnter(totalLeadsFacebook,arg0 );
    }

    public void enterLeadVelocityForFacebook(String arg0) {
        tDriver.myEnter(leadVelocityFacebook,arg0);
    }

    public void userShouldBeOnGoalsPage() {
        tDriver.myPage();
    }
}
