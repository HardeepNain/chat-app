// We deleted get method kyunki woto bas smjhane ke liye tha ki route kaise work krta h
// installed socket.io package

const express = require("express");
const app = express();

// socket io ka code : Iss code ko as it is documentation se uthaya h
// Express initializes app to be a function handler that you can supply to an HTTP server
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io"); // Humne socket.io package se Server(not small s server) naam ki class ko nikal liya
const io = new Server(server); //  I initialize a new instance of socket.io (jiska naam h io) by passing the server (the HTTP server) object.

// it makes public folder static : means ki jo bhi files public folder me hogi wo user ko dhikegi inspect krne pe
app.use(express.static("public"));

/* 
on == eventListner
jaise javascript me event attach krne ke liye eventListner likhte the usi prakar se 
socket.io ke obj pe event lgane ke liye on likha jaata hai
   
connection == isko ek type ka event maanlo
matlab ki jaise hi koi socket aake app se connect hoga to index.html me likhe io() execute hoga
aur jaha pe bhi on-connection event hoga uska fxn execute hoga
jo socket is fxn me receive hota h wo wo socket hota hai jo us time aake connect hua hai 
*/
io.on("connection", function (socket) {
  console.log(socket.id, "Socket connected");
});


server.listen(4000, function () { // ab app ki jgah server pe listen hoga (even i don't know iska kya matlab h 🤣)
  console.log("App started at port 4000 !!");
});
