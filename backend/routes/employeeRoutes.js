const express = require("express");

const Employee = require("../models/Employee");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {

  try {

    const employee = await Employee.create(req.body);

    res.json(employee);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", auth, async (req, res) => {

  const employees = await Employee.find();

  res.json(employees);
});

router.get("/search", auth, async (req, res) => {

  const { department } = req.query;

  const employees = await Employee.find({
    department
  });

  res.json(employees);
});

router.put("/:id", auth, async (req, res) => {

  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

router.delete("/:id", auth, async (req, res) => {

  await Employee.findByIdAndDelete(req.params.id);

  res.json({
    message: "Employee deleted"
  });
});

module.exports = router;