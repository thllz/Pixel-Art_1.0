function loadedPage() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelColor = document.createElement('div');
    pixelBoard.appendChild(pixelColor);
    pixelColor.classList.add('pixelLine');
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelSpacing = document.createElement('span');
      pixelColor.appendChild(pixelSpacing);
      pixelSpacing.classList.add('pixel');
    }
  }
}
// const pixel = document.getElementsByTagName('pixel');
// function setWhiteBackground() {
//   pixel.classList.add = 'white';
// }

function setBlackColor() {
  const color1 = document.querySelector('#color1');
  color1.classList.add('selected');
}

// const pixelColor = document.createElement('div');
// function setColor() {
//   pixelColor.classList.add('selected');
// }

window.onload = function load() {
  loadedPage();
  // setWhiteBackground();
  setBlackColor();
};
