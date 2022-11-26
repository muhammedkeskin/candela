package com.linkedin.steps;

import com.linkedin.pages.HomePage;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class HomePageSteps extends HomePage {


    public void searchForJob(String job) {
        waitForVisibility(searchInbox, 15);
        searchInbox.sendKeys(job);
        searchInbox.sendKeys(Keys.ENTER);
    }

    public void fillLocationInfo(String location) {
        waitForVisibility(locationInput,10);
        locationInput.clear();
        locationInput.sendKeys(location);
        locationInput.sendKeys(Keys.ENTER);
    }

    public void selectFilterOnFilterBar(String filterWithVisibilityName) {
            waitForPageToLoad(15);
            Driver.get()
                    .findElement(By.xpath("//button[contains(@aria-label,'" + filterWithVisibilityName + " filter.')]"))
                    .click();
            waitFor(2);
    }
}
