
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 

    describe ('Register Business', function(){
        

        this.timeout(100000) 
        this.slow(15000)
        var startTime= action.getCurrentDateandTime()    
        var suffix = action.getCurrentDateandTimeString().time 
        
        before('Before', async ()=>{
            await action.launchBrowser() 
        });

        it('Get url', async (cb)=>{
            await action.getURL('http://iecr.softalliance.com/')
            cb()
        });

        it('Click "Register" link', async ()=>{
            await action.clickElement('linkText', 'Register')
        });
        
        it('Enter Business information', async ()=>{

            //enter Business  name
            await action.enterText('id', 'business_name', `TestBusiness_${suffix}`)
            //Enter Business address
            await action.enterText('id', 'business_address', `Anywhere in Lagos`)
            //Enter email
            await action.enterText('id', 'business_email', `business@bizizizi.com}`)
            //Enter Phone Number
            await action.enterText('id', 'business_phone', `090${suffix}`)
           
        });

        it('Select Currency', async ()=>{         
         
            await action.clickElement('id', 'business_currency')
            await action.wait(2000)
            await action.clickElement('css', '#app > div.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content > div > div > div:nth-child(3) > a > div > div')
            
        });

        it('Enter Contact Information', async ()=>{         
            //enter First Name
            await action.enterText('id', 'contact_first_name', 'John')
            //enter Last Name
            await action.enterText('id', 'contact_last_name','Boscoe')
            //enter Email
            await action.enterText('id', 'contact_email', 'joe@joelien.co.za')
            //enter Phone Number
            await action.enterText('id', 'contact_phone', `090${suffix}`)
             //enter PIN
            await action.enterText('id', 'contact_password', '54321')
              //enter PIN2
            await action.enterText('id', 'contact_confirm_password', '54321')

        });

        it('Click "Submit"', async ()=>{         
         await action.clickElement('xpath', '/html/body/div[1]/div/div[3]/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/form/div[8]/div/button/div')
        });

        it('Validate "OTP"', async ()=>{  
            await action.wait(2000)
            await action.enterText('id', 'otp_code', '654321')
            await action.clickElement('xpath', '/html/body/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/form/div[4]/div/button')
        });
        
        it('"Dashboard" Loaded', async function(){
            await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'Dashboard')
        });
      

        after('After"', async function(){    
            // endTime = action.getCurrentDateandTime()   
            // await action.quitBrowser()
            // action.createTestObject(this._runnable.parent.title, this._runnable.parent.tests, startTime, endTime, action.getCurrentDateandTimeString().time)
        });


})