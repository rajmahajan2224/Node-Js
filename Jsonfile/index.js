const bioData = {
  name: "Raj",
  age : 23,
  channel: "Raj Mahajan"
};

const jsonData = JSON.stringify(bioData); // ----> Object to JSON
console.log(jsonData);

const objData = JSON.parse(jsonData); // ----> JSON to Object
console.log(objData);