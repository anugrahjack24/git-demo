const Student = require("../models/Student");


// CREATE
exports.createStudent = async (req, res) => {
  try {

    const student = new Student(req.body);
    const savedStudent = await student.save();

    res.status(201).json(savedStudent);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// READ ALL
exports.getStudents = async (req, res) => {
  try {

    const students = await Student.find();

    res.json(students);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// READ SINGLE
exports.getStudentById = async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    res.json(student);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// UPDATE
exports.updateStudent = async (req, res) => {
  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(student);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// DELETE
exports.deleteStudent = async (req, res) => {
  try {

    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Student deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};