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
    private List<WebElement> answerQuestionPopup;
    private List<WebElement> applicationSentPopup;
    private List<WebElement> tryPremiumPopup;
    private List<WebElement> addSkillsPopup;
    private List<WebElement> getStartedPopUp;

    private int submittedCount=0;

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
            waitFor(3);
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
        waitFor(5);
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
        waitFor(2);
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
        submittedCount++;
        System.out.println("yapılan başvuru sayısı: "+submittedCount);
        waitFor(3);
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
        answerQuestionPopup=Driver.get().findElements(By.xpath("//div[@class='jpac-next-step-section']"));
        applicationSentPopup=Driver.get().findElements(By.cssSelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.mlA.block"));
        tryPremiumPopup=Driver.get().findElements(By.cssSelector(".app-aware-link.artdeco-button.artdeco-button--premium "));
        addSkillsPopup=Driver.get().findElements(By.xpath("//button[@class='artdeco-button artdeco-button--2 artdeco-button--primary ember-view']"));
        getStartedPopUp=Driver.get().findElements(By.cssSelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.post-apply-demographics__primary-cta.ml3.t-black"));
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
        errorMessage = Driver.get().findElements(By.cssSelector(".artdeco-inline-feedback__icon"));
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
        if(warningAfterSubmitted.size()>0||answerQuestionPopup.size()>0||applicationSentPopup.size()>0||tryPremiumPopup.size()>0||addSkillsPopup.size()>0||getStartedPopUp.size()>0) {
            return true;
        }
        return false;
    }

    public int CalculatePages() {
        pages = Driver.get().findElements(By.xpath("//button[contains(@aria-label,'Page')]"));
        return pages.size();
    }

    private boolean easyApplyLogic() {
        String WontInterestWords[] = {"software developer engineer", "software engineer", "lead", "manager", "vehicle", "electr", "data architect", "director", "mobile", "cell", "hardware", "medical", "device", "document control", "salesforce", "atm", "design", "mechanical", "application engineer", "appian developer", "devops", "architect", "robotic programmer" };
        int a = WontInterestWords.length;
        for(int i=0;i<a;i++) {
            if(JobTitle.getText().toLowerCase().contains(WontInterestWords[i])) {
                return false;
            }
        }
        return true;
    }
}