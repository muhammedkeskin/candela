package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FilterPage extends BrowserUtils {

    public FilterPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//button[text()='All filters']")
    public WebElement allFiltersButton;

    @FindBy(css = "[for='advanced-filter-sortBy-DD']")
    public WebElement sortbyMostRecent;

    @FindBy(css = "[for='advanced-filter-timePostedRange-r86400']")
    public WebElement Past24Hours;

    @FindBy(xpath = "(//div[@class='artdeco-toggle artdeco-toggle--32dp artdeco-toggle--default ember-view'])[1]")
    public WebElement under10Appliciants;

    @FindBy(xpath = "//button[contains(@aria-label,'Apply current filters to show')]")
    public WebElement showResultsButton;

    public FilterPage clickAllFiltersButton() throws InterruptedException {
        wait(2);
        allFiltersButton.click();
        return this;
    }
    public FilterPage selectSortAsMostRecent() throws InterruptedException {
        wait(2);
        waitForVisibility(sortbyMostRecent,10);
        sortbyMostRecent.click();
        return this;
    }
    public FilterPage selectPast24Hours() throws InterruptedException {
        wait(2);
        Past24Hours.click();
        return this;
    }

    public FilterPage filterAsUnder10Applicants() throws InterruptedException {
        wait(2);
        under10Appliciants.click();
        return this;
    }

    public void showResults() {
        showResultsButton.click();
    }
}
