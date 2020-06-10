package stepDefinitions;

import java.util.List;

import org.junit.runner.RunWith;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class StepDefinition {

	@Given("^The user is on the facebook login page$")
	public void user_netbanking_page()
	{
		System.out.println("user is on  netbanking page");
	}
    @When("^the user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_user_enters_credentials(String strArg1, String strArg2){
    
       System.out.println(strArg1);
       System.out.println(strArg2);
    }
	@Then("^validate successful login$")
	 public void validate_successful_login() {
		
		System.out.println("successfully logged in");
		
	}
	@And("^check cards are present \"([^\"]*)\"$")
    public void check_cards_are_present(String strArg1) {
       System.out.println("print cards status");
       
       }
	 @When("^the user enters  the credentials$")
	    public void the_user_enters_the_credentials(DataTable data) { 
		 List<List<String>> obj=data.asLists();
		 System.out.println(obj.get(0).get(1));
		 System.out.println(obj.get(1).get(2));
		 
	
	 }
	 @When("^the user gives (.+) and (.+)$")
	    public void the_user_gives_and(String username, String password) {
		 System.out.println(username);
		 System.out.println(password);
}
}
