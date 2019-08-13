const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `/image/${imageNumber + 1}.jpg`;
  body.appendChild(image);
}
function generationRandom() {
  const Number = Math.floor(Math.random() * IMG_NUMBER);
  return Number;
}

function init() {
  const randomNumber = generationRandom();
  paintImage(randomNumber);
}

init();
