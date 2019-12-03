var assert= require ('chai').assert;
webdriver = require('selenium-webdriver');

module.exports={

//gets the title of current page, takes in the title arg asserts a comparison
checkTitle: async function(arg, driver){

    await  driver.executeScript("return document.title;")
                .then(function(return_value){
                assert.equal(return_value, arg)
              
})
}








//end of module.exports
}






//module.exports ={checkTitle}