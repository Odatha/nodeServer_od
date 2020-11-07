const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers); //incoming request

  res.statusCode = 200; //everything is OK
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello, world!</h1></body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Server runnig at http://${hostname}:${port}`);
}); //server will listen to incoming

//simple http server up and running
