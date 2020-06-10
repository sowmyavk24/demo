package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass {
	
	@Before("@Mobiletest")
	public void beforeMobileTest() {
		System.out.println("printing before mobiletest");
	}
	
	@After("@Mobiletest")
	public void afterMobileTest()
	{
		System.out.println("priniting after mobile test");
	}

}
