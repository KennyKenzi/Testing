var assert= require ('chai').assert;

module.exports = {


    assertContains: function (string, subString, label) {
        // async.series([function (next) {
        //     takescreenshot(next)
        // }
        // ], 
        // function (err, response) {
        //     console.log("response =" + response)
        //     actualmsg(label + string + " does not contain " +  Substring);
        //     expectedmsg(label + string + " contains " + Substring);
        //     assert(string).contains(Substring);
        // })
        assert.include(string, subString, `${string}contains ${subString}`)

    },

    assertTrue: function (label, condition, boolean) {
        // async.series([function (next) {
        //     takescreenshot(next)
        // }

        // ], function (err, response) {
        //     logtoconsole(label + " is not " + condition)
        //     actualmsg(label + " not " + condition);
        //     expectedmsg(label + " should be " + condition);
        //     //assert(boolean).isTrue();
        //     asserts.isTrue(boolean, label + " is not " + condition)
        // })
        assert.isTrue(boolean, )
    },

    assertEqualto: function (actual, expect, label) {
        // var actms = label + " is " + actual
        // var exptms = label + " should be " + expect
        // async.series([function (next) {
        //     takescreenshot(next)
        // }

        // ], function (err, response) {
        //     //logtoconsole(assert(actual).equalTo(expect))
        //     logtoconsole(actms + exptms)
        //     actualmsg(actms);
        //     expectedmsg(exptms);
        //     //assert(actual).equalTo(expect);
        //     asserts.equal(actual, expect, actual + " is not equal to " + expect);
        // })
        console.log('label',label)
        assert.equal(actual, expect)
    },

    assertNotEqualto: function (actual, expect, label) {
        var actms = label + " is " + actual
        var exptms = label + " should be " + expect
        async.series([function (next) {
            takescreenshot(next)
        }

        ], function (err, response) {
            console.log("response =" + response)
            console.log("ERR= " + actms + exptms)
            actualmsg(actms);
            expectedmsg(exptms);
            assert(actual === expect).isFalse();
        })
    },

    logtoconsole: function (msg) {
        module.exports.browser.wait(function () {
            console.log(msg);
            return true;
        }, 50000);
    },

    savetoDB: (testName, timeStarted, status)=>{

        const info = {
            testName,
            timeStarted,
            status
        }
        console.log(info)
    },

    errorroutine: function (err) {

        async.series([function (next) {
                takescreenshot(next)
            }],
            function (error, response) {
                logtoconsole("Error Occured: " + err);
                console.log("response =" + response)
                logtoFile("Error Occured: " + err.state);
                assert(err).isTrue();
            })
    }
    
}