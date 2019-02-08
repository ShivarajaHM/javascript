var Access=require('../Utility/utility')
const readline=require('readline-sync');
var year=readline.question("please enter year is greater than 999 : ");
Access.leap(year);