// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");

// this is the handler for /tasks
router.get("/", async(req, res) => {
    //send a get request to jsonPlaceholder API
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/"
            );
            res.json(response.data);
        } catch (err) {
            console.log(err.message);
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
        console.log(response.data);
        res.render("task", {
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed,
        });
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Error fetching task details");
      }
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
});



module.exports = router;