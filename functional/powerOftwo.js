/******************************************************************************
 *  Execution       :   1. default node          : cmd> node powerOftwo.js
 *                      
 * 
 *  Purpose         : This program takes a command-line argument N and prints a table 
 *                    of the powers of 2 that are less than or equal to 2^N.
 * 
 *  @description    
 * 
 *  @file           : powerOftwo.js
 *  @overview       : print power of 2 numbers until N th number.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility');
const readline=require('readline-sync');
var number=readline.questionInt("please enter Number :");
Access.powerOfTwo(number);