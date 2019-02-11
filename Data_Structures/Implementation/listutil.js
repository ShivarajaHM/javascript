
/***************************************************************************
* 
* Purpose      :   To have all the functionalities of DataStructure Programs.
* 
* @description
* 
* @file        :   listutil.js
* @overview    :   Export the functionalities to developers for reuseability,
*                  simplification of coding.
* @author      :   Shivaraja H M <shivumgc@gmail.com>
* @version     :   1.0
* @since       :   11-02-2019
* 
* ***************************************************************************/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    add(data) { 
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;

        }
        else {
            var temp = this.first;
            while (temp.next) {
                temp = temp.next;
            }
            this.size++;
            
            temp.next = node;
        }
    }
    search(item) {
        if (this.first == null) {
            return false;
        }

        var temp = this.first;
        while (temp) {
            if (temp.data == item) { 
                return true;
            }

            temp = temp.next;
        }
        return false;
    }
    addToPos(data) {
        var temp = this.first;
        var prev = temp;

        if (data < temp.data) {
            this.insertFirst(data);
            return
        }
        var node = new Node(data);
        while (temp.next) {
            if (temp.data < data) {
                prev = temp;
                temp = temp.next;
            }
            else {
                prev.next = node
                node.next = temp

                break;
            }
        }
        if (!temp.next) {
            temp.next = node;
        }
        this.size++;
    }
    remove(data) {

        var temp = this.first;
        if (temp.data == data) {
            this.deleteFirst();
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }
    display() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + " " + temp.data; 
            temp = temp.next;
        }
        return str;
    }
    isEmpty() 
    { 
        return this.size == 0; 
    } 

}
module.exports = {
    LinkedList
}
