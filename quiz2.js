class KioskCalc {
    constructor(fruitsPriceList){
        this.fruitsPriceList = fruitsPriceList
    }
}
let kiosk = new KioskCalc( {"orange": 30, "mango": 15, "avocado": 40 })
KioskCalc.prototype.getTotalCost = function(fruit,quantity){
    return `${quantity} ${fruit} for ksh ${quantity*this.fruitsPriceList.mango}`
}
console.log(kiosk.getTotalCost("mango",5))