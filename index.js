function openServer() {
  const server = document.querySelector(".server");
  const serveractive = document.querySelector(".server-active");

  if (server.style.display === "flex") {
    server.style.display = "none";
    serveractive.style.display = "none";
  } else {
    server.style.display = "flex";
    serveractive.style.display = "block";
  }
}

let channels = document.querySelectorAll(".channel");
let channelActive = false;

if (!channelActive) {
  channels[0].classList.add("channel-active");
  channelActive = true;
}
for (let channel of channels) {
  channel.addEventListener("click", function () {
    for (let ch of channels) {
      ch.classList.remove("channel-active");
      channel.classList.add("channel-active");
    }
  });
}

let allPlusButtons = document.querySelectorAll(".plus");
let plusButtonActive = false;

for (let plusButton of allPlusButtons) {
  plusButton.addEventListener("click", function () {
    plusButtonActive = true;
    let newChannelPrompt = prompt("Channel Name:");
    newChannelName = newChannelPrompt.value;
    let newChannelElement = document.createElement("div");
    let newChannelContent = document.createTextNode(newChannelName);
    newChannelElement.appendChild(newChannelContent);
    document.body.insert(newChannelElement, plusButton);
  });
}
