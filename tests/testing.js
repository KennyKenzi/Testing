
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 
 
    describe ('Test!', function(){
        
        this.timeout(100000) 
        this.slow(15000)
        var startTime= action.getCurrentDateandTime()
        
        before('Before', async function(){
            await action.launchBrowser()  
            
        });

        it('TRIAL STEP', async function(){
            console.log('TESTING!!!!')
        });

        it('Get url', async function(){
                await action.getURL('http://iecr.softalliance.com/')
        });
        
        it('Page title should be "-"', async function(){
                await action.checkTitle('-') 
        });

        it('"Airtill" Text should be present', async()=>{      
                await action.findText('xpath', '//*[@id="fbody"]/div/div/div/div/div/div[1]/h1', 'Airtill') 
        })

         it('Enter Number into Phone Number field', async function(){
            await action.enterText('name', 'phone_number', '07070505031')
            });
        
        it('Enter Pin into Pin Code field', async function(){
            
            await action.enterText('xpath','/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div[2]/div[1]/div/input', '54321')
        });

         it('Click Submit', async function(){         
            await action.clickElement('xpath', '/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div/button')
        });
        
        it('"Dashboard" Loaded', async function(){
            await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'Dashboard')
        });

        after('After"', async function(){   
            endTime = action.getCurrentDateandTime()             
            await action.quitBrowser()
            action.createTestObject(this._runnable.parent.title, this._runnable.parent.tests, startTime, endTime, date)
        });

        
        
})

