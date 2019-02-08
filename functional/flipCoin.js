/******************************************************************************
 *  Execution       :   1. default node          : cmd>node flipcoin.js 
 *                      
 * 
 *  Purpose         : To flip coin and get the percentage of head and tails obtained.
 * 
 *  @description    
 * 
 *  @file           : flipcoin.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')

const readline=require('readline-sync');
var times=readline.question("Enter the number of times flip coin :");
Access.flipCoin(times);