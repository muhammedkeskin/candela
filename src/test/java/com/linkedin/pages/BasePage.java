package com.linkedin.pages;

//fix-me:
//WONT BE USED - NO NEED THIS CLASS

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public abstract class BasePage {

    @FindBy(css = ".jobs-apply-button--top-card")
    public WebElement easyApplyButton;

}
