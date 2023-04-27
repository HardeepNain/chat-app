let name = prompt("Enter Your Name !"); // hum user se aate hi uska naam puch lenge


let chatInputBox = document.querySelector(".chat-input");
let chatWindow = document.querySelector(".chat-window"); 

chatInputBox.addEventListener("keypress", function (e) {
  if (e.key == "Enter" && chatInputBox.value) {
    let chatRight = document.createElement("div");
    chatRight.classList.add("chat");
    chatRight.classList.add("right");
    chatRight.innerHTML = chatInputBox.value;
    chatWindow.append(chatRight);
    chatInputBox.value = "";
  }
});

/*
CODE FLOW

user aaya h

to jaise hi koi bhi socket connect hoga to io() chlega
aur socket.js me socket.emit with user-connected event se data send hoga kyunki socket.js file index.html me attached h
aur app.js me io.on with connection event ka fxn chalega
user ke liye socket.id aur uske naam ka use krke ek obj bnega aur wo object users array me push hoga
aur socket.on with user-connected event ke fxn me socket.emit with user-connected event se bheja gya data receive hoga
fir socket.broadcast.emit with user-joined event ki mdad se user ka name sb connected users ke pass send hoga
joki socket.js me socket.on with user-joined event ke fxn me receive hoga
jaha pe us name ka use krke ek div create hoga aur wo div chats wale div pe append hoga

Use jaa rha h

jaise hi socket disconnect hoga to app.js me socket.on with disconnect event me likha fxn execute hoga
aur users array pe filter lgega jisme ek ek krke user ke obj pass honge
aur jis user ki id socket ki id se match ho jaayegi matlab wo user chhod ke gya hai
us user ko users array me se nikal denge
aur socket.broadcast.emit with user-leave event us user ka name send kr dega baki connected sockets ko
joki socket.js me socket.on with user-leave event ke fxn me receive hoga
jaha pe us name ka use krke ek div create hoga aur wo div chats wale div pe append hoga
*/