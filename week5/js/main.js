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
        return "Please enter a valid number";
    }
    return Math.PI * Math.pow(number, 2).toFixed(2);  
}


const result = calculateArea();
console.log(result);

resultP.innerHTML += result;