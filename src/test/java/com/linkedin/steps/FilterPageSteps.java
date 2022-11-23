package com.linkedin.steps;

import com.linkedin.pages.FilterPage;

public class FilterPageSteps extends FilterPage {


    public FilterPageSteps clickAllFiltersButton() throws InterruptedException {
        waitForPageToLoad(10);
        waitForVisibility(allFiltersButton,20);
        allFiltersButton.click();
        urlContains("www.google.com");
        return this;
    }
    public FilterPage selectSortAsMostRecent() throws InterruptedException {
        wait(2);
        waitForVisibility(sortbyMostRecent,10);
        sortbyMostRecent.click();
        return this;
    }
    public FilterPageSteps selectPast24Hours() throws InterruptedException {
        waitForVisibility(Past24Hours,10);
        Past24Hours.click();
        return this;
    }

    public FilterPageSteps filterAsUnder10Applicants() throws InterruptedException {
        waitForVisibility(under10Appliciants,10);
        under10Appliciants.click();
        return this;
    }

    public void clickShowResultsButton() {
        showResultsButton.click();
    }
}
