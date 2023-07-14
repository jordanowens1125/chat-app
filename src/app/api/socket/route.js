import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
    const io = new Server(res.socket.server);
    res.socket.server.io = io
    console.log(io);
//   console.log(req);
//   if (res.socket.server.io) {
//     console.log("Socket is already running");
//   } else {
//     console.log("Socket is initializing");
//     const io = new Server(res.socket.server);
//     res.socket.server.io = io;
//   }
  res.end();
};

export default SocketHandler;
