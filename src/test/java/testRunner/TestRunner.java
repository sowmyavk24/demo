package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/feature",
		glue ="stepDefinitions",tags= {"@Mobiletest or @Smoketest"},
		dryRun=true,monochrome=true,strict=true,
		plugin= {"pretty","html:target/cucumber","json:target/jsonReports/cucumber-report.json",
				"junit:target/cucumber.xml"})

		

public class TestRunner {

}
