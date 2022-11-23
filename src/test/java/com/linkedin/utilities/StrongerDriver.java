package com.linkedin.utilities;

//NO NEEDS THIS PAGE, WON'T USE
//BROWSERUTILS CLASS HAVE THESE METHODS AND MORE

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Random;

public class StrongerDriver {

    public boolean urlContains(String text) {
        String actualUrl = Driver.get().getCurrentUrl();
        boolean url = false;
        if (actualUrl == null || actualUrl.isEmpty()) {
            Assert.assertNull("Url not found or url not loading", actualUrl);
        }
        url = actualUrl.contains(text);
        return url;
    }

    public boolean isElementPresent(By by) {
        return !Driver.get().findElements(by).isEmpty();
    }

    public void clickWithVisibleTextOfAnyElement(String visibleText) {
        List<WebElement> elements = Driver.get().findElements(By.xpath("//*[contains(.,'" + visibleText + "']"));
        Driver.get().findElement(By.xpath("(//*[contains(.,'" + visibleText + ")])[" + elements.size() + "]")).click();
    }

    //-----------------------

    public WebElement getElement(By by) {
        return Driver.get().findElement(by);
    }

    public List<WebElement> getElements(By by) {
        return Driver.get().findElements(by);
    }

    public String getTextOfElement(By by) {
        return getElement(by).getText();
    }

    public String getAttributeOfElement(By by, String attributeName) {
        return getElement(by).getAttribute(attributeName);
    }

    public void refreshPage() {
        Driver.get().navigate().refresh();
    }

    public void navigateToUrl(String url) {
        Driver.get().navigate().to(url);
    }

    public String getCurrentUrl() {
        return Driver.get().getCurrentUrl();
    }

    public String ClickAndGetTextRandomElementFromListElements(By by) {
        List<WebElement> elements = Driver.get().findElements(by);
        int randomNum = elements.size() == 1 ? 0 : new Random().nextInt(elements.size() - 1);
        String selectedElementText = elements.get(randomNum).getText();
        elements.get(randomNum).click();
        return selectedElementText;
    }

    public void maximize() {
        Driver.get().manage().window().maximize();
    }

/*
    public ResultsPage scrollDown(int downCount) throws InterruptedException {
        for(int a=0;a>downCount;a++) {
            Thread.sleep(1000);
            asd.sendKeys(Keys.ARROW_DOWN);
        }

//        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
//        for (int i = 0; i < downCount; i++) {
//             jse.executeScript("window.scrollBy(0,250)");
//        }

        return this;
    }
    */
}