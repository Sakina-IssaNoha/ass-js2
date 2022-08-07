// class KioskCalc {
//     constructor(fruitsPriceList){
//         this.fruitsPriceList = fruitsPriceList
//     }
// }
// let kiosk = new KioskCalc( {"orange": 30, "mango": 15, "avocado": 40 })
// KioskCalc.prototype.getTotalCost = function(fruit,quantity){
//     return `${quantity} ${fruit} for ksh ${quantity*this.fruitsPriceList.mango}`
// }
// console.log(kiosk.getTotalCost("mango",5))


class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitsPriceList={"orange": 30, "mango": 15, "avocado": 40 };
        
        this.getTotalCost=function(){
            return `${this.quantity} ${this.fruit} for KES ${this.fruitsPriceList[this.fruit]*this.quantity}`
        }
    }
}

let kiosk = new KioskCalc("avocado",7)
console.log(kiosk.getTotalCost())