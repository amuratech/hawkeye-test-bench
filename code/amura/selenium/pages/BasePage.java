package amura.selenium.pages;

import amura.selenium.driver.TestDriver;

/**
 * Created by amuraqa on 13/12/17.
 */
public class BasePage {

    TestDriver tDriver;

    public BasePage(){
        if(tDriver == null){
            tDriver = TestDriver.getDriver();
        }
    }
}
