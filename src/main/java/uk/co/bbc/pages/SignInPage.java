

package uk.co.bbc.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.bbc.utility.Utility;

public class SignInPage extends Utility {

    @FindBy(linkText = "Sign in")
    WebElement _signInTab;

    @FindBy (id = "user-identifier-input")
    WebElement _userName;

    @FindBy (id = "password-input")
    WebElement _passwordIn;

    @FindBy (id = "submit-button")
    WebElement _signInButton;

    // method to click on sign in tab
    public void clickOnSignInTab(){
        clickOnElement(_signInTab);
    }

    // method to enter username
    public void enterUserName(String username){
        sendTextToElement(_userName, username);
    }

    // method to enter password
    public void enterPassword(String password){
        sendTextToElement(_passwordIn, password);
    }

    // method to click on th sign in button
    public void clickOnSignInButton(){
        clickOnElement(_signInButton);
    }
}
