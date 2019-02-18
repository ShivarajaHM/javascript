class Player {
    constructor(cards) {
      this.cards = cards;
    }
    /**
     * Function to sort the cards.
     */
    sortedCards() {
      var sortedCards = [];
      var access = require("../OOPs_Programs/Utility/oopsutil");
      sortedCards = access.bubbleSortString(this.cards);
      return sortedCards;
    }
  }
  module.exports = { Player };