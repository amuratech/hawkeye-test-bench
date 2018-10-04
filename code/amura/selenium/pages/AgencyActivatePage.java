package amura.selenium.pages;

import utilities.UIElement;
import utilities.UILocatorType;
import utilities.UIType;

/**
 * Created by amura on 9/8/18.
 */
public class AgencyActivatePage extends BasePage {

    UIElement menuIcon = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"container\"]/header/div/div/div/div[1]/div[1]/div");
    UIElement agencies = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar\"]/div/a[7]");
    UIElement activateIcon = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"DataTables_Table_1\"]/tbody/tr/td[6]/a[2]/i");
    UIElement agencyActivate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/div[1]/div[1]/button/i");
    UIElement accountConfirm = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"content-container\"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/div[1]/div[1]/button/i");

    public void clickMenuIcon() {//*[@id="DataTables_Table_0"]/tbody/tr[2]/td[6]/a[2]/i
        tDriver.myClicking(menuIcon);
    }

    public void selectAgencies() {
        tDriver.myClick(agencies);
    }

    public void clickActivateIconToActivateTheClient() {
        tDriver.myClick(activateIcon);
    }

    public void applyFilterToSearchAnAgencyName(String arg0) {
        tDriver.myAgencyActivate(arg0,agencyActivate);


    }

//    public void confirmAnAccount() {
//        tDriver.myConfirmAccount(accountConfirm);
//    }
}
