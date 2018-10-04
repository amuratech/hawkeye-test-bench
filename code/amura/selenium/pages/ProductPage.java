package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

import java.rmi.server.UID;

/**
 * Created by amuraqa on 15/12/17.
 */
public class ProductPage extends BasePage{

    UIElement edit = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div[2]/div[1]/div/div[1]/div/div[1]/div/div[3]/button[1]");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[3]/button[1]
    UIElement product = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div/div/div[1]/ul/li[2]/a/span/i");//*[@id="page-content"]/div/div/div/div/div[1]/ul/li[2]/a/span/i
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'select2-productknowledge_base_project_id')]");//*[@id="select2-productknowledge_base_project_id-do-container"]
    UIElement landingPage = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"landing-page-url\"]/div/input");
    UIElement projectStage = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[1]/div[2]/div/div/div[7]/div/span/span[1]/span/ul/li/input");
    UIElement configurations = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[2]/div[1]/h4/a");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[2]/div[1]/h4/a
    UIElement auto = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div[2]/div/div[2]/div[1]/input");//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div[2]/div/div[2]/div[1]/input
    UIElement mediaPlanName = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'mp-')]/section/div[1]/div");
    UIElement propertyTypes = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[1]/span/span[1]/span/ul/li/input");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/a
    UIElement propertyAdjectives = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[2]/div[2]/div/div/div[2]/div/div/div/div/div[2]/span/span[1]/span/ul/li/input");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/a
    UIElement segment = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[1]/div[2]/div/div/div[8]/div/label[4]/span");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/a
    UIElement editPlan = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"media-plan-stats\"]/div/div/div[2]/div/div[3]/div[1]/a");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/a
    UIElement confirmButtonAlertPopup = new UIElement(UIType.Link, UILocatorType.CSS,"body > div.bootbox.modal.bootbox-confirm.show > div > div > div.modal-footer > button.btn.btn-primary");//*[@id="page-content"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/a
    UIElement cancelButtonAlertPopup = new UIElement(UIType.Link, UILocatorType.CSS,"body > div.bootbox.modal.bootbox-confirm.show > div > div > div.modal-footer > button.btn.btn-default");
    UIElement developerName = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"product\"]/div/div/div/form/div/div[1]/div[2]/div/div/div[3]/input");

    public void clickOnEditLink() {
        tDriver.myEditLink(edit);
    }

    public void clickProductTab() {
        tDriver.myProductPage(product);
    }

    public void selectProjectBySearchingWithKeywords() {
        tDriver.myProject(project);
    }

    public void someFieldsShouldBeAutoFilled() {
        tDriver.myAutoFilledFields(auto);
    }

    public void enterLandingPageURL(String arg0) {
        tDriver.myEnter(landingPage,arg0);
    }

    public void selectProjectStage() {
        tDriver.myProjectStage(projectStage);
    }

    public void selectConfigurations() {
        tDriver.myConfigurations(configurations);
    }

    public void clickOnTheMediaPlanName() {
        tDriver.myClick(mediaPlanName);
    }

    public void selectPropertyTypes() {
        tDriver.myPropertyTypes(propertyTypes);
    }

    public void selectPropertyAdjectives() {
        tDriver.myPropertyAdjectives(propertyAdjectives);
    }

    public void selectTheSegment() {
        tDriver.mySegment(segment);
    }


    public void clickOnTheEditPlanLin() {
        tDriver.myEditPlan(editPlan);
    }

    public void clickTheConfirmButtonOnAnAlertPopup() {
        tDriver.myClick(confirmButtonAlertPopup);
    }

    public void clickTheCancelButtonToDismissTheAlert() {
        tDriver.myClick(cancelButtonAlertPopup);
    }

    public void enterDeveloperAdvertisingName(String arg0) {
        tDriver.myEnter(developerName,arg0);
    }
}
