package com.adactin.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.baseclass.PageObjectManager;
import com.adactine.runner.Runner_Class;
import com.helperfile.File_Read_Manager;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {

	public static WebDriver driver = Runner_Class.driver;

	public static PageObjectManager pom = new PageObjectManager(driver);
	
	@Before
	public void before_Hooks(Scenario s) {
		
		String name = s.getName();
		
		System.out.println("Name:"+name);

	}
	
	@After
	public void after_Hooks(Scenario s) throws IOException {
		
		String status = s.getStatus();
		
		System.out.println("Status:"+status);
		
		if(s.isFailed()) {
			
			TakesScreenshot("C:\\Users\\Prem Kumar\\Automation\\Cucumber_Project\\ScreenShot\\failed.png");
		}

	}
	
	@Given("^User Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		String url = File_Read_Manager.getInstanceFRM().getInstanceCR().get_Url_Data();

		geturl(url);

	}

	@When("^User Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {

		inputtext(pom.getInstanceLogin().getUsername(),username);

	}

	@When("^User Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {

		inputtext(pom.getInstanceLogin().getPassword(),password);
	}

	@Then("^User Click On The Login Button And It Navigate to search Hotel$")
	public void user_Click_On_The_Login_Button_And_It_Navigate_to_search_Hotel() throws Throwable {
		clickonElement(pom.getInstanceLogin().getLogin());

	}

	@When("^User Select The Location$")
	public void user_Select_The_Location() throws Throwable {
		dropDown(pom.getInstanceSearch().getLocation(), "byvalue", "London");
	}

	@When("^User Select The Hotels$")
	public void user_Select_The_Hotels() throws Throwable {

		dropDown(pom.getInstanceSearch().getHotels(), "byvalue", "Hotel Sunshine");

	}

	@When("^User Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		dropDown(pom.getInstanceSearch().getRoomtype(), "byvalue", "Deluxe");

	}

	@When("^User select The Number Of Rooms$")
	public void user_select_The_Number_Of_Rooms() throws Throwable {
		dropDown(pom.getInstanceSearch().getRoomnos(), "byvalue", "3");

	}

	@When("^User Enter The Check In Date$")
	public void user_Enter_The_Check_In_Date() throws Throwable {
		clear(pom.getInstanceSearch().getclear());
		inputtext(pom.getInstanceSearch().getDatein(), "03/03/2022");

	}

	@When("^User Enter The Check Out Date$")
	public void user_Enter_The_Check_Out_Date() throws Throwable {
		clear(pom.getInstanceSearch().getclear1());
		inputtext(pom.getInstanceSearch().getDateout(), "06/03/2022");

	}

	@When("^User Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {
		dropDown(pom.getInstanceSearch().getAdultroom(), "byvisibletext", "3 - Three");

	}

	@When("^User Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {
		dropDown(pom.getInstanceSearch().getChildroom(), "byvisibletext", "3 - Three");

	}

	@Then("^User Click On The Search Button And It Navigate To Hotel Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigate_To_Hotel_Page() throws Throwable {
		clickonElement(pom.getInstanceSearch().getSubmit());

	}

	@When("^User Click On The Select Button$")
	public void user_Click_On_The_Select_Button() throws Throwable {
		clickonElement(pom.getInstanceSelect().getSelect());

	}

	@Then("^User Click On The Continue Button And It Navigate To Book Hotel Page$")
	public void user_Click_On_The_Continue_Button_And_It_Navigate_To_Book_Hotel_Page() throws Throwable {

		clickonElement(pom.getInstanceSelect().getContinuebtn());
	}

	@When("^User Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {
		inputtext(pom.getInstancePay().getFirstname(), "Premkumar");

	}

	@When("^User Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable {
		inputtext(pom.getInstancePay().getLastname(), "G");

	}

	@When("^User Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		inputtext(pom.getInstancePay().getAddress(), "Balaji Nagar,Ekkattuthangal,chennai-32");

	}

	@When("^User Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable {

		String cardno = File_Read_Manager.getInstanceFRM().getInstanceCR().get_Cardnumber();
		inputtext(pom.getInstancePay().getCardno(), cardno);
	}

	@When("^User Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {
		dropDown(pom.getInstancePay().getCardtype(), "byvalue", "MAST");
	}

	@When("^User Select The Expiry Date Month$")
	public void user_Select_The_Expiry_Date_Month() throws Throwable {
		String month = File_Read_Manager.getInstanceFRM().getInstanceCR().get_Expmonth();
		dropDown(pom.getInstancePay().getExpmonth(), "byvisibletext", month);
		String year = File_Read_Manager.getInstanceFRM().getInstanceCR().get_Expyear();
		dropDown(pom.getInstancePay().getExpyear(), "byvisibletext", year);
	}

	@When("^User Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {

		String cvv = File_Read_Manager.getInstanceFRM().getInstanceCR().get_cvv();
		inputtext(pom.getInstancePay().getCvv(), cvv);
	}

	@Then("^User Click On The Book Now Button And It Navigate To Booking Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigate_To_Booking_Confirmation_Page() throws Throwable {

		clickonElement(pom.getInstancePay().getBooknow());
	}

	@Then("^User Click On The My Itinerary Button And It Navigate To Booked Itinerary Page$")
	public void user_Click_On_The_My_Itinerary_Button_And_It_Navigate_To_Booked_Itinerary_Page() throws Throwable {
		Timeout_implicit(30);
		clickonElement(pom.getInstanceConfirm().getItinerary());
	}

	@Then("^User Click On The Logout Button$")
	public void user_Click_On_The_Logout_Button() throws Throwable {

		clickonElement(pom.getInstanceLogout().getLogout());

	}

}
