// let fruits = {
//     Orange:30,
//     Watermelon:100,
//     Mango:20, 
//     CalculateFruitCost : function(fruit,quantity){
//         return ` ${quantity} ${fruit}  for KES ${this.Watermelon*quantity}`

// }
// }
// console.log(fruits.CalculateFruitCost("Orange",2))


let fruits={
    listOfFruits: {"Watermelon":100,"Apple":30,"Grapes":250,"Orange":20},
    calcFruitCost: function (fruit,quantity){
        return `${quantity} ${fruit} for KES ${this.listOfFruits[fruit]*quantity}`
    }
}
console.log(fruits.calcFruitCost("Orange",2))


