/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primenumbers.js
 *                      
 * 
 *  Purpose         : Prints N th numbers of prime numbers
 * 
 *  @description    
 * 
 *  @file           : primenumbers.js
 *  @overview       : Prints prime numbers.
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var prime=require('../Utility/utility')
const readline=require('readline-sync')
var n=readline.question("Enter number between 0 to 1000 : ");
function primenum(n){
for(let i=2;i<=n;i++){
var res=prime.isPrime(i);
if(res){
    console.log(i);
}
}
}
primenum(n);