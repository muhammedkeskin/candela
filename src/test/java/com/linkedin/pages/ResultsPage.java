package com.linkedin.pages;
import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ResultsPage extends BrowserUtils {

    public ResultsPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//li[contains(@class,'ember-view   jobs')]")
    public WebElement listedJobs;

    @FindBy(xpath = "(//a[@class='disabled ember-view job-card-container__link job-card-list__title'])[1]")
    public WebElement firstJob;

    @FindBy(css = ".jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view")
    public WebElement easyApplyButton;

    @FindBy(css = "[aria-label='Submit application']")
    public WebElement submitButton;

    @FindBy(css = "[aria-label='Continue to next step']")
    public WebElement nextButton;

    @FindBy(xpath = "//li-icon[@type='cancel-icon'][@class='artdeco-button__icon']")
    public WebElement cancelIcon;

    @FindBy(xpath = "//button[@data-control-name='discard_application_confirm_btn']")
    public WebElement discardButton;

    @FindBy(css = "[aria-label='Review your application']")
    public WebElement reviewButton;

    @FindBy(xpath = "//button[@class='artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view']")
    public WebElement premiumWarningCancellationIcon;
}
