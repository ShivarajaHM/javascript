class Stock{
    /**
     * 
     * @param {string} name 
     * @param {Number} numberOfShares 
     * @param {Number} sharePrice 
     */
    constructor(name,numberOfShares,sharePrice){
        this.name=name;
        this.numberOfShares=numberOfShares;
        this.sharePrice=sharePrice;
    }
    /**
     * Return the value of the stock.
     */
    valueOfStock(){
        return this.numberOfShares*this.sharePrice;
    }
} 
module.exports={Stock}                                      