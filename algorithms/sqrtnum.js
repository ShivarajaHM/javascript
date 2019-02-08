/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sqrtnum.js
 *                      
 * 
 *  Purpose         : Compute the square root of a nonnegative number c given
 *                    in the input using Newton's method.
 * 
 *  @description    
 * 
 *  @file           : sqrtnum.js
 *  @overview       : Sqrt of given number.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var sq=require('../Utility/utility');
var readline=require('readline-sync');
function sqfun(){
    var num=readline.questionInt("enter non negative value : ");
    sq.sqrtfun(num);
}
sqfun();