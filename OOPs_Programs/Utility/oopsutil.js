module.exports = {
  regexp(name, fullname, mobilenumber) {
    var readline = require('readline-sync');
    var patt = /[a-zA-Z]/;
    /**
    * condition to check whether the input is string.
    */
    while (!patt.test(name) || !patt.test(fullname)) {
      name = readLine.question("Enter your name(alphabets only) : ");
      fullName = readLine.question("Enter your full name(alphabets only) : ");
    }
    /**
    * condition to check whether the input is 10 digit number.
    */
    while (isNaN(mobilenumber) || mobilenumber.length != 10) {
      mobileNumber = readLine.question("\nEnter valid phone number(10 digits only) : ");
    }
    /**
    * Replacing name, full name, mobileNumebr, date with proper values passed using regular expressions.
    */
    var fileread = require('fs');
    var line = fileread.readFileSync('/home/admin1/Documents/javascript/OOPs_Programs/Utility/regexp.txt', 'utf8');
    var date = new Date();
    line = line.replace(/<<name>>/g, name);
    line = line.replace(/<<full name>>/g, fullname);
    line = line.replace(/xxxxxxxxxx/g, mobilenumber);
    line = line.replace(/01-01-2016/g, date);
    return line;
  },
  /**
  * Program to create a deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") &
  * Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
  * Returns the deck of card in a array
  */
  deckOfCards() {
    try {
      var suits = ["♣", "♦", "♥", "♠"];
      var ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
      /**
       * To calculate total number of cards
       */
      var totalCards = suits.length * ranks.length;
      /**
       * To create a deck of array
       */
      var cardArray = [];
      for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
        for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
          var temp = "";
          cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
        }
      }
      /**
       * To shuffle the deck
       */
      for (let shuffle = 0; shuffle < totalCards; shuffle++) {
        var num = Math.floor(Math.random() * totalCards);
        /**
         * Performing swapping
         */
        var temp = cardArray[shuffle];
        cardArray[shuffle] = cardArray[num];
        cardArray[num] = temp;
      }
      return cardArray;
    } catch (error) {
      console.log(error.message);
    }
  },
  bubbleSortString(arr) {
    try {
      var length = arr.length;
      /**
       * Loop from first element till length of array
       */
      for (let i = 0; i < length; i++) {
        /**
         * Loop for adjacent element to be compared
         */
        for (let j = 0; j < length - i - 1; j++) {
          /**
           * Compare the adjacent positions
           */
          if (arr[j] > arr[j + 1]) {
            /**
             * Temporary variable to hold the current element
             */
            var tmp = arr[j];
            /**
             * Replace current element with adjacent element
             */
            arr[j] = arr[j + 1];
            /**
             * Replace adjacent element with current element
             */
            arr[j + 1] = tmp;
          }
        }
      }
      //console.log(arr);
      return arr;
    } catch (error) {
      console.log(error.message);
    }
  }
}