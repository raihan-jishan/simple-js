const http = require("http"); // require http module 
const fs = require("fs");     //  file system module 
// create a server 
const server = http.createServer((req, res) => {
    const readStrem = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
    readStrem.pipe(res);
    
 
}) 
//  server listen port 
server.listen(3000);
//  console log 
console.log(`listening on port 3000`); 
