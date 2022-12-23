package com.linkedin.steps;

import com.linkedin.pages.FilterPage;
import org.junit.Test;

public class FilterPageSteps extends FilterPage {


    public FilterPageSteps clickAllFiltersButton() {
        waitFor(3);
        waitForVisibility(allFiltersButton,20);
        allFiltersButton.click();
        return this;
    }
    public FilterPageSteps selectSortAsMostRecent() throws InterruptedException {
        wait(2);
        waitForVisibility(sortbyMostRecent,10);
        sortbyMostRecent.click();
        return this;
    }
    public FilterPageSteps selectPast24Hours() {
        waitForVisibility(Past24Hours,10);
        Past24Hours.click();
        return this;
    }

    public FilterPageSteps filterAsUnder10Applicants() {
        waitForVisibility(under10Appliciants,10);
        under10Appliciants.click();
        return this;
    }

    public void clickShowResultsButton() {
        showResultsButton.click();
    }

    @Test
    public void test() {
        String str="ASFFasdf";
        System.out.println(str.toLowerCase());
    }
}

