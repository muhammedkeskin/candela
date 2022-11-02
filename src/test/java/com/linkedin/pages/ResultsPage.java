package com.linkedin.pages;
import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.Key;
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

    public ResultsPage scrollDown(int downCount) throws InterruptedException {
        for(int a=0;a>downCount;a++) {
            Thread.sleep(1000);
            asd.sendKeys(Keys.ARROW_DOWN);
        }
        /*
        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
        for (int i = 0; i < downCount; i++) {
             jse.executeScript("window.scrollBy(0,250)");
        }
          */
        return this;

    }
    public void getAllResults() {



        //scrollDown yapılacak
        //web elementler listelenecekve loopa alınacak
        //içlerine tek tek bakılacak
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
