package uk.co.bbc.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.bbc.utility.Utility;

public class SearchPage extends Utility {

    @FindBy(linkText = "Search")
    WebElement _searchBar;

    @FindBy (id = "search-input")
    WebElement _SearchTheBBC;

    @FindBy (xpath = "//body/div[@id='root']/div[1]/main[1]/div[1]/form[1]/div[1]/div[1]/div[1]/button[1]")
    WebElement _submitButton;

    // click on search bar tab
    public void clickOnSearchBar(){
        clickOnElement(_searchBar);
    }

    // fill text in the search bar
    public void enterText(String article){
        sendTextToElement(_SearchTheBBC, article);
    }

    // click on submit button
    public void clickOnSubmitButton(){
        clickOnElement(_submitButton);
    }
}
