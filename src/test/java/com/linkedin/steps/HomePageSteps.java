package com.linkedin.steps;

import com.linkedin.pages.HomePage;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class HomePageSteps extends HomePage {


    public void searchForJob(String job) {
        waitFor(5);
        searchInbox.sendKeys(job);
        searchInbox.sendKeys(Keys.ENTER);
    }

    public void fillLocationInfo(String location) {
        waitFor(2);
        locationInput.clear();
        locationInput.sendKeys(location);
        locationInput.sendKeys(Keys.ENTER);
    }

    public void selectFilterOnFilterBar(String filterWithVisibilityName) {
            waitFor(5);
            Driver.get()
                    .findElement(By.xpath("//button[contains(@aria-label,'" + filterWithVisibilityName + " filter.')]"))
                    .click();
            waitFor(2);
    }
}
