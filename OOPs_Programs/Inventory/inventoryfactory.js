var read=require('readline-sync');
var file=require('fs');
class InventoryFactory{
   /**
   * Function to add the details of the share into JSON file.
   * @param {JSON object} data
   */
    add(data){
        try{
            var name=read.question("enter the name of the stock to add : ");
            var shares=read.question("enter the number of shares : ");
            var cost=read.question("enter the price of the shares : ");
            /**
            * Push the data given to the end of the array(ie, JSON object)
            */
            data.ListOfStocks.push({shareName:name,noOfShares:shares,price:cost});
            /**
            * Use function JSON.stringify() to convert data into a string and write it to JSON file
            */
            file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/Inventory/inventoryManagerStocks.json',JSON.stringify(data));

        }catch(error){
            console.log(error.message);
            
        }
    }
    /**
   * Function to remove the details of the share from JSON file.
   * @param {JSON object} data
   */
    remove(data){
        try{
            var name=read.question("enter the name to remove from stock : ");
            /**
            * Loop over the data in the JSON file and search for the name given by the user,
            * remove it from the file.
            */
            for(let i=0;i<data.ListOfStocks.length;i++){
                if(data.ListOfStocks[i].shareName==name){
                    var index = data.ListOfStocks.indexOf(data.ListOfStocks[i]);
                    data.ListOfStocks.splice(index, 1);
                }
                /**
                * Use function JSON.stringify() to convert data into a string and write it to JSON file
                */
                file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/Inventory/inventoryManagerStocks.json',JSON.stringify(data));
            }
        }catch(error){
            console.log(error.message);
            
        }
    }
    /**
   * Function to print the details of the shares in JSON file.
   * @param {JSON object} data
   */
  print(data) {
    var stock = data.ListOfStocks;
    for (const key in stock) {
      console.log(stock[key]);
    }
  }
  /**
   * Function to print the calculated values of the shares in JSON file.
   * @param {JSON object} data
   */
  calcValue(data) {
    try {
      var access = require("../stockReport/stock");
      var totalValue = 0;
      var stock = data.ListOfStocks;
      /**
       * Using for-in loop, access each stock, create a stock object and invoke valueOfStock() method
       * and print the total value of all the stocks
       */
      for (const key in stock) {
        var hold = stock[key];
        var sto = new access.Stock(hold.shareName, hold.noOfShares, hold.price);
        var report = sto.valueOfStock();
        console.log("Value of stock " + hold.shareName + " : " + report + "₹\n");
        totalValue = totalValue + report;
      }
      console.log("Total value of all the stocks: " + totalValue + "₹\n");
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports={InventoryFactory}