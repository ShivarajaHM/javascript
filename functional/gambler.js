var Access=require('../Utility/utility')
const readline=require('readline-sync')
var stake=readline.question('please enter the stake :');
var goal=readline.question('please enter the goals : ');
var number=readline.question('please enter number of times: ');
Access.gambler(stake,goal,number);