const mongoose = require("mongoose");

function connectToMongoDB() {
  const DATABASE_URI =
    process.env.NODE_ENV === "development"
      ? "mongodb://127.0.0.1:27017/Class"
      : `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@classdetails.dtzktyi.mongodb.net/`;
  mongoose
    .connect(DATABASE_URI)
    .then(() => {
      console.log(DATABASE_URI);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = connectToMongoDB;
