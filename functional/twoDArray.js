/******************************************************************************
 *  Execution       :   1. default node          : cmd>node twoDArray.js 
 *                      
 * 
 *  Purpose         : A library for reading in 2D arrays of integers from 
 *                    standard input and printing them out to standard output.
 * 
 *  @description    
 * 
 *  @file           : twoDArray.js 
 *  @overview       : Print function to print 2 Dimensional Array. In Java use 
 *                    PrintWriter with OutputStreamWriter to print the output to 
 *                    the screen.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')
const readline=require('readline-sync')
var m=readline.question("enter number of rows : ");
var n=readline.question("enter number of conumns : ");
var arr=[];
var res=Access.twoDArray(m,n,arr);
Access.printArray(res);