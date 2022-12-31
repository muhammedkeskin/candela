package com.linkedin.steps;

import com.linkedin.pages.LoginPage;

public class LoginPageSteps extends LoginPage {


    public void login(String email, String password) {
        emailArea.sendKeys(email);
        passwordArea.sendKeys(password);
        acceptAndJoin.click();
        waitFor(3);
    }
}