const http = require("http"); // require http module
const port =  3000; // port number
const server = http.createServer((req, res) => {
  //  if else state ment
  if (req.url === "/") {
    res.write("<html><head><title>Form </title></head>"); // res . write function
    res.write(
      '<body><form method="post" action="/process"><input name="message" /></form></body>'
    );
    //  res end
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    //  req . on
    req.on("end", () => {
      console.log(" proccess finished!");
      //  parse body
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      //  res write func
      res.write("Thanks for submit info .. ");
      res.end();
    });
  } else {
    res.write("Not Found");
    res.end();
  }
});
//  listen server
server.listen(port);
// port
    console.log(`listening on port http://localhost:${port}  `);
