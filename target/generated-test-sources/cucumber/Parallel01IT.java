import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/resources/features/mediaPlanWizard.feature"},
        plugin = {"json:/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/cucumber-mediaplan/1.json", "html:/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/cucumber-mediaplan/1", "rerun:/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/cucumber-mediaplan/1.txt"},
        monochrome = true,
        tags = {"@mediaplan"},
        glue = {"amura.selenium.steps"})
public class Parallel01IT {
}
