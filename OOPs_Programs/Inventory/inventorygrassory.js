/*********************************************************************************************
 * Execution        : Default node             cmd> node inventorygrassory.js 
 * @file            : inventorygrassory.js
 * @overview        : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.Create the JSON from Inventory 
                      Object and output the JSON String
 * @author          : Shivaraja H M.      <shivumgc@gmail.com>
 * @version         : 1.0.  
 * @since           : 14/02/2019
 *******************************************************************************************/
var file=require("fs");
var access=require('../Utility/inventoryutil')
function invetory(){
    try{
        var data=file.readFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/first.json');
        var inObj=JSON.parse(data);
        access.inventory(inObj);
        //var val=JSON.stringify(inObj);
        //console.log(" The Output of JSON String :\n"+val+"\n");      

    }catch(error){
        console.log(error.message);
        
    }
}
invetory();