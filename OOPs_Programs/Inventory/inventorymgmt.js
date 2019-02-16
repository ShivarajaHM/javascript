/* **************************************************************************************
 * Execution        : Default node             cmd> node inventorymgmt.js 
 * @file            : inventorymgmt.js
 * @overview        : Create InventoryManager to manage the Inventory. The Inventory Manager 
                      will use InventoryFactory to create Inventory Object from JSON. The 
                      InventoryManager will call each Inventory Object in its list to calculate
                      the Inventory Price and then call the Inventory Object to return the JSON String.
                      
 * @author          : Shivaraja H M      <shivumgc@gmail.com>
 * @version         : 1.0.  
 * @since           : 16/02/2019
 * **************************************************************************************/
var access=require('../Inventory/inventoryfactory');
var file=require('fs');
var read=require('readline-sync');
var data=file.readFileSync('/home/admin1/Documents/javascript/OOPs_Programs/Inventory/inventoryManagerStocks.json')
function main() {
    try {
      /**
       * Convert the JSON to javascript object and store it in a variable
       */
      var parsedData = JSON.parse(data);
      /**
       * Create inventoryFactory object to use the functionalities.
       */
      var object = new access.InventoryFactory();
       /**
       * Ask user to input the choice
       */
      while (ch != 4) {
        console.log("\nPress 1 to add :");
        console.log("Press 2 to remove :");
        console.log("Press 3 to print :");
        console.log("Press 4 to exit :");
        var ch = read.questionInt("Enter the number :\n");
        switch (ch) {
          case 1:
            object.add(parsedData);
            break;
          case 2:
            object.remove(parsedData);
            break;
          case 3:
            object.print(parsedData);
            break;
          case 4:
            break;
          default:
            console.log("\nPlease enter the correct number ");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  main();