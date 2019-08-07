const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function currentTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  currentTime();
  setInterval(currentTime, 1000);
}

init();
