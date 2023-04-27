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

humne chatInput aur chatWindow mangwayi
aur chatInput pe event lga diya ki agr Enter naam ki key press hui ho aur chatInput ki koi value ho
to us value ka ek msg bnke chatWindow pe append ho jaaye

*/