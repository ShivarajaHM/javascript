var ana=require('../Utility/algorithmUtilities')
const readline=require('readline-sync')
var strone=readline.question("enter a first string : ");
var strtwo=readline.question("enter a second string : ");
var res=ana.isAnagram(strone,strtwo);
if(res){
    console.log("String is anagram.");
}else{
    console.log("String is not anagram.");
}