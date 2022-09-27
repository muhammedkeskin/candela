package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultsPage extends BrowserUtils {

    public ResultsPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = ".job-flavors__flavor")
    public WebElement results;

   //Driver.findElements(By.tagName("button"));



}
