/******************************************************************************
 *  Execution       :   1. default node          : cmd> node quadratic.js
 *                      
 * 
 *  Purpose         : Find the roots of quadratic equation.
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : Result as quadratic equation output.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var quad=require('../Utility/utility')
const readline=require('readline-sync')
var a=readline.question("enter a value : ");
var b=readline.question("enter b value : ");
var c=readline.question("enter c value : ");
quad.quadroot(a,b,c);