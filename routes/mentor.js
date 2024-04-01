//CRUD APIs
const express = require("express");
const router = express.Router();
const Mentor = require("../models/mentorSchema");

// '/api/mentor
router.post("/mentor", async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    await newMentor
      .save()
      .then((response) => {
        console.log(response);
        res.status(201).json({ message: "New Mentor created" });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: "Error creating Mentor" });
      });
  } catch (err) {
    console.log(err.message);
  }
});

//Read
router.get("/mentor", async (req, res) => {
  try {
    Mentor.find()
      .then((response) => {
        console.log(response);
        res.status(201).json({ mentor: response });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: "Error finding Mentor" });
      });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
