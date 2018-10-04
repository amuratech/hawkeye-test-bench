package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 26/7/18.
 */
public class NewClientAddPage extends BasePage {

    UIElement addNewClient = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[1]/div/div/a");
    UIElement clientName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[2]/div/form/div[1]/div/input");
    UIElement description = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[2]/div/form/div[2]/div/input");
    UIElement timeZone = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'select2-clienttime_zone-')]");
    UIElement adAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[2]/div/form/div[4]/div[1]/span/span[1]/span/ul");
    UIElement user = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[2]/div/form/div[5]/div[1]/span/span[1]/span/ul");
    UIElement creditAmount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[2]/div/form/div[5]/div[2]/div/input");
    UIElement saveButton = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div[3]/div/div/div/div[3]/button[2]");


    public void clickIconToAddNewClient() {
        tDriver.myClicking(addNewClient);
    }

    public void enterClientName(String arg0) {
        tDriver.myEnter(clientName,arg0);
    }

    public void enterDescriptionNewClient(String arg0) {
        tDriver.myEnter(description,arg0);
    }

    public void selectTimeZone() {
        tDriver.myTimeZone(timeZone);
    }

    public void selectAdAccount() {
        tDriver.myAdAccount(adAccount);
    }

    public void selectUser() {
        tDriver.myUser(user);
    }

    public void enterCreditAmount(String arg0) {
        tDriver.myEnter(creditAmount,arg0);
    }

    public void clickSaveButtonNewClient() {
        tDriver.myClicking(saveButton);
    }

    public void clientShouldBeCreated() {


    }
}
