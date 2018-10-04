package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 26/7/18.
 */
public class ClientSignUpPage extends BasePage{

    UIElement signUpAsClient = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_user\"]/div[5]/div/div/a[1]");
    UIElement firstName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"user_first_name\"]");
    UIElement lastName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"user_last_name\"]");
    UIElement email = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"user_email\"]");
    UIElement businessName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"user_clients_attributes_0_name\"]");
    UIElement signUpButton = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div[2]/div/div/input");

    public void clickSignUpAsAClient() {
        tDriver.myClick(signUpAsClient);
    }

    public void enterFirstNameClient(String arg0) {
        tDriver.myEnter(firstName,arg0);
    }

    public void enterLastNameClient(String arg0) {
        tDriver.myEnter(lastName,arg0);
    }

    public void enterEmailClient(String arg0) {
        tDriver.myEnter(email,arg0);
    }

    public void enterBusinessName(String arg0) {
        tDriver.myEnter(businessName,arg0);
    }

    public void clickSignUpButtonClient() {
        tDriver.myClick(signUpButton);
    }
}
