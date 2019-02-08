/******************************************************************************
 *  Execution       :   1. default node          : cmd> node tempconv.js
 *                      
 * 
 *  Purpose         : Given the temperature in fahrenheit as input outputs the 
 *                    temperature in Celsius or viceversa
 * 
 *  @description    
 * 
 *  @file           : tempconv.js
 *  @overview       : Prints converted output.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var conv=require('../Utility/utility');
const readline=require('readline-sync');
var temp=readline.question("please entered temperature : ");
var i=readline.question("1 for celsius to fahreinheit 2 for fahreinheit to celsius :");
conv.temperaturConversion(temp,i);