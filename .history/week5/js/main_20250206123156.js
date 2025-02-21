//const radiusP = document.querySelector("#radius");
//const resultP = document.querySelector("#result");



//function getNumber() {
    //let radius = prompt("Enter the number for a circle radius");
    //radiusP.innerHTML += radius;
   //return radius;
//}


// function calculateArea() {
    // const number = getNumber();
    // if(isNaN(number)) {
        // return "Error: Please enter a valid number";
    // } else{
        // return Math.PI * Math.pow(number, 2).toFixed(2);  
    // }
//}


// const result = calculateArea();
// console.log(result);

// resultP.innerHTML += result;


let shoppingItems = ["bread", "cheese", "green pepper"];
const shoppingListElement = document.querySelector(".shopping");

function populateShoppingList(shoppingListItems) {
    //  loop in the array
  
    for (let i = 0; i < shoppingListItems.length; i++) {
      // we need an li Element for each item
      const li = document.createElement("li");
      li.innerText = shoppingListItems[i];
      shoppingListElement.append(li);
    }
  
    //   for (let item of shoppingListItems) {
    //     console.log(item);
    //   }
  
    //   shoppingListItems.forEach((item) => {
    //     console.log(item);
    //   });
  }

// function changeListUsingClass(){
    // const lists = document.querySelectorAll("ul");
    // lists.forEach(list => list.classList.add("squareList"));
//}

//function highlightItems() {
    //const listItems = document.querySelectorAll("li");
  //listItems.forEach(item => {
   // if (item.innerText.toLowerCase().includes("green")) {
      //item.style.color = "green";
   // }
  //});
//}


//populateShoppingList(shoppingItems);
//changeListUsingClass();
//highlightItems();
// ul class="shopping"
// loop in the array
    // create an li
    // update the text of the li wirh the arry item
    // call append/appendChild on ul and pass thr created li

//const button = document.querySelector("#updateImage");
//function changeButtonText() {
    // will be called when user clicks the button
    // change the text
    //if (button.innerText === "Clik Me!") {
       // button.innerText = "Cliked!";
    //} else if (button.innerText === "Cliked!") {
       // button.innerText = "Clik Me!";
    //}
    // if I want only call one time
    // button.removeEventListener("click", changeButtonText);
//}

// button.addEventListener("click", changeButtonText);
// If i want this called only one time
//button.addEventListener("click", changeButtonText, {once: true});

const buttonContainer = document.querySelector(".button-container");

function changeButtonBGolor(event) {
    // which button had moudr overt it
    console.log(event.target.innerText);
    // change the background color of the button
    event.target.style.backgroundColor = "red";
}
// setting the listener on the parent of buttons
buttonContainer.addEventListener("mouse", changeButtonBGolor);

