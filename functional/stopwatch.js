/******************************************************************************
 *  Execution       :   1. default node          : cmd>node stopwatch.js 
 *                      
 * 
 *  Purpose         : Stopwatch Program for measuring the time that elapses 
 *                    between the start and end clicks
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js 
 *  @overview       : Print the elapsed time
 *  @author         : Shivaraja H M <shivumgc@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var watch=require('../Utility/utility')
const read=require('readline-sync')
function stopw(){
watch.stopwatch(read);
}
watch.stopwatch(read);