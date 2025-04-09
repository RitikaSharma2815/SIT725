const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// POST a new user
router.post("/", userController.createUser);
// GET users 
router.get("/", userController.getUsers); 

module.exports = router;