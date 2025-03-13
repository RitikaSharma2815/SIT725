const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// GET endpoint to add two numbers
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Error: Please provide valid numbers using query parameters 'num1' and 'num2'.");
  }
  res.send(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
