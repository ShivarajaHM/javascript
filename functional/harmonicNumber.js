/******************************************************************************
 *  Execution       :   1. default node          : cmd> node harmonicNumber.js
 *                      
 * 
 *  Purpose         : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * 
 *  @description    
 * 
 *  @file           : harmonicNumber.js
 *  @overview       : Print the Nth Harmonic Value
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility');
const readline=require('readline-sync');
var number=readline.question('Please enter N value ');
Access.harmonicNumber(number);