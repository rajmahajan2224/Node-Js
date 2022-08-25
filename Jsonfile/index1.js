const fs = require('fs');
const bioData = {
  name: "Raj",
  age : 23,
  channel: "Raj Mahajan"
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("JSON File Created");
})

fs.readFile("json1.json","utf-8", (err, data) => {
  const objData = JSON.parse(data);
  console.log(objData);
})