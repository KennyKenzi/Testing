
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver');
action = require('../actions')
 

    describe ('Test!', function(){
        this.timeout(50000)  

        
        before('Before', async function(){
            await action.launchBrowser()
            console.log('Loading Test...')
            
        });


        it('Get url', async function(){
            await action.getURL('http://iecr.softalliance.com');
            // done()
        });

        it('Check title should be "Nothing"', async function(){
            await action.checkTitle('-')
        });

         it('Enter Number into Phone Number field', async function(){
            
            await action.enterText('name','phone_number', '07070505031')
        });
        
        it('Enter Pin into Pin Code field', async function(){
            
            await action.enterText('xpath','/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div[2]/div[1]/div/input', '54321')
        });

         it('Click Submit', async function(){         
            await action.clickElement('xpath', '/html/body/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div/button')
        });

        it('Wait for some time', async function(){         
            await action.wait(5000)
        });
        
        it('"Dashboard" Loaded', async function(){
            await action.findText('css', '#base-layout > main > div > div > div > div.v-card__title.red.darken-2.white--text.v-card__title--primary > h3', 'dashboard')
        });
        // #base-layout > main > div > div > div > div.layout.row > div > div:nth-child(1)
        // #base-layout > main > div > div > div > div.layout.row > div > div:nth-child(1) > div:nth-child(1)
        // #base-layout > main > div > div > div > div.layout.row > div > div:nth-child(1) > div:nth-child(2)
        // it('Find "Search Box" Element', async function(){
        //     await action.findElement('class','hiecrLFyf gsfi')
        // });

        // it('Enter Text into Search Box', async function(){
            
        //     await action.enterText('class','gLFyf gsfi', 'softalliance')
        // });

        // it('Click Enter', async function(){         
        //     await action.clickElement('xpath', '/html/body/div/div[4]/form/div[2]/div[1]/div[3]/center/input[1]')
        // });

        // it('Click SoftAlliance Website', async function(){         
        //     await action.clickElement('class', 'S3Uucc')
        // });

        after('After"', async function(){    
            action.quitBrowser()
        });


})