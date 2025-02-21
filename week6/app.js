// use writeflie to write a text to a file

// const fs = require('fs');
//console.log(fs);
// function writeBacke(){}
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

// app.get('/', function(req, res) {
//     res.send('Hello and Welcome to my site!')
//   });

// Route handler for /tasks
// app.get('/tasks', function(req, res) {
//     res.send('<h1>List of all the tasks</h1>')
//     console.log(req.params);
//     console.log(req.query);
//   });

// app.get('/tasks/:taskId', function(req, res) {
//     console.log(req.params.taskId);
//     res.send(`<p>You are viewing ${req.params.taskId}</p>` );
// });


// const port = 3000;

// app.listen(port, function() {
//     console.log(`Example app listening on port ${port}!`)
//   });


// Function to write and read a file using Promises with .then() and .catch()
// function writeAndReadFile() {
//   fs.promises.writeFile('data.txt', 'This is a message to you!')
//       .then(() => {
//           console.log("Write successful");
//           return fs.promises.readFile('data.txt', 'utf8');
//       })
//       .then((data) => {
//           console.log("Read successful");
//           console.log(data);
//       })
//       .catch((err) => {
//           console.log("Operation failed", err);
//       });
// }

// // Function using async/await
// async function writeAndReadFileAsync() {
//   try {
//       await fs.promises.writeFile('data.txt', 'This is a message to you!');
//       console.log("Write successful");
      
//       const data = await fs.promises.readFile('data.txt', 'utf8');
//       console.log("Read successful");
//       console.log(data);
//   } catch (err) {
//       console.log("Operation failed", err);
//   }
// }


// // Run both functions
// writeAndReadFile();

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files
app.use(express.static("public"));

// Route handler for /tasks
const tasksRouter = require('./routes/tasks');
// mount the router on from tasks.js in this line:
app.use('/tasks', tasksRouter);

app.get("/", (req, res) => {
  // res is responsible to send the data/file
  res.send("Hello and welcome to my site");
});

const port = 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});