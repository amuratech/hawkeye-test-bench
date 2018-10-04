package amura.selenium.driver;

import gherkin.formatter.Reporter;
//import org.hamcrest.generator.qdox.tools.QDoxngter;
//import org.jcp.xml.dsig.internal.SignerOutputStream;
import org.openqa.selenium.*;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.UIElement;
import utilities.UILocatorType;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.WatchEvent;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

import static java.awt.SystemColor.window;

/**
 * Created by amuraqa on 13/12/17.
 */
public class TestDriver {

    public static TestDriver tDriver;
    public static WebDriver driver;
    public static RemoteWebDriver rDriver;

    private TestDriver() {
        System.setProperty("webdriver.chrome.driver", "/home/amura/Downloads/Software/chromedriver");
        if (driver == null) {
            driver = new ChromeDriver();
            driver.manage().window().maximize();    //------- To maximize the screen------

        }
    }

    public static TestDriver getDriver() {
        if (tDriver == null) {
            tDriver = new TestDriver();
        }
        return tDriver;
    }

    private By myFindBy(UIElement uiElement) {
        By by = null;

        if (uiElement.getUiLocatorType() == UILocatorType.ID) {
            by = By.id(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.Name) {
            by = By.name(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.Xpath) {
            by = By.xpath(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.LinkText) {
            by = By.linkText(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.PartialLinkText) {
            by = By.partialLinkText(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.TagName) {
            by = By.tagName(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.ClassName) {
            by = By.className(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.CSS) {
            by = By.cssSelector(uiElement.getLocator());
        }

        return by;
    }

    public void myGet(String s) {
        driver.get(s);
    }


    public void myEnter(UIElement uiElement, String arg0) {

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click();
        actions.sendKeys(arg0);
        actions.build().perform();
    }

    public void myClicking(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
    }

    public void myLoginCredentials(UIElement uiElement, String arg0, UIElement password, String arg1) {
        driver.findElement(myFindBy(uiElement)).sendKeys(arg0);
        driver.findElement(myFindBy(password)).sendKeys(arg1);
    }

    public void myLoginMessage() {
//        if (driver.getCurrentUrl().equalsIgnoreCase(
//                "http://staging.hawkeye.sell.do/client/real_estate/mp/all")) {
//            System.out.println("Successfully logged in");
//            System.out.println("");
//        } else {
//            System.out.println("Login failed");
//            System.out.println("");
//        }
        if (driver.getTitle().contains("/start"))
            //Pass
            System.out.println("\nUser is on Start page");
        else if (driver.getTitle().contains("/product"))
            System.out.println("\nUser is on Product page");
        else if (driver.getTitle().contains("/creative"))
            System.out.println("\nUser is on Creative page");
        else if (driver.getTitle().contains("/precise_control"))
            System.out.println("\nUser is on Precise Targeting page");
        else if (driver.getTitle().contains("/tracking"))
            System.out.println("\nUser is on Tracking page");
        else if (driver.getTitle().contains("/budgets"))
            System.out.println("\nUser is on Budget page");
        else if (driver.getTitle().contains("/targets"))
            System.out.println("\nUser is on Goals page");
        else if (driver.getTitle().contains("/review"))
            System.out.println("\nUser is on Review page");
            //Fail
        else
            System.out.println("\nUser is not logged in");
    }

    public void myClientPage() {
        if (driver.getCurrentUrl().equalsIgnoreCase(
                "http://staging.hawkeye.sell.do/client/real_estate/mp/all/")) {
            System.out.println("Successfully loged in");
            System.out.println("\n");
        } else {
            System.out.println("Login failed");
            System.out.println("\n");
            try {
                Thread.sleep(4000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public void myClient(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-client_id-result-nxjv-')]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    //    --------For clicking----------
    public void myClick(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myDateRange(UIElement uiElement) {
//        -------For selecting the start date----------
        WebElement element = driver.findElement(myFindBy(uiElement));
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 1);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//       -------------For selecting the end date-----------
        WebElement element2 = driver.findElement(By.name("media_plan[ends_on]"));
        element2.clear();
        SimpleDateFormat df2 = new SimpleDateFormat("dd/MM/YYYY");
        Date dt2 = new Date();
        Calendar cl2 = Calendar.getInstance();
        cl2.setTime(dt2);
        cl2.add(Calendar.DAY_OF_YEAR, 4);
        dt2 = cl2.getTime();
        String str2 = df2.format(dt2);
        element2.sendKeys(str2);
    }

    public void myAdwordsAccount(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Amura")
                .sendKeys(Keys.ENTER)
                .build();
        builder.perform();
//        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-media_planmicro_campaign_settingsAdwordsad_account_id-6w-results\"]/li"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myAdwordsCampaignType(UIElement uiElement) {
//     -----------For Display----
//        driver.findElement(myFindBy(uiElement)).click();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        List<WebElement> els = driver.findElements(myFindBy(uiElement));//input[@type='checkbox']
        for (WebElement el : els) {
            if (!el.isSelected()) {
                el.click();
            }
        }

    }

    public void myFacebookCampaignType(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
    }

    public void myFacebookAccount(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("FB")
                .sendKeys(Keys.ENTER)
                .build();
        builder.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }

//        int size = driver.findElements(myFindBy(uiElement)).size();
//        driver.findElements(myFindBy(uiElement)).get(size - 4).click();

    }

    public void myProductPageMessage() {
        String request_uri = null;
        String url = driver.getCurrentUrl();

        if (url.startsWith("http://")) {
            request_uri = url.substring(14).split("/")[5];
        } else {
            request_uri = url.split("/")[1];
        }
        System.out.println("User is on product page:" + request_uri + "\n");
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myNext(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        WebElement next = driver.findElement(myFindBy(uiElement));
        next.click();
    }

    public void myProject(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Glorious Lifestyle")
//                .sendKeys(Keys.ENTER)
                .build();
        builder.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-productknowledge_base_project_id-')]/li[1]"))).click().perform();
    }


    //*[@id="select2-productknowledge_base_project_id-02-results"]/li[1]
    public void myAutoFilledFields(UIElement uiElement) {
        String element = driver.findElement(myFindBy(uiElement)).getAttribute("innerHTML");
        System.out.println("Project Advertising Name is:" + element);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String element2 = driver.findElement(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div[2]/div/div[2]/div[2]/input")).getAttribute("innerHTML");
        System.out.println("\nDeveloper Advertising Name is:" + element2);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String element3 = driver.findElement(By.xpath("//*[@id=\"product_city\"]")).getAttribute("innerHTML");
        System.out.println("\nProject City is:" + element3);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element4 = driver.findElement(By.xpath("//*[contains(@id,'select2-productknowledge_base_micro_market_name-')]"));
        System.out.println("\nMicromarket is:" + element4.getText());
    }

    public void myProjectStage(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-productproject_stage-')]/li[5]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
//        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-productproject_stage-')]/li[5]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//        }
    }

    public void myConfigurations(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
//        List<WebElement> els = driver.findElements(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[2]/div[2]/div/div[1]/div"));//*[@id="page-content"]/div/div/div[1]/div/div[1]/div/div[2]/div/div/div/form/div/div[2]/div[2]/div/div[1]/div
//        for ( WebElement el : els ) {
//            if ( !el.isSelected() ) {
//                el.click();
//            }
//        }
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//*[@id=\"product\"]/div/div/div/form/div/div[2]/div[2]/div/div/div[1]/div/label[9]/i")).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myEditLink(UIElement uiElement) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myProductPage(UIElement uiElement) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myPropertyTypes(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Penthouse")
                .sendKeys(Keys.ENTER)
                .build();
        builder.perform();
    }

    public void myPropertyAdjectives(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Luxurious")
                .sendKeys(Keys.ENTER)
                .build();
        builder.perform();
    }

    public void mySegment(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myIncludedLocation(UIElement uiElement) {
        try {
            Thread.sleep(8000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Re")
                .build();
        builder.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element2 = driver.findElement(By.xpath("//*[contains(@id,'select2-location-')]/li[1]"));
        Action builder2 = actions
                .moveToElement(element2)
                .click()
                .build();
        builder2.perform();
    }

    public void myExcludedLocation(UIElement uiElement) {
        try {
            Thread.sleep(8000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Re")
                .build();
        builder.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element2 = driver.findElement(By.xpath("//*[contains(@id,'select2-location-')]/li[1]"));
        Action builder2 = actions
                .moveToElement(element2)
                .click()
                .build();
        builder2.perform();
    }

    public void myDefaultSetting(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[3]/div/form/div/div[2]/div[2]/div[1]/div[1]/div/label"));
        if (!element.isSelected()) {
            element.click();
            System.out.println("Checkbox is not selected and now it is clicked");
        } else {
            System.out.println("Checkbox is selected");
        }
    }

    public void myExclude(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[3]/div/form/div/div[1]/div[2]/div[1]/div/div/div[1]/div/ul/li[2]"))).click().perform();//*[@id="select2-productconfigurations1RKproperty_types-ur-result-g8h5-villa"]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myAudienceTab(UIElement uiElement) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    // For verifying the pages with the titles
    public void myPage() {
        String request_uri = null;
        // Current URL of the page
        String url = driver.getCurrentUrl();
        // Start Page
        if (url.endsWith("/start")) {
            // split will print part of URL after 'real_estate/'
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Start Page:" + request_uri);

        }
        // Product Page
        else if (url.endsWith("/product")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Product Page:" + request_uri);

        }
        // Creative Page
        else if (url.endsWith("/creative")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Creative Page:" + request_uri);

        }
        // Precise Targeting Page
        else if (url.endsWith("/precise_control")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Precise Targeting Page:" + request_uri);

        }
        // Tracking Page
        else if (url.endsWith("/tracking")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Tracking Page:" + request_uri);

        }
        // Budget Page
        else if (url.endsWith("/budgets")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Budgets Page:" + request_uri);

        }
        // Goals Page
        else if (url.endsWith("/targets")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Goals Page:" + request_uri);
        }
        // Review Page
        else if (url.endsWith("/review")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Review Page:" + request_uri);
        }
        // Reverse Sync Page
        else if (url.endsWith("/reverse_syncing")) {
            request_uri = url.substring(7).split("real_estate/")[1];
            System.out.println("\nUser is on Reverse Sync Page:" + request_uri);
        } else {
            System.out.println("User is not logged in");
        }
    }

    public void myPopup(UIElement uiElement) {
        driver.switchTo().activeElement();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).doubleClick().build().perform();
    }

    public void myInterest(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).sendKeys("Sports").perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-')]/li[1]"))).click().perform();//*[@id="select2-6n8k-results"]/li[1]
    }

    public void myGender(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        if (!element.isSelected()) {
            element.click();
            System.out.println("All is selected");
        }
    }

    public void myAge(UIElement uiElement) {
//        ----------For Minimum Age-------------
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planfacebook_mcsage_min-')]/li[1]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_min-hu-results"]/li[17]
        try {//*[@id="select2-media_planfacebook_mcsage_min-ah-results"]/li[1]
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }

//        --------For Maximum Age----------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planfacebook_mcsage_max-')]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_max-7n-container"]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planfacebook_mcsage_max-')]/li[50]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_max-7n-results"]/li[48]

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myDevices(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        if (!element.isSelected()) {
//            element.click();
            System.out.println("\nDevice is selected");
        }
    }

    public void myBidding(UIElement uiElement) {
        List<WebElement> drop = driver.findElements(myFindBy(uiElement));
        Iterator<WebElement> i = drop.iterator();
        while (i.hasNext()) {
            WebElement row = i.next();
            System.out.println(row.getText());
        }
        Actions act = new Actions(driver);

//        ------For selecting CPM--------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0pay_for')]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0pay_for')]/li[1]"))).click().perform();//*[@id="select2-productconfigurations1RKproperty_types-ur-result-g8h5-villa"]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        System.out.println("\nCPM is selected");

//       -------For selecting Manual Bidding Type-------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type')]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type')]/li[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        System.out.println("Manual bidding is selected");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ---------For entering bidding amount-----------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[7]/div[2]/div[2]/div[2]/div/input"))).click();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        act.sendKeys("1000");
        act.perform();
        System.out.println("Amount has entered");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ----------For selecting Automatic Bidding Type-----------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type-')]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type-')]/li[2]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0bidding_type-xu-results"]/li[2]
        System.out.println("Automatic bidding is selected");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ---------For selecting CPC as Bid on-------------------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0pay_for-')]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0pay_for-bv-container"]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0pay_for-')]/li[2]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0pay_for-bv-results"]/li[2]
        System.out.println("CPC is selected");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//  -----------For selecting Manual Bidding-----------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type')]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type')]/li[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        System.out.println("Manual bidding is selected");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ---------For entering bidding amount-----------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content\"]/div/div/div[1]/div/div[1]/div/div[4]/div/form/div/div[1]/div[2]/div[7]/div[2]/div[2]/div[2]/div/input"))).click();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        act.sendKeys("1000");
        act.perform();
        System.out.println("Amount has entered");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        -----------For selecting Automatic bidding ---------------
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type-')]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes0bidding_type-')]/li[2]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0bidding_type-xu-results"]/li[2]
        System.out.println("Automatic bidding is selected");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myStatus(UIElement uiElement) {
        try {
            Thread.sleep(8000);
        } catch (InterruptedException e) {
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();//*[@id="select2-4qhn-result-u9wv-All"]
        }//*[@id="select2-4qhn-result-2n98-draft"]
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-')]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_min-hu-results"]/li[17]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }

    }

    public void myAssetFacebook(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));

        // Click 'Select creative' button
        driver.findElement(myFindBy(uiElement)).click();
        Actions act = new Actions(driver);

        // Select creatives from the list
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-group-form\"]/div/div[2]/div/div[5]/div/div/div[2]/div/div/div/div[2]/div[1]/div/div/label/div[1]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_min-hu-results"]/li[17]

        // Click save button
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-group-form\"]/div/div[2]/div/div[5]/div/div/div[3]/button[2]"))).click().perform();
    }

    public void myUpload(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        element.sendKeys("/home/amuraqa/Desktop/Sites/505145-dhoni-m.jpg");// Enter the path
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void myCreative(UIElement uiElement, String arg0) {
        int size = driver.findElements(myFindBy(uiElement)).size();
        driver.findElements(myFindBy(uiElement)).get(size - 1).sendKeys(arg0);
    }

    public void myAsset2(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        Actions act = new Actions(driver);
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-gallery-img-5a3a329991b783650bb6db7a\"]"))).click().perform();//*[@id="select2-media_planmicro_campaign_settings_attributes0age_min-hu-results"]/li[17]
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-asset-from\"]/div[2]/button[2]"))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
        }
        WebElement element = driver.findElement(By.xpath("//*[@id=\"creative-asset-from\"]/div[2]/button[2]"));
        if (element.isDisplayed()) {
            System.out.println("Asset has been selected");
        } else if (!element.isDisplayed())
            System.out.println("Asset has not been selected");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myCreativeGroup(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-oc_creative_group_ids-results\"]/li"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myPress(UIElement uiElement) {
        try {
            Thread.sleep(7000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myEntering(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myAddMediaPlan(UIElement uiElement) {
//        WebDriverWait wait=new WebDriverWait(driver, 30);
//        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        actions.moveToElement(element).click().perform();
    }

    //    Page for Facebook account- Using for loop as the element is stale
    public void myFacebookPage(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 6);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        for (int i = 0; i <= 1; i++) {
            try {
                WebElement element = driver.findElement(myFindBy(uiElement));
                Actions actions = new Actions(driver);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                }
                Action builder = actions
                        .moveToElement(element)
                        .click()
                        .sendKeys("Dummy")
                        .build();
                builder.perform();
                actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-ad_facebook_page-')]/li"))).click().perform();
                break;
            } catch (Exception e) {
                System.out.println((e.getMessage()));
            }
        }
    }

    public void myEditPlan(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }

        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(7000);
        } catch (InterruptedException e) {
        }
    }

    public void myCreativePage(UIElement uiElement) {
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myFacebookDefaultAccordion(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myMarketingPitchAccordion(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myGoogleIncludeLocation(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Pune")
                .build();
        builder.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-locationsinclude-')]/li[1]/ul/li[1]"))).click().perform();
    }

    public void myGoogleExcludeLocation(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).sendKeys("Pune").perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-locationsinclude-5s-results\"]/li[1]/ul/li[1]\n"))).click().perform();

    }

    public void myFacebookIncludeLocation(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys("Pune")
                .build();
        builder.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }//*[@id="select2-locationsinclude-sl-results"]/li[1]/ul/li
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-locationsinclude-')]/li[1]/ul/li"))).click().perform();//*[@id="select2-locationsinclude-ka-results"]/li[1]/ul/li
    }

    public void myFacebookBidOn(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planfacebook_mcspay_')]"))).click().perform();

    }

    public void myFacebookBidding(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {//*[@id="select2-media_planfacebook_mcsbidding_type-wy-results"]/li[2]
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planfacebook_mcsbidding_type-')]/li[2]"))).click().perform();

    }

    public void myPreciseTargetingTab(UIElement uiElement) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myTrackingTab(UIElement uiElement) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void myGoogleLeadType(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-default-lead-type-adwords_display-results\"]/li[2]"))).click().perform();

    }


