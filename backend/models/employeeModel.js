// employeeModel.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  skills: [String],
  experience: {
    type: Number,
    required: true,
  },
  performanceReviews: [
    {
      type: String,
    },
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
