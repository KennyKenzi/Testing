webdriver = require('selenium-webdriver');
var apiCalls = require('./apis')

module.exports={

    initializeProject: async()=>{

        var Project = {
            projectName: "KASHIAR",
            projectCode : "KA_001"
        }
        return  Project
    },
  


    initiateDriver:()=>{

        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build()
        return driver
        
    },


}


