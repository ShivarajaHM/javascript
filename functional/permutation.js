/******************************************************************************
 *  Execution       :   1. default node          : cmd> node permutation.js
 *                      
 * 
 *  Purpose         : Check if the arrays returned by two string functions are equal.
 * 
 *  @description    
 * 
 *  @file           : permutation.js
 *  @overview       : Displaying permutation possibilities.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var path=require('../Utility/utility')
const readline=require('readline-sync')
var val=readline.question("enter a string: ");
path.permuatation(val);