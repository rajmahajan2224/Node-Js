const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
})

app.get("/about", (req, res) => {
  res.send("Welcome to AboutUs Page");
})

app.get("/contact", (req, res) => {
  res.send("Welcome to ContactUs Page");
})

app.get("/login", (req, res) => {
  res.send({
    id: 1,
    name: "Raj"
  });
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
})