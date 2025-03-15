// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");

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

router.get("/newtask", async(req, res) => {
    res.render("tasksForm");
});


// this is the handler for /tasks
router.get("/", async(req, res) => {
    //send a get request to jsonPlaceholder API
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/"
            );
            res.json(response.data);
        } catch (err) {
            console.log(err);
        }
    // const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    // promise
    // .then((response) => {
    //     res.json(response.data);
    // })
    // .catch((err) => console.log(err.status));
  //res is responsible to send data/files
  //   res.send("<h1>List of all tasks</h1>"); 
});


// send a get request to jsonPlaceholder API and consume the promise using .then/.catch
router.get("/:taskId", async (req, res) => {
    //send a get request to jsonPlaceholder API and consume the promise using async/await
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
        );
        const task = response.data;
        // get user information by user id
        const userResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${task.userId}`
        );
        const user = userResponse.data;
        // console.log(response.data);
        res.render("task", {
        //   id: req.params.taskId,
        //   title: response.data.title,
        //   completed: response.data.completed,

        id: task.id,
        title: task.title,
        completed: task.completed,
        username: user.name,
        });
      } catch (err) {
        console.log(err);
      }
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
});



module.exports = router;