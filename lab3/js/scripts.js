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
    const flavorPrice = prices.flavor[flavor];
    const sizePrice = prices.size[size];
    const toppingsPrice = toppings.reduce((total, topping) => total + prices.topping[topping], 0);
    totalPrice = sizePrice * (flavorPrice + toppingsPrice);
    return totalPrice;
}


// function display order summary that will receive an order object as argument
function displayOrderSummary(order) {
    // example order object: 
    //{falvor:"mango", size:"medium", toppings:["boba","jelly"], totalPrice: 5.63 }
    const {flavor, size, toppings, totalPrice} = order;

    // generate the order summary
    const toppingsList = toppings.length > 0 ? toppings.join(", ") : "no toppings";
    const summaryText = `You have ordered a ${size} ${flavor} bubble tea with these toppings: ${toppingsList}. Total price: $${order.totalPrice.toFixed(2)}`;
    
    // display the order summary
    const summaryElement = document.getElementById("orderSummary");
    summaryElement.textContent = summaryText;
}


// placeOrder that will receive flavor, size, and an array with all the selected 
// toppings (if any) and call displayOrderSummary function with an order object 
// as argument.
function placeOrder(flavor, size, toppings) {
    let finalPrice = calculatePrice(flavor, size, toppings);
    let order = {flavor: flavor, size: size, toppings: toppings, finalPrice: finalPrice};
    displayOrderSummary(order)
}




// Test the functions
placeOrder("mango", "medium", ["boba", "jelly"]);
placeOrder("original", "small", []);
placeOrder("strawberry", "large", ["pudding"]);