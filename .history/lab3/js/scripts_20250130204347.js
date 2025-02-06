// prices
const prices = {
    flavor: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5
    },
    size: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },
    topping: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0
    }
};


// function to calculate the total price of the order
function displayOrderSummary(order) {
    // example order object: 
    //{falvor:"mango", size:"medium", toppings:["boba","jelly"], totalPrice: 5.63 }
}


// placeOrder that will receive flavor, size, and an array with all the selected 
// toppings (if any) and call displayOrderSummary function with an order object 
// as argument.
function placeOrder(flavor, size, toppings) {

    let order = {flavor:..., size:..., toppings:..., finalPrice:...}
    displayOrderSummary(order)
    }