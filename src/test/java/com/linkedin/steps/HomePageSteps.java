package com.linkedin.steps;

import com.linkedin.pages.HomePage;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

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
        /* GEREK YOK:
        waitForVisibility(By.xpath("//button[contains(@aria-label,'" + filterWithVisibilityName + " filter.')]"), 10);
        List<WebElement> results = Driver.get().findElements(By.cssSelector("[aria-label='Easy Apply filter.']"));
        if (results.size()==1) {
            easyApplyFilterButton.click();
        } else {
            System.out.println("filter bar filtrelemesi easy apply içermedi");
            refreshPage();
         */
            waitForPageToLoad(15);
            Driver.get()
                    .findElement(By.xpath("//button[contains(@aria-label,'" + filterWithVisibilityName + " filter.')]"))
                    .click();
            waitFor(2);
    }
}
