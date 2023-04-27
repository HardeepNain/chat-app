// CODE FLOW jaane ke liye script.js dekho

// emit bhi ek type ke event attach krne ke kaam hi aata hai 
// emit ka matlab hai data send hoga
// jo data send hoga wo us on ke pass jaayega jispe same event jo yha emit pe lga hai wo lga hua hoga
socket.emit("user-connected", name);

// when a new user joined the chat then the data that emit broacast to every socket will receive here and fxn code executes
socket.on("user-joined", function (name) {
  // create a join div
  let chatJoin = document.createElement("div");
  chatJoin.classList.add("chat");
  chatJoin.classList.add("join");
  chatJoin.innerHTML = name + " joined chat";
  chatWindow.append(chatJoin);
});

// when a user leave the chat then the data that emit broacast to every socket will receive here and fxn code executes
socket.on("user-leave", function (name) {
  // create a join div
  let chatLeave = document.createElement("div");
  chatLeave.classList.add("chat");
  chatLeave.classList.add("leave");
  chatLeave.innerHTML = name + " left chat";
  chatWindow.append(chatLeave);
});
