/* **************************************************************************************
 * Execution        : Default node             cmd> node mainAddOops.js 
 * @file            : mainAddOops.js
 * @overview        : To create addressBook object and pass the json data, ask user to perform
 *                    operations like create, read, update, delete and sort and to save it in a JSON
 *                    file.       
 * @author          : Shivaraja H M      <shivumgc@gmail.com>
 * @version         : 1.0.  
 * @since           : 22/02/2019
 * **************************************************************************************/
var read = require('readline-sync');
var M = require('../addressBook/addressOOPs');
var file = require('fs');
var data1 = file.readFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', 'utf8');
/**
 * Read json file data
 */
var data = JSON.parse(data1);
// object creation of AddressBook class
var object = new M.AddressBook;
// function defination
function address(data) {
    console.log("Enter 1 for add person information");
    console.log("Enter 2 for update person information");
    console.log("Enter 3 for remove person information");
    console.log("Enter 4 for sort the addressbook based on ZIP");
    console.log("Enter 5 for sort the addressbook based on firstname");
    console.log("Enter 6 for Print all addressbook information");
    var num = read.questionInt("Select  any number:");
    switch (num) {
        case 1: object.addPerson(data);
            break;
        case 2: object.updatePerson(data);
            break;
        case 3: object.removeperson(data);
            break;
        case 4: object.sortzip(data);
            break;
        case 5: object.sortfname(data);
            break;
        case 6: object.printadd(data);
            break;

    }

}
// function calling
address(data);