// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { ObjectId } = require("mongodb");

const db = require("../db");


router.get("/", async(req, res) => {
    try{
        const tasks = await db.getAllTasks();
        console.log("tasks", tasks);
        res.render("tasksList", { tasks });
    } catch(err){
        console.error("Error fetching tasks:", err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
});


router.get("/newtask", async(req, res) => {
    res.render("tasksForm");
});



router.post("/", async(req, res) => {
    try{
        //we will receive data and write it to db
        console.log("req.body", req.body);
        await db.addToDB(req.body);
        res.send("Task added to database");
        res.redirect("/tasks");
    } catch(err){
        console.log(err);
        res.send("post handler", err);

    }
});

// this is the handler for /tasks
// router.get("/", async(req, res) => {
//     //send a get request to jsonPlaceholder API
//     try {
//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/todos/"
//             );
//             res.json(response.data);
//         } catch (err) {
//             console.log(err);
//         }
//     // const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
//     // promise
//     // .then((response) => {
//     //     res.json(response.data);
//     // })
//     // .catch((err) => console.log(err.status));
//   //res is responsible to send data/files
//   //   res.send("<h1>List of all tasks</h1>"); 
// });


// send a get request to jsonPlaceholder API and consume the promise using .then/.catch
router.get("/:taskId", async (req, res) => {
    //send a get request to jsonPlaceholder API and consume the promise using async/await
    try {
        const taskId = req.params.taskId;
        const task = await db.findTask({ _id: new ObjectId(taskId) });

        res.render("task", {
        //   id: req.params.taskId,
        //   title: response.data.title,
        //   completed: response.data.completed,

        id: task._id,
        title: task.task,
        completed: task.completed,
        username: task.user,
        });
      } catch (err) {
        console.log(err);
      }
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
});



module.exports = router;