// use writeflie to write a text to a file

const fs = require('fs');
//console.log(fs);
function writeBacke(){}
fs.writeFile('data.txt', 'This is a message to you!', (err) => {
    if (err) {
        console.log("write failed");
    }else{
        console.log("write successful");
    }
});