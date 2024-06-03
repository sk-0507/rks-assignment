// notificationController.js
const Notification = require("../models/notificationModel");

// Controller functions
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user.id });
    res.status(200).json({
      status: "success",
      data: {
        notifications,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findOne({
      _id: req.params.id,
      recipient: req.user.id,
    });
    if (!notification) {
      return res.status(404).json({
        status: "error",
        message: "Notification not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        notification,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const notification = await Notification.create({
      ...req.body,
      recipient: req.user.id,
    });
    res.status(201).json({
      status: "success",
      data: {
        notification,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, recipient: req.user.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!notification) {
      return res.status(404).json({
        status: "error",
        message: "Notification not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        notification,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOneAndDelete({
      _id: req.params.id,
      recipient: req.user.id,
    });
    if (!notification) {
      return res.status(404).json({
        status: "error",
        message: "Notification not found",
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
