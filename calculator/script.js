const {requesthandler} = require('./app');
const http = require('http');



const port = 3000;
const server = http.createServer(requesthandler);

server.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
});