    public void myFacebookTrackingPixel(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-media_planmicro_campaign_settings_attributes1conversion_pixel_id-')]/li"))).click().perform();

    }

    public void myFacebookDefaultLeadType(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-default-lead-type-facebook_conversion-results\"]/li[2]"))).click().perform();

    }

    public void myGoogleSearchAddDetails(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"budgets\"]/div/div[2]/div/div[1]/div[4]/ul/li[1]/a"))).click().perform();

//        WebElement element = driver.findElement(myFindBy(uiElement));
//        JavascriptExecutor js = (JavascriptExecutor) driver;
//        js.executeScript("window.scrollTo(0,0");
//        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);

        // Get window id
//        Set<String> handle= driver.getWindowHandles();//Return a set of window handle
//        System.out.println(handle);
//        for (String handle2 : driver.getWindowHandles()){
//            System.out.println(handle2);
//            driver.switchTo().window(handle2);
//        }

    }

    public void myGoogleSearchCategories(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_categories-results\"]/li[1]"))).click().perform();

    }

    public void myGoogleSearchCommunications(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_communication_ids-results\"]/li"))).click().perform();

    }

    public void myGoogleSearchRemarketingLists(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_remarketing_lists-results\"]/li[4]"))).click().perform();

    }

    public void myBudgetTab(UIElement uiElement) {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myDefaultTrackingCheckbox(UIElement uiElement) {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myCampaignName(UIElement uiElement, String arg0) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.sendKeys(arg0);
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myCampaignBidAmount(UIElement uiElement, String arg0) {

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.sendKeys(arg0);
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void myFacebookCampaignName(UIElement uiElement, String arg0) {

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys(arg0)
                .build();
        builder.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myFacebookCommunications(UIElement uiElement) {

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {//*[@id="select2-virtual_campaign_communication_ids-results"]/li[1]
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-virtual_campaign_communication_')]/li[1]"))).click().perform();
    }

    public void myFacebookPlatformPlacement(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_platform_placements-results\"]/li[3]"))).click().perform();
    }

    public void myFacebookBidAmount(UIElement uiElement, String arg0) {

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(element)
                .click()
                .sendKeys(arg0)
                .build();
        builder.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myFacebookLeadAdForm(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_lead_ad_form_id-results\"]/li[1]"))).click().perform();

    }

    public void myFacebookAddDetails(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"budgets\"]/div/div[2]/div/div[1]/div[4]/ul/li[2]/a"))).click().perform();

    }

    public void myFacebookCampaignCustomAudiences(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_audiences_custom_audiences-results\"]/li[8]"))).click().perform();
    }

    public void myGoalsGoogleSearchAccordion(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myGoalsTab(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReviewTab(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReviewFacebookLeadGenAccordion(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReviewGoogleSearchAccordion(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myCreativeImageAd(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"new-creative-group-display\"]/ul/li[1]"))).click();
        actions.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myGoogleAsset(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));

        // Click 'Select creatives' button
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();

        // Select creative from the list
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-asset-gallery-from\"]/div/div[2]/div[1]/div/div/label/div[1]"))).click().perform();
//        actions.perform();

        // Click save button
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"creative-group-adwords-display-accordian\"]/div[4]/div/div/div[2]/div/div/div/div/div/div[3]/button[2]"))).click();//*[@id="creative-group-adwords-display-accordian"]/div[4]/div/div/div[2]/div/div/div/div/div/div[3]/button[2]
        actions.perform();

    }

    public void myMarketingPitchMarketingImages(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-oc_marketing_images-results\"]/li/div/div/div[2]/p"))).click();
        actions.perform();

    }

    public void myBudgetFacebookOS(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_os-results\"]/li[2]"))).click();
        actions.perform();

    }

    public void myBudgetFacebookPublisher(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_publisher_platforms-results\"]/li[1]"))).click();
        actions.perform();

    }

    public void mySignedUp(UIElement uiElement) {
    }

    public void myTimeZone(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-clienttime_zone-')]/li[86]"))).click();
        actions.perform();


    }

    public void myAdAccount(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-clientad_account_ids-')]/li[3]"))).click();
        actions.perform();


    }

    public void myUser(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-clientuser_ids-')]/li[14]"))).click();
        actions.perform();


    }

    public void myCreativeResponsiveAd(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"new-creative-group-display\"]/ul/li[2]/a"))).click();
        actions.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myFacebookPreciseTargetingAccordion(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,-400)", "");
    }


    public void myGoogleBudgetUserInterests(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"new-creative-group-display\"]/ul/li[2]/a"))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myGoogleBudgetTopics(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-virtual_campaign_topics-results\"]/li[1176]"))).click();
        actions.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myURL(String arg0, UIElement uiElement) {
        driver.navigate().to(arg0);
    }

    //    Activating an agency by searching through 'Name'
    public void myAgencyActivate(String arg0, UIElement uiElement) {

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Click the filter icon
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Select 'Name' from the dropdown
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"content-container\"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[1]/div/form/div/div/div/div[2]/span/span[1]/span"))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }//*[@id="select2-filter_segment_0_comparator_left-results"]/li
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-filter_segment_')]/li"))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Enter name of an agency
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"content-container\"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[1]/div/form/div/div/div/div[4]/input")));
        actions.click();
        actions.sendKeys(arg0);
        actions.build().perform();
        // Click 'Apply' button
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"content-container\"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[2]/button[3]"))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMail(UIElement uiElement) {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        List<WebElement> unreademeil = driver.findElements(By.xpath("//*[@class='zF']"));

// Mailer name for which i want to check do i have an email in my inbox
        String MyMailer = "Your contest joining is confirmed";

// real logic starts here
        for (int i = 0; i < unreademeil.size(); i++) {
            if (unreademeil.get(i).isDisplayed() == true) {
                // now verify if you have got mail form a specific mailer (Note Un-read mails)
                // for read mails xpath loactor will change but logic will remain same
                if (unreademeil.get(i).getText().equals(MyMailer)) {
                    System.out.println("Yes we have got mail form " + MyMailer);
                    // also you can perform more actions here
                    // like if you want to open email form the mailer
                    driver.findElement(myFindBy(uiElement)).click();
                    break;
                } else {
                    System.out.println("No mail form " + MyMailer);
                }
            }
        }
    }

    public void myFacebookAuthorize(UIElement uiElement) {
        String parentWindowHandler = driver.getWindowHandle(); // Store your parent window
        String subWindowHandler = null;

        Set<String> handles = driver.getWindowHandles(); // get all window handles
        Iterator<String> iterator = handles.iterator();
        while (iterator.hasNext()) {
            subWindowHandler = iterator.next();
        }
        driver.switchTo().window(subWindowHandler); // switch to popup window
        // Now you are in the popup window, perform necessary actions here
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(myFindBy(uiElement)).click();
//        driver.switchTo().window(parentWindowHandler);
    }

    public void myGoogleAuthorize(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Click the filter icon
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myAgencyFacebookAccount(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-select-ad-accounts-results\"]/li[2]"))).click();
        actions.perform();

    }

    public void myEditAgencySubmit(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
        driver.navigate().refresh();
    }

    public void myFacebookClientAccount(UIElement uiElement) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        actions.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-facebook-client-ad-accounts-results\"]/li[2]"))).click();
        actions.perform();
    }

    public void myConfirmAccount(UIElement uiElement) {

    }


    public void myGenerateCampaign(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //*[@id="review"]/div/div[1]/div[1]/div[1]/h4/a/span[2]
    //*[@id="review"]/div/div[1]/div[2]/div[1]/h4/a/span[2]
    public void myStageChange(UIElement uiElement) {

        for (int x = 0; x <= 6; x++) {
            driver.navigate().refresh();
            try {
                Thread.sleep(6000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        if (driver.getPageSource().contains("Ready")) {
            System.out.println("\nReview page status- Status is changed to Ready");
        } else {
            System.out.println("\nReview page status- Status is not changed to Ready");
        }

        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement el : list) {
            String text = el.getText();
            System.out.println("\nReview page status-" + text);
        }
    }

    public void myCampaignForGrading(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(driver.findElement(myFindBy(uiElement)))
                .click()
                .sendKeys("Testing campaign")
                .build();
        builder.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-select-campaign-results\"]/li[1]")));
        actions.click().perform();
    }

    public void myAccountForCampaignGrading(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        Action builder = actions
                .moveToElement(driver.findElement(myFindBy(uiElement)))
                .click()
                .sendKeys("test-2")
                .build();
        builder.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"select2-adaccount_select-results\"]/li")));
        actions.click().perform();
    }

    public void myGradingKeywordAnalysis(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        System.out.println("\n" + element.getText());
        element.click();
    }

    private void getScrollUp() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,-400)", "");
    }


    public void myGradingAdAnalysis(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        System.out.println("\n" + element.getText());
        element.click();
    }

    public void myGradingExtenion(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        System.out.println("\n" + element.getText());
        element.click();
    }


    public void myGradingSetupAnalysis(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        System.out.println("\n" + element.getText());
        element.click();
    }


    public void myGradingTracking(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement element = driver.findElement(myFindBy(uiElement));
        System.out.println("\n" + element.getText());
        element.click();
    }

    // Selecting the Reverse Syncing from the side bar
    public void myReverseSyncing(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        // Selecting Home from the sidebar
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Click Reverse Syncing
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"home\"]/a[5]")));
        actions.click().perform();
    }

    public void myRSNewCampaignsFetchAdwords(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        // Open Adwords Accordion
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();

        // Click Fetch button
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"entity-change-panels-list-adwords_display\"]/div/div/div/div[1]/div/div[2]/button[1]")));
        actions.click().perform();//*[@id="save-new-campaigns-adwords_display"]

        // Getting and printing success message
        WebDriverWait ele = new WebDriverWait(driver, 20);
        ele.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"content-container\"]/ul/li")));
        WebElement element = driver.findElement(By.xpath("//*[@id=\"content-container\"]/ul/li"));
        System.out.println("\nNumber of campaigns for Adwords-" + element.getText());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myRSExistingCampaignsAccordionAdwords(UIElement uiElement) {
        for (int x = 0; x <= 6; x++) {
            // Refresh the page for 'Existing Campaigns' accordion to be generated
            driver.navigate().refresh();
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        Actions actions = new Actions(driver);

        // Open Adwords Accordion
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();

        // Checking if 'Existing Campaigns' is generated
        int existingCampaigns = driver.findElements(By.xpath("//*[@id=\"entity-change-panels-list-adwords_display\"]/div[2]/div/div/div[1]/div/div[1]/h4/a")).size();
        if (existingCampaigns == 0) {
            System.out.println("\nAdwords- Existing campaigns accordion is not generated");
        } else {
            System.out.println("\nAdwords- Existing campaigns accordion is generated");
        }
    }

    // Reverse syncing campaigns for Adwords
    public void myRSNewCampaignsSaveAdwords(UIElement uiElement, UIElement uiElement2) {
        Actions actions = new Actions(driver);

        // Select campaign
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Clicking Save button
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(myFindBy(uiElement2)));
        actions.click().perform();
        // Confirming an alert popup
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.cssSelector("body > div.bootbox.modal.bootbox-confirm.show > div > div > div.modal-footer > button.btn.btn-primary")));
        actions.click().perform();
    }

    //
    public void myRSNewCampaignsFetchFacebook(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        // Open Facebook Accordion
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Click Fetch button
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"entity-change-panels-list-facebook_conversion\"]/div/div/div/div[1]/div/div[2]/button[1]")));
        actions.click().perform();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Getting and printing success message
        WebDriverWait ele = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"content-container\"]/ul/li")));
        WebElement element = driver.findElement(By.xpath("//*[@id=\"content-container\"]/ul/li"));
        System.out.println("\nNumber of adsets for Facebook-" + element.getText());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myRSNewCampaignsSaveFacebook(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);

        // Select campaign
        System.out.println("\nBefore selecting campaigns save button is enabled-" + driver.findElement(By.xpath("//*[@id=\"save-new-adsets-facebook_conversion\"]")).isEnabled());
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Clicking save button
        System.out.println("\nAfter selecting campaigns save button is enabled-" + driver.findElement(By.xpath("//*[@id=\"save-new-adsets-facebook_conversion\"]")).isEnabled());
        int ele = driver.findElements(By.xpath("//*[@id=\"save-new-adsets-facebook_conversion\"] ")).size();
        if (ele == 0) {
            System.out.println("\nFacebook- No campaigns are fetched");
        } else {
            actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"save-new-adsets-facebook_conversion\"]")));
            actions.click().perform();
            System.out.println("\nFacebook- Campaign is saved");
        }
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Confirming an alert popup
        actions.moveToElement(driver.findElement(By.cssSelector("body > div.bootbox.modal.bootbox-confirm.show > div > div > div.modal-footer > button.btn.btn-primary")));
        actions.click().perform();
    }

    public void myLinkedInAccount(UIElement uiElement) {
        WebElement element = driver.findElement(myFindBy(uiElement));
        Actions actions = new Actions(driver);
        actions.moveToElement(element);
        actions.click().perform();
//        System.out.println("\n" + element.getText());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'select2-')]/li[2]")));//*[@id="select2-p4kc-results"]/li[2]
        actions.click().perform();
    }

    public void myRSNewCampaignsFetchLinkedIn(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        // Open LinkedIn Accordion
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Click Fetch button
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"campaign-change-panels-list-linkedin_websitetraffic\"]/div/div/div/div[1]/div/div[2]/button[1]")));
        actions.click().perform();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();

            // Getting and printing success message
            WebDriverWait ele = new WebDriverWait(driver, 20);
            ele.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"content-container\"]/ul/li")));
            WebElement element = driver.findElement(By.xpath("//*[@id=\"content-container\"]/ul/li"));
            System.out.println("\nNumber of campaigns for LinkedIn-" + element.getText());
        }

    }

    public void myUniqueEnter(UIElement uiElement) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click();
        actions.sendKeys("Testing" + " " + generateRandomString());
        actions.build().perform();
    }

    public String generateRandomString() {
        String CHAR_LIST =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        int RANDOM_STRING_LENGTH = 10;
        StringBuffer randStr = new StringBuffer();
        for (int i = 0; i < RANDOM_STRING_LENGTH; i++) {
            int number = getRandomNumber();
            char ch = CHAR_LIST.charAt(number);
            randStr.append(ch);
        }
        return randStr.toString();
    }

    private int getRandomNumber() {
        String CHAR_LIST =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        int randomInt = 0;
        Random randomGenerator = new Random();
        randomInt = randomGenerator.nextInt(CHAR_LIST.length());
        if (randomInt - 1 == -1) {
            return randomInt;
        } else {
            return randomInt - 1;
        }
    }

    public void myRSExistingCampaignsAccordionFacebook(UIElement uiElement) {
        for (int x = 0; x <= 6; x++) {
            driver.navigate().refresh();
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Opening an accordion
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();

        // Checking if 'Existing Campaigns' is generated
        int existingCampaigns = driver.findElements(By.xpath("//*[@id=\"entity-change-panels-list-facebook_conversion\"]/div[2]/div/div/div/div[1]/div[1]/h4/a")).size();
        if (existingCampaigns == 0) {
            System.out.println("\nFacebook- Existing campaigns accordion is not generated");
        } else {
            System.out.println("\nFacebook- Existing campaigns accordion is generated");
        }
    }

    public void myCreativeUploadGoogle(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement ele = driver.findElement(myFindBy(uiElement));
        ele.click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement upload = driver.findElement(By.xpath("//*[@id=\"asset_file\"]"));
        upload.sendKeys("/home/amura/Downloads/display_images/display_images/image_600_314.png");
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myAssetUploadFacebook(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        WebElement ele = driver.findElement(myFindBy(uiElement));
        ele.click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement upload = driver.findElement(By.xpath("//*[@id=\"asset_file\"]"));
        upload.sendKeys("/home/amura/Downloads/display_images/display_images/image_600_314.png");

    }


    public void myRSExistingCampaignsFetch(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void mySignOut(UIElement uiElement) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(myFindBy(uiElement)));
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(myFindBy(uiElement)));
        actions.click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"container\"]/header/div/div/div/div[3]/div/div/div/a[4]"))).click().perform();
        }
}