//CRUD APIs
const express = require("express");
const router = express.Router();
const Student = require("../models/studentSchema");

// Create '/api/student'
router.post("/student", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent
      .save()
      .then((response) => {
        console.log(response);
        res.status(201).json({ message: "New student created" });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: "Error creating student" });
      });
  } catch (err) {
    console.log(err.message);
  }
});

//Read '/api/student'
router.get("/student", async (req, res) => {
  try {
    Student.find()
      .then((response) => {
        console.log(response);
        res.status(200).json({ Students: response });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: "Not able to get students" });
      });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Unable to get student" });
  }
});

module.exports = router;
