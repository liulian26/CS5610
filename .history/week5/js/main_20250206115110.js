const radiusP = document.querySelector("#radius");
const resultP = document.querySelector("#result");



function getNumber() {
    let radius = prompt("Enter the number for a circle radius");
    radiusP.innerHTML += radius;
    return radius;
}


function calculateArea() {
    const number = getNumber();
    if(isNaN(number)) {
        return "Error: Please enter a valid number";
    } else{
        return Math.PI * Math.pow(number, 2).toFixed(2);  
    }
}


const result = calculateArea();
console.log(result);

resultP.innerHTML += result;


let shoppingItems = ["bread", "cheese", "green pepper"];
const shoppingList = document.querySelector(".shopping");

function populateShoppingList(shoppingList) {
     for (let i = 0; i < shoppingItems.length; i++) {
        const li = document.createElement("li");
        li.innerText= shoppingList[i];
        shoppingListElement.append(li);
     }

    // for (let item of shoppingItems) {
    //     console.log(item);
    // }

    // shoppingItems.forEach(function(item)=> {
    //     console.log(item);
    // });
}

populateShoppingList(shoppingList);
// ul class="shopping"
// loop in the array
    // create an li
    // update the text of the li wirh the arry item
    // call append/appendChild on ul and pass thr created li
