// reportRoutes.js
const express = require("express");
const router = express.Router();
const reportController = require("../controller/reportController");

router.get("/", reportController.getAllReports);
// Define other routes for Report controller

module.exports = router;
