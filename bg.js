const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `images/${imageNumber + 1}.jpg`;
  image.classList.add("bgImage");
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
