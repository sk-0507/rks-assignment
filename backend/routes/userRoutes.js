// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/:id", userController.getUserById);
// Define other routes for User controller

module.exports = router;
