webdriver = require('selenium-webdriver');
By = webdriver.By
var until = require('selenium-webdriver').until;


module.exports={ 

    findElement: (type, element)=>{
        // console.log('here',type, element)
        switch(type) {

            case "css":
               return driver.findElement(By.css(element));
            case "id":
               return driver.findElement(By.id(element));
            case "xpath":
                return driver.findElement(By.xpath(element));   
            case "linkText":
                return driver.findElement(By.linkText(element));
            case "name":
               return driver.findElement(By.name(element));
            case "class":
               return driver.findElement(By.className(element));
            default:
                return driver.findElement(By.id(element));


        }
    },

    findElements: (type, element)=>{
        // console.log('here',type, element)
        switch(type) {

            case "css":
               return driver.findElements(By.css(element));
            case "id":
               return driver.findElements(By.id(element));
            case "xpath":
                return driver.findElements(By.xpath(element));   
            case "linkText":
                return driver.findElements(By.linkText(element));
            case "name":
               return driver.findElements(By.name(element));
               
            case "class":
               return driver.findElements(By.className(element));
            default:
                return driver.findElements(By.id(element));


        }
    },

        elementlocated: function (type, element) {
            switch (type) {
                case "css":
                    return driver.wait(until.elementLocated(webdriver.By.css(element)), 5000);
                case "id":
                    return driver.wait(until.elementLocated(webdriver.By.id(element)), 5000);
                case "xpath":
                    return driver.browser.wait(until.elementLocated(webdriver.By.xpath(element)), 5000);
                case "linkText":
                    return driver.browser.wait(until.elementLocated(webdriver.By.linkText(element)), 5000);
                case "name":
                    return driver.browser.wait(until.elementLocated(webdriver.By.name(element)), 5000);
                case "class":
                    return driver.browser.wait(until.elementLocated(webdriver.By.className(element)), 5000);
                default:
                    return driver.browser.wait(until.elementLocated(webdriver.By.id(element)), 5000);
            }
    },


    elementpresent:function (type, element){
        driver.wait(function () {
            switch(type) {
                case "css":
                    return driver.isElementPresent(webdriver.By.css(element));
                case "id":
                    return driver.isElementPresent(webdriver.By.id(element));
                case "xpath":
                    return driver.isElementPresent(webdriver.By.xpath(element));
                case "linkText":
                    return driver.isElementPresent(webdriver.By.linkText(element));
                case "name":
                    return driver.isElementPresent(webdriver.By.name(element));
                case "class":
                    return driver.isElementPresent(webdriver.By.className(element));
                default:
                    return driver.isElementPresent(webdriver.By.id(element));
            }
        }, timeout);
    },


    // findChildElements: (type, element, type2, element2)=>{
    //     // console.log('here',type, element)
    //     switch(type) {

    //         case "css":
    //            return driver.findElement(By.css(element).findElements(By.type2.(element2));
    //         case "id":
    //            return driver.findElements(By.id(element));
    //         case "xpath":
    //             return driver.findElements(By.xpath(element));   
    //         case "linkText":
    //             return driver.findElements(By.linkText(element));
    //         case "name":
    //            return driver.findElements(By.name(element));
               
    //         case "class":
    //            return driver.findElements(By.className(element));
    //         default:
    //             return driver.findElements(By.id(element));


    //     }
    // }
}

