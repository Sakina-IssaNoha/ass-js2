let fruits = {
    Orange:30,
    Watermelon:100,
    Mango:20, 
    CalculateFruitCost : function(fruit,quantity){
        return ` ${quantity} ${fruit}  for KES ${this.Orange*quantity}`

}
}
console.log(fruits.CalculateFruitCost("Orange",2))
