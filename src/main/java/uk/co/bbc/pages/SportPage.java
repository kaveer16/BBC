package uk.co.bbc.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.bbc.utility.Utility;

import java.util.List;

public class SportPage extends Utility {

    @FindBy(linkText = "Sport")
    WebElement _sportHeaderTab;

    @FindBy (linkText = "Football")
    WebElement _footballTab;

    @FindBy (xpath = "//a[contains(text(),'Scores & Fixtures')]")
    WebElement _scoresAndFixtureTab;

    @FindBy (xpath = "//span[contains(text(),'TODAY')]")
    WebElement _clickOnTodayDate;


    // method to click on sport Header tab
    public void clickOnSportHeaderTab(){
        clickOnElement(_sportHeaderTab);
    }

    // method to click on Football tab
    public void clickOnFootballTab(){
        clickOnElement(_footballTab);
    }

    // method to click on Score & Fixture tab
    public void clickOnScoresAndFixture(){
        clickOnElement(_scoresAndFixtureTab);
    }

    // method to click on Today date and get the team data from it
    public void clickOnTodayDate(){
        clickOnElement(_clickOnTodayDate);

        List<WebElement> elements = driver.findElements(By.xpath("//span[@class='gs-u-display-none gs-u-display-block@m qa-full-team-name sp-c-fixture__team-name-trunc']"));

        for(WebElement element: elements)
        {
            System.out.println(element.getText());
        }
    }
}
