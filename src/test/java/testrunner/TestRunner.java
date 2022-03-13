package testrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/features",
		glue= {"stepdefinition","hooks"},
        monochrome = true,
//        tags={"@addaffilliate","@filter"},
//        dryRun=true,
        plugin = {"pretty"} //"html:reports/cucumber-pretty", "json:reports/jsonreport.json", "junit:reports/Cucumber.xml"
        )
public class TestRunner {


}