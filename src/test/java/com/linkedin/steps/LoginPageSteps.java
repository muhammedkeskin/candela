package com.linkedin.steps;

import com.linkedin.pages.LoginPage;

public class LoginPageSteps extends LoginPage {


    public void login(String email, String password) {
        maximize();
        emailArea.sendKeys(email);
        passwordArea.sendKeys(password);
        acceptAndJoin.click();
        waitForPageToLoad(60);
    }
}
