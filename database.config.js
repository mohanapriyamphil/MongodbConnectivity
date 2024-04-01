const mongoose = require("mongoose");

function connectToMongoDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Class")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = connectToMongoDB;
