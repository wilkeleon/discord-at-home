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

function channelActive() {
  let channel = document.getElementsByClassName("channel");
  channel[0].addEventListener("active", function () {
    channel.style.backgroundColor = "#35373c";
  });
}

console.log(channel);
