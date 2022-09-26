package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
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
    public WebElement stateInbox;

    @FindBy(xpath = "//button[text()='Search']")
    public WebElement searchButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyFilterButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyCheckElement;

    public void navigateJobPage() throws InterruptedException {
        waitForVisibility(jobsButton,5);
        jobsButton.click();
    }

    public void searchForJob(String job) {
        waitForVisibility(searchInbox, 15);
        searchInbox.sendKeys(job);
        searchInbox.sendKeys(Keys.ENTER);
    }

    public void filterForEasyApply() {
        waitForVisibility(easyApplyFilterButton,10);
        if (easyApplyFilterButton.isDisplayed()) {
            easyApplyFilterButton.click();
        } else {
            System.out.println("easy apply filtrele butonu çıkmadı");
        }
        waitFor(2);
        Assert.assertTrue("easy apply filtrelenemedi",easyApplyCheckElement.getAttribute("aria-checked").equals("true"));
    }

}
