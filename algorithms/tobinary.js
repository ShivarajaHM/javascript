/******************************************************************************
 *  Execution       :   1. default node          : cmd> node tobinary.js
 *                      
 * 
 *  Purpose         : Convert decimal to binary numbers
 * 
 *  @description    
 * 
 *  @file           : tobinary.js
 *  @overview       : prints binary numbers
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var tobin=require('../Utility/utility');
const readline=require('readline-sync');
var num=readline.questionInt("enter number : ");
tobin.tobinary(num);