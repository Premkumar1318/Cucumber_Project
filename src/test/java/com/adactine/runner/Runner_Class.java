package com.adactine.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature",

		glue = "com.adactin.stepdefinition",

		monochrome = true,

		dryRun = false,

		strict = false,

		tags = ("~@RegressionTest"),

		plugin = { "html:Reports/Report",
				  
				  // "pretty",
				   
				   "json:Reports/Cucumber.json",
				   
				   "com.cucumber.listener.ExtentCucumberFormatter:ExtentReport/Report.html"}
)

public class Runner_Class {

	public static WebDriver driver; // null driver

	@BeforeClass
	public static void set_Up() {

		driver = BaseClass.getBrowser("Chrome");

	}

	@AfterClass
	public static void tear_Down() {

		driver.quit();

	}

}
