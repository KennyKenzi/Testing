
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 
 
    describe ('LOGIN!', function(){ 

        this.timeout(100000) 
        this.slow(15000)
        var startTime= action.getCurrentDateandTime()
      
        before('Before', async ()=>{
            await action.launchBrowser()  
        });

        it('Teeeeeeee', async()=>{
            console.log('okaaaay')
        })
        // it('Get url', async ()=>{
        //         await action.getURL('http://iecr.softalliance.com/')
        // });
        
        // it('Page title should be "-"', async ()=>{
        //         await action.checkTitle('-') 
        // });

        // it('"Airtill" Text should be present', async()=>{      
        //         await action.findText('xpath', '//*[@id="fbody"]/div/div/div/div/div/div[1]/h1', 'Airtill') 
        // })

        //  it('Enter Number into Phone Number field', async ()=>{
        //     await action.enterText('name', 'phone_number', '07070505031')
        //     });
        
        // it('Enter Pin into Pin Code field', async ()=>{
            
        //     await action.enterText('xpath','/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div[2]/div[1]/div/input', '54321')
        // });

        //  it('Click Submit', async ()=>{         
        //     await action.clickElement('xpath', '/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div/button')
        //     await action.wait(3000)
        // });
        
        // it('"Dashboard" Loaded', async function(){
        //     await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'Dashboard')
        // });

        after('After"', async function(){  
            endTime = action.getCurrentDateandTime()   
            action.quitBrowser()
            action.createTestObject(this._runnable.parent.title, this._runnable.parent.tests, startTime, endTime, action.getCurrentDateandTimeString().time)
        });


})