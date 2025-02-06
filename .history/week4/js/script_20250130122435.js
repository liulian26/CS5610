let user;
do{let user = prompt("What is your name?"); 
} while (isNaN(user) === false || user.length === 1);

// console.log(typeof user);