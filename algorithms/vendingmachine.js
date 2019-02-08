/******************************************************************************
 *  Execution       :   1. default node          : cmd> node vendingmachine.js
 *                      
 * 
 *  Purpose         : Program to calculate the minimum number of Notes as well as 
 *                    the Notes to be returned by the Vending Machine as a Change

 * 
 *  @description    
 * 
 *  @file           : vendingmachine.js
 *  @overview       : Two Outputs - 
 *                     one the number of minimum Note needed to give the change and
 *                     second list of Rs Notes that would given in the Change
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-feb-2019
 *
 ******************************************************************************/
var vend=require('../Utility/utility')
const readline=require('readline-sync')
function vendmachine(){
    var amount=readline.question("enter amount: ");
    vend.vendingMachine(amount,0,0);
}
vendmachine();