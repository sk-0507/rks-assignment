// taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.get("/", taskController.getAllTasks);
// Define other routes for Task controller

module.exports = router;
