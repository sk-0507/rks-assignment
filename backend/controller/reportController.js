// reportController.js
const Report = require("../models/reportModel");

// Controller functions
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findOne({
      _id: req.params.id,
      generatedBy: req.user.id,
    });
    if (!report) {
      return res.status(404).json({
        status: "error",
        message: "Report not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createReport = async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      generatedBy: req.user.id,
    });
    res.status(201).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findOneAndUpdate(
      { _id: req.params.id, generatedBy: req.user.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!report) {
      return res.status(404).json({
        status: "error",
        message: "Report not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findOneAndDelete({
      _id: req.params.id,
      generatedBy: req.user.id,
    });
    if (!report) {
      return res.status(404).json({
        status: "error",
        message: "Report not found",
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
