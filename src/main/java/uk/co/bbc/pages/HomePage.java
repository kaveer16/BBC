package uk.co.bbc.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.bbc.utility.Utility;

public class HomePage extends Utility {
    @FindBy(xpath = "//button[contains(text(),'Yes, I agree')]")
    WebElement _yesIAgreeLink;


    // method to accept cookies
    public void clickOnYesIAgreeLink() {
        clickOnElement(_yesIAgreeLink);
    }

}
