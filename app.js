// CODE FLOW jaane ke liye script.js dekho

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

let users = []; // user ki list bnali

io.on("connection", function (socket) {
  console.log(socket.id, "Socket connected");

  // socket.on bhi yahi maanlo ek type se event attach krne ke kaam aata hai
  // on ka matlab hai data consume karna hai
  // user- connected ek event hai jiske occur hote hi fxn ke andar ka code chlega
  // jo data receive hoga wo us emit se aaya hoga jispe same event jo yha on pe lga hua h wo lga hua hoga
  socket.on("user-connected", function (name) {// name emit ne bheja hai
    users.push({ id: socket.id, name: name });
    console.log(users);

    // this will emit/send data(name in this case) on all the sockets except the sender
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
});

server.listen(4000, function () {
  console.log("App started at port 4000 !!");
});
