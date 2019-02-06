var path=require('../Utility/utility')
const readline=require('readline-sync')
var a=readline.question("enter the x origin value : ");
var b=readline.question("enter the y origin value : ");
var res=path.distance(a,b);
console.log("Euclidean distance is : "+res);