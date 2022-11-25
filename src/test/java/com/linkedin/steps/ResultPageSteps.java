package com.linkedin.steps;

import com.linkedin.pages.ResultsPage;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ResultPageSteps extends ResultsPage {

    int resultCount;

    public ResultPageSteps scrollEndOfThePage() {
        refreshPage();
        if (firstJob.isDisplayed()) {
            refreshPage();
            for (int i=0;i<10;i++) {
                firstJob.sendKeys(Keys.PAGE_DOWN);
            }
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
        List<WebElement> results = Driver.get().findElements(By.xpath("//a[@class='disabled ember-view job-card-container__link job-card-list__title']"));
        resultCount=results.size();
        System.out.println("sayfada görünen sonuç sayısı : " + resultCount);

        return resultCount;
    }

    public void apply() {
        for(int i=1;i<=resultCount;i++) {
            waitForPageToLoad(60);
            Driver.get().findElement(By.xpath("(//a[@class='disabled ember-view job-card-container__link job-card-list__title'])["+i+"]")).click();
            easyApplyProcess();
        }
    }

    private void easyApplyProcess() {
        waitFor(2);
        List<WebElement> checkIfAppliedBefore = Driver.get().findElements(By.cssSelector(".artdeco-inline-feedback__message"));
        if (!(checkIfAppliedBefore.size() > 0)) {
            easyApplyButton.click();
            List<WebElement> checkSubmitButton = Driver.get().findElements(By.cssSelector("[aria-label='Submit application']"));
            if (checkSubmitButton.size() > 0) {
                submitButton.click();
            }
            List<WebElement> checkNextButton = Driver.get().findElements(By.cssSelector("[aria-label='Continue to next step']"));
            while(checkNextButton.size()>0) {
                List<WebElement> premiumWarning = Driver.get().findElements(By.xpath("//button[@class='artdeco-button artdeco-button--2 artdeco-button--primary ember-view mlA block']/span"));
                if(premiumWarning.size()>0) {
                    premiumWarningCancellationIcon.click();
                    waitFor(1);
                    break;
                }
                nextButton.click();
                List<WebElement> errorMessage = Driver.get().findElements(By.xpath("//p[@class='fb-form-element__error-text t-12']"));
                if(errorMessage.size()>0) {
                    cancelIcon.click();
                    discardButton.click();
                    break;
                }
                List<WebElement> checkReviewButton = Driver.get().findElements(By.cssSelector("[aria-label='Review your application']"));
                if(checkReviewButton.size()>0) {
                    reviewButton.click();
                    errorMessage = Driver.get().findElements(By.xpath("//p[@class='fb-form-element__error-text t-12']"));
                    if(errorMessage.size()>0) {
                        cancelIcon.click();
                        discardButton.click();
                        break;
                    }
                    checkReviewButton = Driver.get().findElements(By.cssSelector("[aria-label='Review your application']"));
                    if(checkReviewButton.size()>0) {
                        reviewButton.click();
                        errorMessage = Driver.get().findElements(By.xpath("//p[@class='fb-form-element__error-text t-12']"));
                        if(errorMessage.size()>0) {
                            cancelIcon.click();
                            discardButton.click();
                            break;
                        }
                    }
                }
                checkSubmitButton = Driver.get().findElements(By.cssSelector("[aria-label='Submit application']"));
                if(checkSubmitButton.size() > 0) {
                    submitButton.click();
                    break;
                }
            }
        }
    }

    private boolean easyApplyLogic() {
        //1. bir array oluştur
        //2. arrayin içine aranacak kelimeleri belirt
        //bu kelimeler sayfanın sağında geçiyorsa easy apply diye devam et
        return false;
    }
}


//a[@class='disabled ember-view job-card-container__link job-card-list__title']