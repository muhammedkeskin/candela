package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BrowserUtils {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "session_key")
    public WebElement emailArea;

    @FindBy(id = "session_password")
    public WebElement passwordArea;

    @FindBy(css = ".sign-in-form__submit-button")
    public WebElement acceptAndJoin;

}
