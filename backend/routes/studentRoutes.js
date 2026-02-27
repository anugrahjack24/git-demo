const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");


// CREATE
router.post("/students", createStudent);

// READ ALL
router.get("/students", getStudents);

// READ SINGLE
router.get("/students/:id", getStudentById);

// UPDATE
router.put("/students/:id", updateStudent);

// DELETE
router.delete("/students/:id", deleteStudent);


module.exports = router;