const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

let users = [];

io.on("connection", function (socket) {
  console.log(socket.id, "Socket connected");

  socket.on("user-connected", function (name) {
    users.push({ id: socket.id, name: name });
    console.log(users);

    socket.broadcast.emit("user-joined", name);
  });

  socket.on("disconnect", function () {
    let disconnectedUser;
    let filteredUsers = users.filter((userObj) => {
      if (userObj.id == socket.id) {
        disconnectedUser = userObj;
        return false;
      }
      return true;
    });
    users = filteredUsers;
    socket.broadcast.emit("user-leave", disconnectedUser.name);
  });

  socket.on("chat-append", function (chat) {
    let name;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == socket.id) {
        name = users[i].name;
        break;
      }
    }
    socket.broadcast.emit("append-chat", { name, chat });
  });
});

server.listen(4000, function () {
  console.log("App started at port 4000 !!");
});
