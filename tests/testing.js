
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 
 
    describe ('Login Test!', function(){
        var data =[{}]
        this.timeout(100000) 
        var startTime= action.getCurrentDateandTime()
        data.push(startTime)
        
        before('Before', async function(){
            await action.launchBrowser()  
        });

        it('Get url', async function(){
            try{
                await action.getURL('http://iecr.softalliance.com').then(()=>{  
                    data.push(action.passedTest(this.Suite.title))
                }) 
            }catch(e){ 
                data.push(action.failedTest(this.test.title, e))
            }
        });
        
        it('Check title should be "-"', async function(){
            try{
                await action.checkTitle('-') 
                data.push(action.passedTest(this.test.title))      
            }catch(e){
                data.push(action.failedTest(this.test.title, e))
            }
        });

        it('Check Airtill Text', async ()=>{
            try{
                await action.findText('xpath', '//*[@id="fbody"]/div/div/div/div/div/div[1]/h1', 'Airtill') 
                console.log('title==>', this.title)
               // data.push(action.passedTest(this.test.title))      
            }catch(e){
                console.log(e)
                //console.log("title", this.test.title)
               // data.push(action.failedTest(this.test.title, e))
            }
        })

        //  it('Enter Number into Phone Number field', async function(){
        //     await action.enterText('name', 'phone_number', '07070505031')
        //     console.log('======>cuurent test name',this.test.fullTitle())
        //     });
        
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
            endTime = action.getCurrentDateandTime() 
            data.push(endTime)
            action.quitBrowser()
            console.log(data)
            //console.log(this.test)
        });


        
})