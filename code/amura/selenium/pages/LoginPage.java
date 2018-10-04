package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amuraqa on 13/12/17.
 */
public class LoginPage extends BasePage{

    UIElement signIn = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_user\"]/div[4]/div/div/button");
    UIElement username = new UIElement(UIType.Button, UILocatorType.ID,"user_email");
    UIElement password = new UIElement(UIType.Button, UILocatorType.ID,"user_password");
    UIElement selectClient = new UIElement(UIType.Button, UILocatorType.ID,"select2-client_id-container");
    UIElement submit = new UIElement(UIType.Button, UILocatorType.ID,"user_password");
    UIElement mediaPlan = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"container\"]/header/div/div/div/div[1]/div[1]/div");
    UIElement signOut = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"container\"]/header/div/div/div/div[3]/div/div/a/span");

    public void launchTheURL(String arg0) {
        tDriver.myGet("http://staging.hawkeye.sell.do/users/sign_in");
    }

    public void userEnterAnd(String arg0, String arg1) {
        tDriver.myLoginCredentials(username,arg0,password,arg1);
    }

    public void clickOnSignInButton() {
        tDriver.myClick(signIn);
    }

    public void userShouldBeAbleToLoginThePage() {
        tDriver.myLoginMessage();
    }

    public void iSelectTheClientToLogin() {
        tDriver.myClient(selectClient);
    }

    public void clickSubmitButton() {
        tDriver.myClick(submit);
    }

    public void userShouldBeLoggedIn() {
        tDriver.myPage();
    }

    public void enterEmailId(String arg0) {
        tDriver.myEnter(username,arg0);
    }

    public void enterPassword(String arg0) {
        tDriver.myEnter(password,arg0);
    }

    public void clickOnMediaPlan() {
        tDriver.myEntering(mediaPlan);
    }

    public void signOut() {
        tDriver.mySignOut(signOut);
    }
}
