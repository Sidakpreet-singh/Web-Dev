const http = require('http');
const {handler,port} = require('./script');
const server = http.createServer(handler);

server.listen(port,()=>{
    console.log(`server is runnig at http://localhost:${port}`);
})