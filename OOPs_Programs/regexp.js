/* **************************************************************************************
 * Execution        : Default node             cmd> node regexp.js 
 * @file            : regexp.js
 * @overview        : Read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                      
 * @author          : Shivaraja H M      <shivumgc@gmail.com>
 * @version         : 1.0.  
 * @since           : 16/02/2019
 * **************************************************************************************/
var readline=require("readline-sync");
var path=require('../OOPs_Programs/Utility/oopsutil')
function regexp(){
    try{
        var name=readline.question("Enter your name : ");
        var fullname=readline.question("Enter your full name : ");
        var mobilenumber=readline.question("enter your phone number : ");
        var result=path.regexp(name,fullname,mobilenumber);
        console.log("\n" + result);
    }catch(error){
        console.log(error.message);
    }
}
regexp();
