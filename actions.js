var assert= require ('chai').assert;
webdriver = require('selenium-webdriver');
By = webdriver.By

var initDrive = require('./config/config1')
var apiCalls = require('./config/apis')
var driver

helper = require('./helper')

var Project 
var tempTime= 100000

module.exports={

//launchbrowser
launchBrowser: async ()=>{
    driver = await initDrive.initiateDriver()
    //driver.manage().window().maximize()
    //driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS)
   //driver = await new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
    await initProject()
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
    await driver.wait(()=>{
        return helper.elementPresent(type, element)
    }) 
}, 


findText: async(type, element, text)=>{

    await driver.wait(async()=>{ 
       
        await helper.findElement(type, element).getText()
        .then((return_value)=>{
            assert.equal(return_value, text)
            // console.log('=>',return_value)
        })

    }, 5000) 
          
},


enterText:async(type, element, text)=>{
    //driver.manage().timeouts().implicitlyWait(100)
    await helper.findElement(type, element).sendKeys(text)
    //driver.sleep(10000)
},


clickElement:async(type, element)=>{
    // await driver.wait(async()=>{
    //     await helper.elementPresent(type, element)
    // }, 10000) 

    await helper.findElement(type, element).click() 
},

// selectElementByVisibleText: async(type, element, text)=>{
//     var dropdown = await helper.findElement(type, element)
//     await dropdown.selectByVisibleText(text)
// },

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
},

getCurrentDateandTimeString: ()=>{
    convert = (value)=>{  
        if(value.toString().length === 1){
            return '0'+ value
        }else{
            return value
        }
    }
    currentdate = new Date();
    return {
        date: `${currentdate.getDate()}${currentdate.getMonth()+1}${currentdate.getFullYear()}`,
        time: `${currentdate.getHours()}${currentdate.getMinutes()}${currentdate.getSeconds()}${currentdate.getMilliseconds()}`
    }
},



//just to test saving test cases
createTestObject: async(testTitle, testarr, startTime, endTime, date)=>{
    var testcases = []
    // var testobj
        testarr.forEach(element => {
            if(element.err){
                testobj = {
                    title: element.title,
                    duration: element.duration/1000,
                    status: element.state,
                    speed: element.speed,
                    message: element.err.message
                }
            }else {
                testobj = {
                        title: element.title,
                        duration: element.duration/1000,
                        status: element.state,
                        speed: element.speed,
                        message: ''
                }
            }
        // console.log(testobj)
        testcases.push(testobj)
    });
    var data = {
        projectCode: Project.projectCode,
        testName: testTitle,
        startTime: startTime,
        endTime: endTime,
        testSteps: testcases   
    }
   // console.log('tests=====>', data)
    await apiCalls.createTestcase(data)
}

//end of module.exports
}


//initialize Project Name
var initProject = async()=>{
    Project = await initDrive.initializeProject()
    //console.log(Project)

    await apiCalls.getProjectByCode(Project.projectCode)
   .then((res)=>{
     //  console.log(res.data)
       if (res.data ==="N/A"){    
           apiCalls.createProject(Project)
       }else{
          console.log('Project Exists')
       }
   })

}