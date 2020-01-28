var assert= require ('chai').assert;

webdriver = require('selenium-webdriver');
By = webdriver.By

var initDrive = require('./config/config1')
var driver

helper = require('./helper')

module.exports={

//launchbrowser
launchBrowser: async ()=>{
     driver = await initDrive.initiateDriver()
    //  driver.manage().window().maximize
   //driver = await new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
},


getURL: async (url)=>{
    
    await driver.get(url)
    .then(()=>{
        return driver.getCurrentUrl();
    })
    .then((res)=>{
        assert.equal(res, url)
        return res
    })
    // .catch((e)=>{
    //     console.log('e for url==', e)
    //     return 'Failed'
    // })
},

passedTest: async(title)=>{
        return{
            Step: title,
            Status: "Pass"
        }
},
failedTest: async(title, error)=>{
    return{
        Step: title,
        Status: "Failed",
        Reason: error
    }
},


//gets the title of current page, takes in the title arg asserts a comparison
checkTitle: async(title)=>{
    await  driver.executeScript("return document.title;")
            .then(function(return_value){
                assert.equal(return_value, title)             
            })
},


//close browser
quitBrowser: ()=>{
    driver.quit()
},


//find element
findElement: async(type, element)=>{
    driver.sleep(20000)
    await helper.findElement(type, element)  
}, 


findText: async(type, element, text)=>{
    await helper.findElement(type, element).getText()
    .then((return_value)=>{
        assert.equal(return_value, text)
        console.log('=>',return_value)
    })       
},


//arg1: elementtype, eg. css, id, xpath; arg2: element;  arg3: text
enterText:async(type, element, text)=>{
    //driver.manage().timeouts().implicitlyWait(100)
    await helper.findElement(type, element).sendKeys(text)
    //driver.sleep(10000)
},


//arg1: elementtype, eg. css, id, xpath; arg2: element; 
clickElement:async(type, element)=>{
    driver.sleep(20000)
    //driver.manage().timeouts().implicitlyWait(100)
    await helper.findElement(type, element).click()
    
},

wait: async(time)=>{
    await driver.sleep(time)
},




getCurrentDateandTime: ()=>{
    convert = (value)=>{  
        if(value.toString().length === 1){
            return '0'+ value
        }else{
            return value
        }
    }

    currentdate = new Date();
    return {
        date: `${convert(currentdate.getDate())}:${convert(currentdate.getMonth()+1)}:${convert(currentdate.getFullYear())}`,
        time: `${convert(currentdate.getHours())}:${convert(currentdate.getMinutes())}:${convert(currentdate.getSeconds())}`
    }
}


//end of module.exports
}

