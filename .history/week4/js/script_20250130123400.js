// let user;
// do{let user = prompt("What is your name?"); 
// } while (isNaN(user) === false || user.length === 1);

// console.log(typeof user);

let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
     },
     {
        name: "James",
        age: 40,
        location: "Toronto"
     },
     {
        name: "Garry",
        age: 20,
        location: "Vancouver"
     }
    ];

// function that student is in Vancouver
function findstudentinvancouver(student){
    for(let i = 0; i < student.length; i++){
        if(student[i].location === "Vancouver"){
            console.log(student[i].location);
        }
    }
}
findstudentinvancouver(students);