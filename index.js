const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectToMongoDB = require("./database.config");
const Student = require("./routes/student");
const Mentor = require("./routes/mentor");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//APIs
app.use("/api", Student);

app.use("/api", Mentor);

//connection to mongoDB
connectToMongoDB();

//connect to server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
