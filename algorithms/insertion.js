/******************************************************************************
 *  Execution       :   1. default node          : cmd> node insertion.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses insertion sort.
 * 
 *  @description    
 * 
 *  @file           : insertion.js
 *  @overview       : Print the Sorted List
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-feb-2019
 *
 ******************************************************************************/
var ins=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=ins.createArray(num);
arr=ins.insertionsort(arr);
console.log(arr);