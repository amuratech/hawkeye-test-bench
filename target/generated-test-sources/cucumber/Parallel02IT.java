import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"/home/amura/Desktop/Data /hawkeyeselenium/resources/features/start.feature"},
        plugin = {"json:/home/amura/Desktop/Data /hawkeyeselenium/target/cucumber-parallel/2.json", "html:/home/amura/Desktop/Data /hawkeyeselenium/target/cucumber-parallel/2", "rerun:/home/amura/Desktop/Data /hawkeyeselenium/target/cucumber-parallel/2.txt"},
        monochrome = true,
        tags = {"@smoke"},
        glue = {"amura.selenium.steps"})
public class Parallel02IT {
}
