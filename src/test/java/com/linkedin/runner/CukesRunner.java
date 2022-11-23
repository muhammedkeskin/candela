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
        dryRun = false, //true olursa headless modda koşar
        tags = "@wip"//tag vermişseek o tagları koşar

)

public class CukesRunner {
}
