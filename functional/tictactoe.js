/******************************************************************************
 *  Execution       :   1. default node          : cmd> node node tictactoe.js
 *                      
 * 
 *  Purpose         : Program to play a Cross Game or Tic-Tac-Toe Game. Player 1
 * 					  is the Computer and the Player 2 is the user. Player 1 take 
 * 					  Random Cell that is the Column and Row. 
 * 
 *  @description    
 * 
 *  @file           : tictactoe.js
 *  @overview       : Print the Col and the Cell after every step
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var tic=require('../Utility/utility')
const readline=require('readline-sync')
function ticTacToe(){
    var flag = false;
    var arr = tic.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while(count<=9) 
    {
	    arr = tic.computerPlayer(arr);
		count++;
		while(count>4)
		{
		flag = tic.check(arr);
		break;
		}
	    if(flag)
	    {
    	    console.log("Computer is the winner. Better luck next time");
	        break;
	    }
	    else if(count==8)
	    {
		    console.log("Draw match.. Try next!");	
		    break;
    	}
	    arr = tic.userPlayer(arr);
	    while(count>4)
		{
		flag = tic.check(arr);
		break;
		
		}
	    if(flag)
	    {
	        console.log("Gosh!.. I knew it. You are the winner");
		    break;
    	}
	    count++;
		}
        console.log("Game end");
}
ticTacToe();