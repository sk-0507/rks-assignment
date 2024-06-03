// userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "hr_manager", "interviewer"],
    default: "hr_manager",
  },
  // Additional fields like profile information, permissions, etc.
});

const User = mongoose.model("User", userSchema);

module.exports = User;
