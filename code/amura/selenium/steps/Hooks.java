package amura.selenium.steps;


import amura.selenium.cucumber.Email;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;


import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.io.Zip;
import org.testng.asserts.SoftAssert;
//import ru.yandex.qatools.ashot.AShot;
//import ru.yandex.qatools.ashot.Screenshot;
//import ru.yandex.qatools.ashot.screentaker.ViewportPastingStrategy;

import javax.mail.MessagingException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;



/**
 * Created by amuraqa on 13/12/17.
 */
public class Hooks {

    ExtentReports extent;
    ExtentTest logger;
    LogStatus logStatus;
//    TestContext testContext;

    public Hooks(){
    }

    public static String getScreenshot(WebDriver driver, String screenshotName) throws Exception {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        String destination = System.getProperty("/home/amura/Downloads/HawkeyeSeleniumReports") + "/FailedTestsScreenshots/" + screenshotName + dateName + ".png";
        File finalDestination = new File(destination);
        FileUtils.copyFile(source, finalDestination);
        return destination;
    }

    @Before
    public void beforeRunning(Scenario scenario) {
        System.out.println("\nRunning scenario:- " + scenario.getName());
    }

    @After
    public void afterRunning(Scenario scenario){
        System.out.println("\nScenario Status:" + scenario.getStatus());

    }


//    @AfterClass
//    public void afterRunning(Scenario scenario) throws Exception {
//      ---------For taking screenshot after every scenario-----------------
//        {
//            File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//            final BufferedImage image = screenshot.getImage();
//            String filename = new SimpleDateFormat("yyyyMMddhhmmss'.txt'").format(new Date());
//            File dest = new File("/home/amuraqa/Desktop/Software/Screenshot/Content/ContentPrintMedia/" + scenario.getName());
//            try {
//                ImageIO.write(image, "PNG", new File("/home/amuraqa/Desktop/Software/Screenshots/Hawkeye/Login/" +
//                filename + " " + scenario.getName()));
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }

//-------------- For taking screenshot of entire page, if there is scroll in the page----------
//            final Screenshot screenshot = new AShot().shootingStrategy(
//                new ViewportPastingStrategy(0)).takeScreenshot(driver);
//        final BufferedImage image = screenshot.getImage();
//        String filename = new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss z").format(new Date());
//        try {
//            ImageIO.write(image, "PNG", new File("/home/amura/Downloads/Hawkeye/Start" +
//                    filename + " " + scenario.getName()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//

//
//    @After(order = 1)
//    public void afterScenario(Scenario scenario) {
//        if (scenario.isFailed()) {
//            String screenshotName = scenario.getName().replaceAll(" ", "_");
//            try {
//                //This takes a screenshot from the driver at save it to the specified location
//                File sourcePath = ((TakesScreenshot) testContext.getWebDriverManager().getDriver()).getScreenshotAs(OutputType.FILE);
//
//                //Building up the destination path for the screenshot to save
//                //Also make sure to create a folder 'screenshots' with in the cucumber-report folder
//                File destinationPath = new File(System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/" + screenshotName + ".png");
//
//                //Copy taken screenshot from source location to destination location
//                Files.copy(sourcePath, destinationPath);
//
//                //This attach the specified screenshot to the test
//                Reporter.addScreenCaptureFromPath(destinationPath.toString());
//            } catch (IOException e) {
//            }
//        }
//    }

    @After
    public void afterRunning() throws MessagingException, IOException {
        ZipUtils.zip();
        Email.sendMail("piyush@amuratech.com","sanket.r@amuratech.com");
    }


//    @After
//    public void passTest(){
//        logger = extent.startTest("passTest");
//        Assert.assertTrue(true);
//        //To generate the log when the test case is passed
//        logger.log(LogStatus.PASS, "Test Case Passed is passTest");
//    }
//
//    @After
//    public void failTest(){
//        logger = extent.startTest("failTest");
//        logger.log(LogStatus.PASS, "Test Case (failTest) Status is passed");
//    }
//
//    @After
//    public void softAssertion(){
//        SoftAssert softAssert = new SoftAssert();
//        softAssert.assertNull("assertion");
//        System.out.println("We are using Soft assertion in this method,"
//                + " so this line of code will also be executed even if "
//                + "the assetion fails.Wherever we want to execute full "
//                + "testcase/method, we should use SoftAssertion");
//        softAssert.assertAll();
//    }

}
