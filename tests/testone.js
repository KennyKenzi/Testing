
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')


    describe ('Test!', function(){
        this.timeout(60000)  

        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build()

        
        before('Before', async function(){

            await driver.get('https://www.google.com/');

        });
        


         it('Check title should be "Google"', async function(){

            await action.checkTitle('Google', driver)


        });

        after('Title should be "Google"', async function(){
         
            driver.quit() 

        });


})