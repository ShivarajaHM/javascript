var prime=require('../Utility/algorithmUtilities')
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