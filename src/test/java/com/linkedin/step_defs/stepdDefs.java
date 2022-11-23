package com.linkedin.step_defs;

import com.linkedin.steps.FilterPageSteps;
import com.linkedin.steps.HomePageSteps;
import com.linkedin.steps.LoginPageSteps;
import com.linkedin.steps.ResultPageSteps;
import com.linkedin.utilities.ConfigurationReader;
import com.linkedin.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepdDefs {

    LoginPageSteps loginPageSteps=new LoginPageSteps();
    HomePageSteps homePageSteps=new HomePageSteps();
    FilterPageSteps filterPageSteps=new FilterPageSteps();
    ResultPageSteps resultsPageSteps=new ResultPageSteps();

    @Given("user navigate login page")
    public void user_navigate_login_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("user enter email and password")
    public void user_enter_email_and_password() {
        String email=ConfigurationReader.get("email");
        String password=ConfigurationReader.get("password");

        loginPageSteps.login(email,password);
    }

    @Given("user navigate jobs page")
    public void user_navigate_jobs_page() {
        homePageSteps.navigateJobPage();

    }

    @And("user search for jobs which is {string}")
    public void userSearchForJobsWhichIs(String job) {
        homePageSteps.searchForJob(job);
    }

    @When("user fill location as {string}")
    public void user_fill_location_as(String location) {
        homePageSteps.fillLocationInfo(location);
    }

    @When("user select filter as {string} on filters bar")
    public void userSelectFilterAsOnFiltersBar(String filterName) {
        homePageSteps.selectFilterOnFilterBar(filterName);
    }

    @When("user filter with all filters")
    public void user_filter_with_all_filters() throws InterruptedException {
        filterPageSteps.clickAllFiltersButton()
                .selectPast24Hours()
                .filterAsUnder10Applicants()
                .clickShowResultsButton();
    }

    @Then("calculate the total jobs on the first Result Page")
    public void calculate_the_total_jobs_on_the_first_Result_Page() {
        resultsPageSteps.scrollEndOfThePage()
                //Keys.End ile de dene
                .scrollUpOfThPage()
                .calculateAllOffersOnTheResultsPage();
    }

    @Then("user try to easy Apply to all results on the Results Page")
    public void user_try_to_easy_Apply_to_all_results_on_the_Results_Page() {
        resultsPageSteps.apply();
    }
}
