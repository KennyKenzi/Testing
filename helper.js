webdriver = require('selenium-webdriver');
By = webdriver.By

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

