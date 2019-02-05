var Access=require('../Utility/utility')
const readline=require('readline-sync')
var m=readline.question("enter number of rows : ");
var n=readline.question("enter number of conumns : ");
var arr=[];
var res=Access.twoDArray(m,n,arr);
Access.printArray(res);