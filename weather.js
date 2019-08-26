const COORDS = "coords";

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
  }
}

function init() {
  loadCoords();
}

init();
