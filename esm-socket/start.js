import http from "http";
import app from "./soc.js";
import {Server} from 'socket.io';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const socketServer = new Server(server);

server
  .on("connect", (req) => {
    console.log(req.statusMessage);
  })
  .on("error", (error) => {
    console.log(`server went in error ${error.message}`);
  })
  .on("close", () => {
    console.log(`closing the server connection.. 😎`);
  })
  .on("request", (req) => {
    console.log(`Got request >> ${req.url}`);
  });

server.listen(PORT, () => {
  console.log("Hey Buddy server is listening on " + PORT);
  console.log(server.address());
});


socketServer.on('connection',(socket)=>{
  console.log(socket.id);
})

