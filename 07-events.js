const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received: name ${name} - ${id}`);
});

customEmitter.on("response", (name, id) => {
  console.log(`some other logic here: name ${name} - ${id}`);
});

customEmitter.emit("response", "Doug", 42);
