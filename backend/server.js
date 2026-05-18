const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});