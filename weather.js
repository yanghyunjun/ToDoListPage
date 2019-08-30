const weather = document.querySelector(".js-weather");
const API_KEY = "d78e144ba1aa6370cf5fedb52c635abe";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
    console.log(response.json());
  });
}

function saveCoords(GeolocationObj) {
  localStorage.setItem(COORDS, JSON.stringify(GeolocationObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const GeolocationObj = {
    latitude,
    longitude
  };
  saveCoords(GeolocationObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
  weather;
}

init();
