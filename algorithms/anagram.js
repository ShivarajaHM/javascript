/******************************************************************************
 *  Execution       :   1. default node          : cmd> node anagram.js
 *                      
 * 
 *  Purpose         : One string is an anagram of another if the second is simply
 *                    a rearrangement of the first. and check anagrams.
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : The Two Strings are Anagram or not.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var ana=require('../Utility/utility')
const readline=require('readline-sync')
var strone=readline.question("enter a first string : ");
var strtwo=readline.question("enter a second string : ");
var res=ana.isAnagram(strone,strtwo);
if(res){
    console.log("String is anagram.");
}else{
    console.log("String is not anagram.");
}