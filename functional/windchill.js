/******************************************************************************
 *  Execution       :   1. default node          : cmd> node windchill.js
 *                      
 * 
 *  Purpose         : Program to windchill. 
 * 
 *  @description    
 * 
 *  @file           : windchill.js
 *  @overview       : Calculation done.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var wind=require('../Utility/utility')
const readline=require('readline-sync')
var a=readline.question("enter temperature : ");
var b=readline.question("enter volume : ");
wind.windchill(a,b);