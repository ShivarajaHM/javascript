/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gambler.js
 *                      
 * 
 *  Purpose         : To play Gambling game till player reaches his goal or losses all his money.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : To play Gambling game till player reaches his goal or losses all his money.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')
const readline=require('readline-sync')
var stake=readline.question('please enter the stake :');
var goal=readline.question('please enter the goals : ');
var number=readline.question('please enter number of times: ');
Access.gambler(stake,goal,number);