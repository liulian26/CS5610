// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res is responsible to send data/files
  res.send("<h1>List of all tasks</h1>");
});

router.get("/:taskId", (req, res) => {
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
  res.render("task", { id: req.params.taskId });
});

module.exports = router;