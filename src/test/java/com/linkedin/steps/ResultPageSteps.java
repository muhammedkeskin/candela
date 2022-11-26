package com.linkedin.steps;

import com.linkedin.pages.ResultsPage;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ResultPageSteps extends ResultsPage {

    private List<WebElement> results;
    private List<WebElement> warningAfterSubmitted;
    private List<WebElement> checkSubmitButton;
    private List<WebElement> errorMessage;
    private List<WebElement> checkReviewButton;
    private List<WebElement> checkIfAppliedBefore;
    private List<WebElement> checkNextButton;
    private List<WebElement> pages;

    public void applyAllJobsWhereInAllPages(){
        apply();
        for(int i=2;i<CalculatePages();i++){
            Driver.get().findElement(By.xpath("//button[contains(@aria-label,'Page "+i+"')]")).click();
            waitFor(3);
            apply();
        }
    }

    public void apply() {
        scrollEndOfThePage();
        scrollUpOfThePage();
        for(int i=1;i<=calculateAllOffersOnTheResultsPage();i++) {
            waitForPageToLoad(60);
            Driver.get().findElement(By.xpath("(//a[@class='disabled ember-view job-card-container__link job-card-list__title'])["+i+"]")).click();
            easyApplyProcess();
        }
    }

    public ResultPageSteps scrollEndOfThePage() {
        for (int i=0;i<10;i++) {
            firstJob.sendKeys(Keys.PAGE_DOWN);
        }
        return this;
    }

    public ResultPageSteps scrollUpOfThePage() {
        for (int i=0;i<10;i++) {
            firstJob.sendKeys(Keys.PAGE_UP);
        }
        return this;
    }

    public int calculateAllOffersOnTheResultsPage() {
        int resultCount;
        results = Driver.get().findElements(By.xpath("//a[@class='disabled ember-view job-card-container__link job-card-list__title']"));
        resultCount=results.size();

        return resultCount;
    }

    private void easyApplyProcess() {
        waitFor(2);
        if(easyApplyLogic()) {
            if (checkIfAppliedBeforeMessageIsAvailable()) {
                clickEasyApplyButton();
                if (checkIfSubmitButtonIsAvailable()) {
                    SubmittingProcess();
                }
                while (checkIfNextButtonIsAvailable()) {
                    nextButtonProcess();
                    if (checkIfMissingInformationIsAvailable()) {
                        missingInformationProcess();
                        break;
                    }
                    if (checkIfReviewButtonIsAvailable()) {
                        reviewButtonProcess();
                        if (checkIfMissingInformationIsAvailable()) {
                            missingInformationProcess();
                            break;
                        }
                        if (checkIfReviewButtonIsAvailable()) {
                            reviewButtonProcess();
                            if (checkIfMissingInformationIsAvailable()) {
                                missingInformationProcess();
                                break;
                            }
                        }
                    }
                    if (checkIfSubmitButtonIsAvailable()) {
                        SubmittingProcess();
                        break;
                    }
                }
            }
        } else {
            System.out.println("not matching word is available");
        }
    }

    private void clickEasyApplyButton() {
        easyApplyButton.click();
    }
    private void checkWarningAfterSubmit() {
        if(checkIfWarningAfterSubmitIsAvailable()) {
            warningAfterSubmittedCancellationIcon.click();
        }
    }

    private void missingInformationProcess() {
        cancelIcon.click();
        discardButton.click();
    }

    private void SubmittingProcess() {
        submitButton.click();
        waitFor(5);
        checkWarningAfterSubmit();
    }

    private void reviewButtonProcess() {
        reviewButton.click();
    }

    private void nextButtonProcess() {
        nextButton.click();
    }

    private void calculateWarningAfterSubmitted() {
        warningAfterSubmitted = Driver.get().findElements(By.xpath("//button[@class='artdeco-button artdeco-button--2 artdeco-button--primary ember-view mlA block']"));
    }

    private void calculateSubmitButton() {
        checkSubmitButton = Driver.get().findElements(By.cssSelector("[aria-label='Submit application']"));
    }

    private void calculateAppliedBefore() {
        checkIfAppliedBefore = Driver.get().findElements(By.cssSelector(".artdeco-inline-feedback__message"));
    }

    private void calculateNextButton() {
        checkNextButton = Driver.get().findElements(By.cssSelector("[aria-label='Continue to next step']"));
    }

    private void calculateReviewButton() {
        checkReviewButton = Driver.get().findElements(By.cssSelector("[aria-label='Review your application']"));
    }

    private void calculateMissingInformationMessage() {
        errorMessage = Driver.get().findElements(By.xpath("//p[@class='fb-form-element__error-text t-12']"));
    }

    private boolean checkIfSubmitButtonIsAvailable() {
        calculateSubmitButton();
        if(checkSubmitButton.size() > 0) {
            return true;
        }
        return false;
    }

    private boolean checkIfNextButtonIsAvailable() {
        calculateNextButton();
        if(checkNextButton.size()>0) {
            return true;
        }
        return false;
    }

    private boolean checkIfReviewButtonIsAvailable() {
        calculateReviewButton();
        if(checkReviewButton.size()>0) {
            return true;
        }
        return false;
    }

    private boolean checkIfMissingInformationIsAvailable() {
        calculateMissingInformationMessage();
        if(errorMessage.size()>0) {
            return true;
        }
        return false;
    }

    private boolean checkIfAppliedBeforeMessageIsAvailable() {
        calculateAppliedBefore();
        if(!(checkIfAppliedBefore.size() > 1)) {
            return true;
        }
        return false;
    }

    private boolean checkIfWarningAfterSubmitIsAvailable() {
        calculateWarningAfterSubmitted();
        if(warningAfterSubmitted.size()>0) {
            return true;
        }
        return false;
    }

    public int CalculatePages() {
        pages = Driver.get().findElements(By.xpath("//button[contains(@aria-label,'Page')]"));
        return pages.size();
    }

    private boolean easyApplyLogic() {
        String WontInterestWords[] = {"Software Developer Engineer", "Software Engineer", "Lead", "Manager", "Vehicle", "Electric", "Data Architect", "Director", "Mobile" };
        int a = WontInterestWords.length;
        for(int i=0;i<a;i++) {
            if(Driver.get().findElements(By.xpath("//h2[contains(text(),'"+WontInterestWords[i]+"')]")).size()>0) {
                return false;
            }
        }
        return true;
    }
}