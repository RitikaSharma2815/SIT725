var express = require("express");
var app = express();
var port = process.env.PORT || 3004;
const mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/myproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

// Define Schema for Projects
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});
const Project = mongoose.model("Project", ProjectSchema);

// Define Schema for User Form Data
const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Fetch projects from DB
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
});

// Handle form submissions
app.post("/api/users", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newUser = new User({ first_name, last_name, email, password });
    await newUser.save();
    res.json({ statusCode: 200, message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
