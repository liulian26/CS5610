// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", async(req, res) => {
    //we will receive data and write it to db
    console.log("req.body", req.body);
    
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