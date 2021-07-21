package uk.co.bbc.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInFunctions {
    @Given("^User am on www\\.bbc\\.co\\.uk homepage$")
    public void userAmOnWwwBbcCoUkHomepage() {
        
    }

    @And("^User click on Sign in tab$")
    public void userClickOnSignInTab() {
        
    }

    @And("^User am on Sign in page$")
    public void userAmOnSignInPage() {
        
    }

    @When("^User enter username as \"([^\"]*)\"$")
    public void userEnterUsernameAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User enter password as \"([^\"]*)\"$")
    public void userEnterPasswordAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User click on Sign in button$")
    public void userClickOnSignInButton() {
        
    }

    @Then("^Sign in should be unsuccessful$")
    public void signInShouldBeUnsuccessful() {

    }

    @And("^User Click on Yes I agree Link$")
    public void userClickOnYesIAgreeLink() {

    }
}
