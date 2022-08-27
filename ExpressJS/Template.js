const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "../public");

//Set Views Engine For Template Engine

app.set('view engine', 'hbs');

// Template Engine Route

app.get("", (req, res) => {
  res.render('index');
})

// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello From Express Server");
})

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
})