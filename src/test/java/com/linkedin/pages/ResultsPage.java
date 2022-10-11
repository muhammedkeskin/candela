package com.linkedin.pages;
import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ResultsPage extends BrowserUtils {

    public ResultsPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    /*
    @FindBy(css = ".job-flavors__flavor")
    public WebElement results;
    */
    @FindBy(xpath = "(//div[contains(@class,'job-card-container relative job-card-list')])[2]")
    public WebElement asd;

    public void getAllResults() throws InterruptedException {
        asd.click();
/*
        //Driver.get().findElements(By.cssSelector(".job-flavors__flavor"));
        List<WebElement> results = Driver.get().findElements(By.cssSelector(".job-flavors__flavor"));
        System.out.println("sayfada görünen sonuç sayısı : " + results.size());
        for (int i=0;i<results.size();i++) {
            results.get(1).click();
            wait(5000);
        }
 */
    }
}
