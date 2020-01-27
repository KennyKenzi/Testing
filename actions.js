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


},



//gets the title of current page, takes in the title arg asserts a comparison
checkTitle: async(title)=>{
    await  driver.executeScript("return document.title;")
            .then(function(return_value){
                assert.equal(return_value, arg)             
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
            //console.log('=>',return_value)      
})},


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

findElements: async(type, element)=>{
    
    // var main = await helper.findElement(type, element)
    // //console.log('main=>',main)
    var children = await helper.findElements(type, element).
    console.log('children=>',children)
    

}





//end of module.exports
}

