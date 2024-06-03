const mongoose = require("mongoose");
const dotenv = require("dotenv");
 
const url =
  "mongodb+srv://suraj:suraj@cluster0.qpoaow1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
const Connection = async () => {
  await mongoose.connect(url).then(() => {
    console.log("Database is connected!");
  });
};

module.exports = {
  Connection,
};
