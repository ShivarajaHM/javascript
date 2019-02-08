/******************************************************************************
 *  Execution       :   1. default node          : cmd>node couponNumber.js 
 *                      
 * 
 *  Purpose         : Generate random coupon number 
 * 
 *  @description       
 * 
 *  @file           : couponNumber.js
 *  @overview       : Total random number needed to have all distinct numbers
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
var Access=require('../Utility/utility')
const readline=require('readline-sync')
var number=readline.question('please entered the N value : ');
Access.generatecoupon(number);