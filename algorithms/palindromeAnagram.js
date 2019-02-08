/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindromeAnagram.js
 *                      
 * 
 *  Purpose         : Print palindrome numbers and two numbers compare anagram or not
 * 
 *  @description    
 * 
 *  @file           : palindromeAnagram.js
 *  @overview       : prints palindrome and anagram numbers
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var pali=require('../Utility/utility')
const readline=require('readline-sync')
function palindrome(){
    console.log("program start..");
    pali.isAnagramPalimdrome();
}
palindrome();