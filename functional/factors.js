/******************************************************************************
 *  Execution       :   1. default node          : cmd>node factors.js 
 *                      
 * 
 *  Purpose         : To get the prime factorization of user asked number.
 * 
 *  @description    
 * 
 *  @file           : factors.js
 *  @overview       : To check the divisiblity from 2 to sqare root of the number Iteratively.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')
const readline=require('readline-sync')
var number=readline.question('enter N value : ');
Access.primeFactor(number);