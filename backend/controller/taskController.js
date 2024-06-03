// taskController.js
const Task = require("../models/taskModel");

// Controller functions
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      assignee: req.user.id,
    });
    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, assignee: req.user.id });
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, assignee: req.user.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      assignee: req.user.id,
    });
    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
