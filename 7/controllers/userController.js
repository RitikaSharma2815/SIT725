
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newUser = new User({ first_name, last_name, email, password });
    await newUser.save();
    res.json({ statusCode: 200, message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ statusCode: 200, data: users, message: "Users fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};