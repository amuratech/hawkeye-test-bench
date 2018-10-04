package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 10/8/18.
 */
public class ConfirmAccountPage extends BasePage {
    UIElement email = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"identifierId\"]");
    UIElement next = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"identifierNext\"]/content/span");
    UIElement password = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"password\"]/div[1]/div/div[1]/input");
    UIElement emailOpen = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\":5s\"]");
    UIElement nextPassword = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"passwordNext\"]/content/span");
    UIElement gmailLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"gbw\"]/div/div/div[1]/div[1]/a");
    UIElement signIn = new UIElement(UIType.Button, UILocatorType.Xpath,"/html/body/nav/div/a[2]");

    public void enterEmailGmail(String arg0) {
        tDriver.myEnter(email,arg0);
    }

    public void clickNext() {
        tDriver.myClick(next);
    }

    public void enterYourPassword(String arg0) {
        tDriver.myEnter(password,arg0);
    }


    public void openAnEmail() {
        tDriver.myMail(emailOpen);
    }

    public void clickNextButtonAfterEnteringPassword() {
        tDriver.myClick(nextPassword);
    }

    public void clickGmailLink() {
        tDriver.myClick(gmailLink);
    }

    public void clickSignIn() {
        tDriver.myClick(signIn);
    }
}
