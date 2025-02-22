// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");

// this is the handler for /tasks
router.get("/", asymc(req, res) => {
    //send a get request to jsonPlaceholder API
    const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    promise.then((response) => {
        res.json(response.data);
      })
  //res is responsible to send data/files
  //   res.send("<h1>List of all tasks</h1>"); 
});

// send a get request to jsonPlaceholder API and consume the promise using .then/.catch
router.get("/:taskId", (req, res) => {
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
  res.render("task", { id: req.params.taskId });
});



module.exports = router;