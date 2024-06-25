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

let channels = document.getElementsByClassName("channel");

for (let channel of channels) {
  channel.addEventListener("click", function () {
    for (let ch of channels) {
      ch.classList.remove("channel-active");
      channel.classList.add("channel-active");
    }
  });
}

// for (let channel of channels) {
//   channels[0].style.backgroundColor = "#35373c";
// }
// if (channel.classList.contains("channel-active")) {
//   channel.addEventListener("click", function () {
//     channel.classList.remove("channel-active");
//   });
// }
