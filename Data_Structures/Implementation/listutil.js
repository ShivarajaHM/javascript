
/*************************************************************************************
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
* *************************************************************************************/


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
    insertFirst(element) {    
        var n = new Node(element);
        if (this.head == null) {
          this.head = n;
          this.size++;
          return;
        } else {
          n.next = this.head;
          this.head = n;
          this.size++;
          return;
        }
      }
      deleteFirst() {             
        if (this.head == null) {
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
      }

}
class LinkedList1 {
    /**
     * Linked List class has two properties, where head stores the first node of a List,
     * and size indicates the number of nodes in a list.
     */
    constructor() {
      this.head = null;
      this.size = null;
    }
  
    /**
     * to add data to the end of the list
     * @param:  String to add.
     */
    add(data) {
      try {
        var node = new Node(data);
        /**
         * To store current data
         */
        var current = this.head;
        /**
         * if list is empty, add the data and make it head
         */
        if (this.head == null) {
          this.head = node;
        } else {
          current = this.head;
          /**
           * Iterate to the end of the list
           */
          while (current.next) {
            current = current.next;
          }
          /**
           * Add the node
           */
          current.next = node;
        }
        this.size++;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * Searches for item in the list. It need the item and returns a boolean value.
     * @param : String to search.
     */
    search(data) {
      try {
        var temp = this.head;
        /**
         * Iterate to the end of the list
         */
        while (temp) {
          /**
           * Return true if the passed data is equal to the data, else return false
           */
          if (temp.data == data) {
            return true;
          }
          temp = temp.next;
        }
        return false;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * Removes data from the list. It need the data and modifies the list.
     * @param : data to accept string.
     */
    removeItem(data) {
      try {
        var current = this.head;
        var prev = null;
  
        while (current != null) {
          /**
           * comparing data with current data. If found, then remove and return true .
           */
          if (current.data == data) {
            if (prev == null) {
              this.head = current.next;
            } else {
              prev.next = current.next;
            }
            this.size--;
            return true;
          }
          prev = current;
          current = current.next;
        }
        return false;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * prints the list items
     */
    printList() {
      try {
        var curr = this.head;
        var str = "";
        while (curr) {
          str += curr.data + " ";
          curr = curr.next;
        }
        return str;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * To insert an element at the given index in list.
     * @param: {element}: accepts element to add.
     *         {index}: Number to specify the index to add the element.
     */
    insertAt(element, index) {
      try {
        if (index > 0 && index > this.size) return false;
        else {
          /**
           * Create a new node and pass the element
           */
          var node = new Node(element);
          var curr, prev;
          curr = this.head;
          /**
           * add the element to the first index
           */
          if (index == 0) {
            node.next = this.head;
            this.head = node;
          } else {
            curr = this.head;
            var it = 0;
            /**
             * iterate over the list to find the position to insert
             */
            while (it < index) {
              it++;
              prev = curr;
              curr = curr.next;
            }
            /**
             * Adding the element.
             */
            node.next = curr;
            prev.next = node;
          }
          this.size++;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * To get the position of the index.
     * @param {array} arr
     * @param {Number} num
     */
    addpos(arr, num) {
      try {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[0] >= num) return 0;
          else if (arr[i] < num && arr[i + 1] > num) {
            return i + 1;
          }
        }
        return arr.length;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * To print the details of shares 
     */
    printShares() {
      var arr = [];
      if (this.head == null) {
        return null;
      } else {
        var temp = this.head;
        while (temp) {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }
    /**
     * To remove the share from the stock
     * @param {any} element 
     */
    removeStock(element) {
      var temp = this.head;
      var prev = null;
  
      // iterate over the list
      while (temp != null) {
        // comparing element & if found then remove
        var stock = temp.data;
        if (stock.name == element || stock.symbol == element) {
          if (prev == null) {
            this.head = temp.next;
          } else {
            prev.next = temp.next;
          }
          /**
           * To decrement the size of the LinkedList
           */
          this.size--;
          return temp.data;
        }
        prev = temp;
        temp = temp.next;
      }
      return -1;
    }
  }
  
module.exports = {
    LinkedList,LinkedList1
}
