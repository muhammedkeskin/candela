package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BrowserUtils {

    public HomePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "[title='Jobs']")
    public WebElement jobsButton;

    @FindBy(css = "[aria-label='Search by title, skill, or company']")
    public WebElement searchInbox;

    @FindBy(css = "[title='City, state, or zip code']")
    public WebElement locationInbox;

    @FindBy(xpath = "//button[text()='Search']")
    public WebElement searchButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyFilterButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyCheckElement;

    public void navigateJobPage() {
        waitForVisibility(jobsButton,5);
        jobsButton.click();
    }

    public void searchForJob(String job) {
        waitForVisibility(searchInbox, 15);
        searchInbox.sendKeys(job);
        searchInbox.sendKeys(Keys.ENTER);
    }

    public void fillLocationInput(String location) {
        waitForVisibility(locationInbox, 10);
        locationInbox.sendKeys(location);
        locationInbox.sendKeys(Keys.ENTER);
    }

    public void selectFilterOnFilterBar(String filterWithVisibiltyName) {
        waitForVisibility(By.xpath("//button[contains(@aria-label,'" + filterWithVisibiltyName + " filter.')]"), 10);
        if (easyApplyFilterButton.isDisplayed()) {
            easyApplyFilterButton.click();
        } else {
            System.out.println("filter bar filtrelemesi easy apply içermedi");
            Driver.get()
                    .findElement(By.xpath("//button[contains(@aria-label,'" + filterWithVisibiltyName + " filter.')]"))
                    .click();
            waitFor(2);
            //Assert.assertTrue("easy apply filtrelenemedi", easyApplyCheckElement.getAttribute("aria-checked").equals("true"));
        }
    }
}
