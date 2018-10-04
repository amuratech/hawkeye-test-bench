package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 26/7/18.
 */
public class AgencySignUpPage extends BasePage {


    UIElement signUpAsAgency = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_user\"]/div[5]/div/div/a[2]");
    UIElement nameAgency = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"agency_name\"]");
    UIElement firstName = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"agency_first_name\"]");
    UIElement lastName = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"agency_last_name\"]");
    UIElement email = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"agency_email\"]");
    UIElement phoneNumber = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"agency_phone_number\"]");
    UIElement signUpButton = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_agency\"]/div[2]/div/div/input");
    UIElement signedUp = new UIElement(UIType.Button,UILocatorType.Xpath,"");
    UIElement url = new UIElement(UIType.Button,UILocatorType.Xpath,"");


    public void clickSignUpAsAnAgency() {
        tDriver.myClick(signUpAsAgency);
    }

    public void enterNameOfTheAgency(String arg0) {
        tDriver.myEnter(nameAgency,arg0);
    }

    public void enterFirstName(String arg0) {
        tDriver.myEnter(firstName,arg0);
    }

    public void enterLastName(String arg0) {
        tDriver.myEnter(lastName,arg0);
    }

    public void enterEmail(String arg0) {
        tDriver.myEnter(email,arg0);
    }

    public void enterPhoneNumberAgency(String arg0) {
        tDriver.myEnter(phoneNumber,arg0);
    }

    public void clickSignUpButton() {
        tDriver.myClick(signUpButton);
    }

    public void userShouldBeSignedUp() {
        tDriver.mySignedUp(signedUp);
    }

    public void navigateToTheURL(String arg0) {
        tDriver.myURL(arg0,url);

    }
}
