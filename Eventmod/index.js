const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", () => { // -------> Registering an Event
  console.log("My name is Raj");
})

event.on("sayMyName", () => { // -------> Multiple Callbacks
  console.log("My name is Raj");
})

event.on("sayMyName", () => { // -------> Multiple Callbacks
  console.log("My name is Raj");
})

event.emit("sayMyName");

event.on("checkPage", (sc,msg) => { // -------> Callbacks with parameters
  console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");