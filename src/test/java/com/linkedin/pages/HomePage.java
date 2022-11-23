package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
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

    @FindBy(xpath = "//button[text()='Search']")
    public WebElement searchButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyFilterButton;

    @FindBy(css = "[aria-label='Easy Apply filter.']")
    public WebElement easyApplyCheckElement;

    @FindBy(xpath = "//*[contains(@id,'jobs-search-box-location-id-ember')]")
    public WebElement locationInput;

    public void navigateJobPage() {
        waitForVisibility(jobsButton,5);
        jobsButton.click();
    }

}
