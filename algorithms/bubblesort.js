/******************************************************************************
 *  Execution       :   1. default node          : cmd> node bubblesort.js
 *                      
 * 
 *  Purpose         : Reads in integers prints them in sorted order using Bubble Sort
 * 
 *  @description    
 * 
 *  @file           : bubblesort.js
 *  @overview       : Print the Sorted List
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-feb-2019
 *
 ******************************************************************************/
var bub=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=bub.createArray(num);
arr=bub.bubblesort(arr);
console.log(arr);