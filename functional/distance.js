/******************************************************************************
 *  Execution       :   1. default node          : cmd> node distance.js
 *                      
 * 
 *  Purpose         : To find the distance of two points 'x' & 'Y' from origin.
 * 
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : The formulae to calculate distance = sqrt(x*x + y*y).
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var path=require('../Utility/utility')
const readline=require('readline-sync')
var a=readline.question("enter the x origin value : ");
var b=readline.question("enter the y origin value : ");
var res=path.distance(a,b);
console.log("Euclidean distance is : "+res);