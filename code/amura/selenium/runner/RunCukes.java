package amura.selenium.runner;

import amura.selenium.config.FileReaderManager;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;
//import gherkin.formatter.Reporter;
import com.vimalselvam.cucumber.listener.Reporter;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import java.io.File;

import static amura.selenium.driver.TestDriver.driver;

/**
 * Created by amuraqa on 13/12/17.
 */

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false,
        strict = false,
        tags = {"@smoke"},
        features = {"resources/features/"},
        glue = {"amura.selenium.steps"},
        format = {"html:target/output-reports/media-plan-wizard/html", "json:target/output-reports/media-plan-wizard/junitrunner.json"},
        plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/output-reports/cucumber-extent-reports/media-plan-wizard/report.html"}
)
public class RunCukes {
    @AfterClass
    public static void writeExtentReport() {
//        Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
//        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
//        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
//        Reporter.setSystemInfo("Machine", 	"Linux" + "64 Bit");
//        Reporter.setSystemInfo("Selenium", "3.7.0");
//        Reporter.setSystemInfo("Maven", "3.5.2");
//        Reporter.setSystemInfo("Java Version", "1.8.0_151");
    }
}

