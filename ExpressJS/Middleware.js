const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const staticPath = path.join(__dirname, "../public");

// Bulid-In Middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
})

app.get("/about", (req, res) => {
  res.send("Welcome to AboutUs Page");
})

app.get("/contact", (req, res) => {
  res.send("Welcome to ContactUs Page");
})

app.get("/login", (req, res) => {
  res.send("Welcome to Login Page");
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
})