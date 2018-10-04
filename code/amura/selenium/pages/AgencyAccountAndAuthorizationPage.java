package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 10/8/18.
 */
public class AgencyAccountAndAuthorizationPage extends BasePage {

    UIElement connectedAccounts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar\"]/div/a[6]/span");
    UIElement connectGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/div/div[1]/div/div/a[1]  ");
    UIElement connectFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/div/div[2]/div/div/a[1]");
    UIElement authorizeFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"/html/body/div[4]/div/div/div[3]/button[2]");
    UIElement authorizeGoogle = new UIElement(UIType.Button, UILocatorType.Xpath,"/html/body/div[4]/div/div/div[3]/button[2]");
    UIElement emailFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"email\"]");
    UIElement passwordFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"pass\"]");
    UIElement login = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"loginbutton\"]");
    UIElement editAgency = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar\"]/div/a[1]");
    UIElement businessId = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/form/div[1]/div[1]/div[3]/div/input");
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/form/div[2]/div/div/a");
    UIElement accountFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-select-ad-accounts-container\"]");
    UIElement adAccounts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar\"]/div/a[4]");
    UIElement newAccount = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new-client-ad-account\"]");
    UIElement clientAccountFacebook = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"select2-facebook-client-ad-accounts-container\"]");
    UIElement add = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new-client-ad-account-modal\"]/div/div/div/div[3]/button[2]");

    public void clickConnectedAccounts() {
        tDriver.myClick(connectedAccounts);
    }

    public void clickConnectButtonToConnectToTheGoogleAccount() {
        tDriver.myClick(connectGoogle);
    }

    public void clickConnectButtonToConnectToTheFacebookAccount() {
        tDriver.myClick(connectFacebook);
    }

    public void clickAuthorizeButtonToAuthorizeAnAccount() {
        tDriver.myFacebookAuthorize(authorizeFacebook);
    }

    public void clickAuthorizeButtonToAuthorizeGoogleAccount() {
        tDriver.myGoogleAuthorize(authorizeGoogle);

    }

    public void enterEmailAddressFacebook(String arg0) {
        tDriver.myEnter(emailFacebook,arg0);
    }

    public void enterPasswordFacebook(String arg0) {
        tDriver.myEnter(passwordFacebook,arg0);
    }

    public void clickLoginButton() {
        tDriver.myClick(login);
    }

    public void clickEditAgency() {
        tDriver.myClick(editAgency);
    }

    public void enterFacebookBusinessId(String arg0) {
        tDriver.myEnter(businessId,arg0);
    }

    public void clickSubmitButtonEditAgency() {
        tDriver.myEditAgencySubmit(submit);
    }

    public void clickAdAccounts() {
        tDriver.myClick(adAccounts);
    }

    public void selectFacebookFromTheDropdown() {
        tDriver.myAgencyFacebookAccount(accountFacebook);
    }

    public void clickNewAccountButton() {
        tDriver.myClick(newAccount);
    }

    public void selectClientAdAccount() {
        tDriver.myFacebookClientAccount(clientAccountFacebook);
    }

    public void clickAddButton() {
        tDriver.myClick(add);
    }
}
