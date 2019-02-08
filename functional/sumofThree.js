/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sumofThree.js
 *                      
 * 
 *  Purpose         : A program with cubic running time. Read in N integers and
 *                    counts the   number of triples that sum to exactly 0.
 * 
 *  @description    
 * 
 *  @file           : sumofThree.js
 *  @overview       : One Output is number of distinct triplets as well as the
 *                    second output is to print the distinct triplets.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')
const readline=require('readline-sync')
function sumOfThree(){
var arr=[];
var res=[];
res=Access.arrayCall(arr);
Access.sumOfthree(res);
}
sumOfThree();