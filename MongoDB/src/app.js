const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo")
.then( () => console.log("Conncection Succesfull..."))
.catch( (err) => console.log(err));