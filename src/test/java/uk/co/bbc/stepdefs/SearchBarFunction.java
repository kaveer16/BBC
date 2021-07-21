package uk.co.bbc.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchBarFunction {
    @Given("^I am on www\\.bbc\\.co\\.uk homepage$")
    public void iAmOnWwwBbcCoUkHomepage() {

    }

    @And("^I click on Search bar$")
    public void iClickOnSearchBar() {

    }

    @And("^I am on search page$")
    public void iAmOnSearchPage() {

    }

    @When("^I enter \"([^\"]*)\" in the search bar$")
    public void iEnterInTheSearchBar(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I click on the search icon button$")
    public void iClickOnTheSearchIconButton() {

    }

    @Then("^I should able to read all articles related 'sports'$")
    public void iShouldAbleToReadAllArticlesRelatedSports() {
    }
}
