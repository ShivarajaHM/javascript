var wind=require('../Utility/utility')
const readline=require('readline-sync')
var a=readline.question("enter temperature : ");
var b=readline.question("enter volume : ");
wind.windchill(a,b);