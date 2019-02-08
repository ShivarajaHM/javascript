/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stringReplace.js
 *                      
 * 
 *  Purpose         : To replace String Template “Hello <<UserName>>, How are you?”
 *                    with the given user input.
 * 
 *  @description    
 * 
 *  @file           : stringReplace.js
 *  @overview       : To replace String Template with givemn user input.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var read=require('readline-sync')
replace();
function replace() {
    var flag = true
    while (flag) {
        var input = read.question("Enter the name?");
        if (input.length > 2) {
            console.log("Hello " + input + ", How are you?")
            flag = false
        }
        else
            console.log("User name should be greater than two letters.")
    }
}