package com.adactin.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PageObjectManager {
	public static WebDriver driver; // null driver

	private Adactin_Login login;
	private Adactin_Search search;
	private Adactin_SelectHotel select;
	private Adactin_Payment pay;
	private Adactin_Payconfirm confirm;
	private Adactin_Logout logout;

	public PageObjectManager(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public Adactin_Login getInstanceLogin() {
		login = new Adactin_Login(driver);
		return login;
	}

	public Adactin_Search getInstanceSearch() {
		search = new Adactin_Search(driver);
		return search;
	}

	public Adactin_SelectHotel getInstanceSelect() {
		select = new Adactin_SelectHotel(driver);
		return select;
	}

	public Adactin_Payment getInstancePay() {
		pay = new Adactin_Payment(driver);
		return pay;
	}

	public Adactin_Payconfirm getInstanceConfirm() {
		confirm = new Adactin_Payconfirm(driver);
		return confirm;
	}

	public Adactin_Logout getInstanceLogout() {
		logout = new Adactin_Logout(driver);
		return logout;
	}



}
