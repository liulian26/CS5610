const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { auth } = require('express-oauth2-jwt-bearer');
const db = require("../db");

const checkJWT = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});


router.get("/", async (req, res) => {
  try {
    const tasks = await db.getAllTasks();
    res.json({ tasks });
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});


router.get("/:taskId", async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await db.findTask({ _id: new ObjectId(taskId) });

    res.json({
      id: task._id,
      title: task.task,
      completed: task.completed,
      username: task.user,
      date: task.date,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Task not found" });
  }
});


router.post("/", checkJWT, async (req, res) => {
  try {
    console.log("req.body", req.body);
    await db.addToDB(req.body);
    res.status(201).json({ message: "Task added to database" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
