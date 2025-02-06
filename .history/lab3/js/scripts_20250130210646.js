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

// function calculatePrice that will receive flavor, size, and an array with all the selected
function calculatePrice(flavor, size, toppings) {
    // calculate the price of the order
    // return the total price
    let totalPrice = 0;
    flavorPrice = prices.flavor[flavor];
    sizePrice = prices.size[size];
    toppingsPrice = toppings.reduce((total, topping) => total + prices.topping[topping], 0);
    totalPrice = sizePrice * (flavorPrice + toppingsPrice);
}


// function display order summary that will receive an order object as argument
function displayOrderSummary(order) {
    // example order object: 
    //{falvor:"mango", size:"medium", toppings:["boba","jelly"], totalPrice: 5.63 }
    const {flavor, size, toppings} = order;

    const totalPrice = calculatePrice(flavor, size, toppings);
    const toppingsList = toppings.length > 0 ? toppings.join(", ") : "no toppings";

    // display the order summary
    console.log(`You have ordered a ${size} ${flavor} bubble tea with these toppings: ${toppingsList}`);
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);

}


// placeOrder that will receive flavor, size, and an array with all the selected 
// toppings (if any) and call displayOrderSummary function with an order object 
// as argument.
function placeOrder(flavor, size, toppings) {

    let order = {flavor:..., size:..., toppings:..., finalPrice:...}
    displayOrderSummary(order)
    }