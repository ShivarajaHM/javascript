/******************************************************************************
 *  Execution       :   1. default node          : cmd> node monthlypay.js
 *                      
 * 
 *  Purpose         : To calculate monthly payment.
 * 
 *  @description    
 * 
 *  @file           : monthlypay.js
 *  @overview       : Displays calculation results.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var mon=require('../Utility/utility');
const readline=require('readline-sync');
var p=+process.argv[2];
var y=+process.argv[3];
var r=+process.argv[4];
mon.payment(p,y,r);