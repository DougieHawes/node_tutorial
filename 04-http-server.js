const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");

  res.end("hello world");
});

server.listen(8000, () => {
  console.log("server running on port:8000");
});
