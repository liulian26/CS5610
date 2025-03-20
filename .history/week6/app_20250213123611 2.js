// use writeflie to write a text to a file

const fs = require('fs');
//console.log(fs);
function writeBacke(){}
// fs.writeFile('data.txt', 'This is a message to you!', (err) => {
//     if (err) {
//         console.log("write failed");
//     }else{
//         console.log("write successful");

//         // reading the file
//         fs.readFile('data.txt', 'utf8', (err, data) => {
//             if (err) {
//                 console.log("Read failed");
//             }else{
//                 console.log("Read successful");
//                 console.log(data);
//             }
//         });
//     }
// });
// const logger = require('./logger.js');
// logger.log();

// const express = require('express');
// console.log(express);

const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send('Hello and Welcome to my site!')
  });
  
app.get('/tasks', function(req, res) {
    res.send('<h1>List of all the tasks</h1>')
  });

app.get('/tasks/:taskId', function(req, res) {
    console.log(req.params.taskId);
    res.send('You are viewing ${req.params.taskId}' );
});


const port = 3000;

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
  });
