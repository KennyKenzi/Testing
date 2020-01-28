webdriver = require('selenium-webdriver');

module.exports={

    initiateDriver:()=>{

        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build()
        return driver
        
    }
  

}


