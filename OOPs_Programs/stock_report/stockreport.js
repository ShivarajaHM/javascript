/* **************************************************************************************
 * Execution        : Default node             cmd> node stockreport.js 
 * @file            : stockreport.js
 * @overview        : Program to read in Stock Names, Number of Share, Share Price.
                      Print a Stock Report with total value of each Stock and the total 
                      value of Stock.
                      
 * @author          : Shivaraja H M      <shivumgc@gmail.com>
 * @version         : 1.0.  
 * @since           : 16/02/2019
 * **************************************************************************************/
var stock=require('../stock_report/stockport');
function mainstock(){
    stock.calculateReport();
}
mainstock();