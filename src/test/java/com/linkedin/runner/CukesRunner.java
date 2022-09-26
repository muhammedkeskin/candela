package com.linkedin.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",//report almak için
                "rerun:target/rerun.txt"//geçmeyen testleri hafızaya almak için
        },
        features = "src/test/resources/features",//features ile bağlantı kurar
        glue = "com/vytrack/step_definitions",//steps ile bağlantı kurar
        dryRun = false, //execute yapmadan atlamak için stue yap. hızlı git
        tags = "@wip"//yazmazsak hepsini run yapar, yazarsak sadece onulogin"
//ikisinden birini içerenler için: "@login or sales_manager
//old version: "@login, @sales_manager" -->5den sonrasında çalışmıyor

//ikisini birden içeren: "@login and VYT-123"
//old version: {"@login","@VYT-123"}

//exclude yapmak için: "@login and not @wip"(work in proces)
//old version: {"@login", "~@VYT-123"} -->yeni versionda çalışıyor
)


public class CukesRunner {
}
