/************************************************************************************
 * Execution    :   1.default node       cmd> node orderedlist.js
 *                   
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   orderedlist.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Shivaraja H M <shivumgc@gmail.com>
 * @version     :   1.0
 * @since       :   11-02-2019
 * 
 * ***********************************************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const read = require('readline-sync');
const ll = require('../Data_Structures/Implementation/listutil');
var temp = [];
const util = require('../Utility/utility');
try {
    var linklist = new ll.LinkedList();
    var fileName = read.question("enter filename")
    var datas = util.fileCall(fileName);
    for (let index = 0; index < datas.length; index++) {
        temp.push(parseInt(datas[index]))
    }
    console.log(temp);
    var data = util.bubblesort(temp);
    console.log(data);
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
        var display = linklist.display();
        console.log(display);
        var num = read.question("Enter the data you want to search");
        var check = linklist.search(num);
        console.log(check);
        if (check) {
            linklist.remove(num);
        }
        else {
            linklist.add(num);
        }
        var display = linklist.display();
        console.log(display);

        util.writeFile(fileName, display);
    } catch (err) {
        console.error(err);

}