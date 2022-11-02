package com.linkedin.step_defs;

import com.linkedin.pages.FilterPage;
import com.linkedin.pages.HomePage;
import com.linkedin.pages.LoginPage;
import com.linkedin.pages.ResultsPage;
import com.linkedin.utilities.ConfigurationReader;
import com.linkedin.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepdDefs {

    HomePage homePage=new HomePage();
    FilterPage filterPage=new FilterPage();
    ResultsPage resultsPage=new ResultsPage();

    @Given("user navigate login page")
    public void user_navigate_login_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("user enter email and password")
    public void user_enter_email_and_password() {
        String email=ConfigurationReader.get("email");
        String password=ConfigurationReader.get("password");

        LoginPage loginpage=new LoginPage();
        loginpage.login(email,password);
    }

    @Given("user navigate jobs page")
    public void user_navigate_jobs_page() throws InterruptedException {
        homePage.navigateJobPage();

    }
/*
    @And("user search for jobs which is {string}")
    public void userSearchForJobsWhichIs(String job) {
        homePage.searchForJob(job);
    }
*/

    /*
    @And("user fill location as {string}")
    public void userFillLocationAs(String location) {
        homePage.fillLocationInput(location);
    }
     */

    @When("user select filter as {string} on filters bar")
    public void userSelectFilterAsOnFiltersBar(String filterName) {
        homePage.selectFilterOnFilterBar(filterName);
    }

    @When("user filter with all filters")
    public void user_filter_with_all_filters() throws InterruptedException {
        filterPage.clickAllFiltersButton()
                .selectSortAsMostRecent()
                .selectPast24Hours()
                .filterAsUnder10Applicants()
                .showResults();
    }

    @Then("user easy Apply")
    public void user_easy_Apply() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("user search for jobs which is {string}")
    public void user_search_for_jobs_which_is(String job) {
        homePage.searchForJob(job);
    }

























    @When("user select job on Results Page")
    public void userSelectJobOnResultsPage() throws InterruptedException {
        resultsPage.scrollDown(15)//scroll yapacak ve sayfanın tamamını yükleyecek
                .getAllResults();//webElements alacak ve sayfadaki tüm ilanları liste atacak
        //logic koyulacak
    }
}
