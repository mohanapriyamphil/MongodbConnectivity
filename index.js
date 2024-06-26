const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectToMongoDB = require("./database.config");
const Student = require("./routes/student");
const Mentor = require("./routes/mentor");

//configuring environment variables
require("dotenv").config();
// console.log(process.env)

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//APIs
app.use("/api", Student);

app.use("/api", Mentor);

//connection to mongoDB
connectToMongoDB();

//connect to server
const hostname =
  process.env.NODE_ENV === "development"
    ? "localhost"
    : process.env.PROD_SERVER_HOSTNAME;
const port =
  process.env.NODE_ENV === "development"
    ? 3000
    : process.env.PORT;
app.listen(port, function () {
  console.log(`Server listening at http://${hostname}:${port}`);
});
