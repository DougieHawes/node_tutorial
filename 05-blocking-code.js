const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("home page");
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}-${j}`);
      }
    }
    return res.end("about page");
  }
  return res.end("404 error");
});

server.listen(8000, () => {
  console.log("server listening on port:8000");
});
