
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 

    describe ('Test!', function(){
        this.timeout(60000)  
        
        before('Before', async function(){
            await action.launchBrowser()
            console.log('Loading Test...')   
        });

        it('Login', async function(done){
            //console.log('Getting url...')
            await action.getURL('http://iecr.softalliance.com');

            await action.checkTitle('-')

            await action.enterText('name', 'phone_number', '07070505031')

            await action.enterText('xpath','/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div[2]/div[1]/div/input', '54321')
        
            await action.clickElement('xpath', '/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div/button')
            
            await action.wait(3000)

            await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'Dashboard')
       
            done()
        });

        it('Check title should be "-"', async function(){
           console.log('Creating user')
        });

        //  it('Enter Number into Phone Number field', async function(){
            
        //     await action.enterText('name', 'phone_number', '07070505031')
        // });
        
        // it('Enter Pin into Pin Code field', async function(){
            
        //     await action.enterText('xpath','/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div[2]/div[1]/div/input', '54321')
        // });

        //  it('Click Submit', async function(){         
        //     await action.clickElement('xpath', '/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div/button')
        // });

        // it('Wait for some time', async function(){         
        //     await action.wait(3000)
        // });
        
        // it('"Dashboard" Loaded', async function(){
        //     await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'Dashboard')
        // });

        after('After"', async function(){    
            action.quitBrowser()
        });


})