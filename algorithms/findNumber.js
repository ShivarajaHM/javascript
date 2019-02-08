/******************************************************************************
 *  Execution       :   1. default node          : cmd> node findNumber.js
 *                      
 * 
 *  Purpose         : Find the number between start and end(mid)
 * 
 *  @description    
 * 
 *  @file           : findNumber.js
 *  @overview       : Print the intermediary number and the final answer
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var find=require('../Utility/utility')
const readline=require('readline-sync')
var low = readline.questionInt("Enter starting number : ");
var high=readline.questionInt("Enter last number : ");
var n = find.findNumber(low,high,readline);
console.log("Your number is : "+n);