const selected = document.getElementsByClassName('selected');
const pixelBoard = document.getElementById('pixel-board');
// #1 Criando quadro de pixel
function genPixel() {
  for (let l = 1; l <= 5; l += 1) {
    const sLine = document.createElement('div');
    for (let c = 1; c <= 5; c += 1) {
      const cLine = document.createElement('div');
      cLine.classList.add('pixel');
      sLine.appendChild(cLine);
    }
    pixelBoard.appendChild(sLine);
  }
}
// const pixel = document.getElementsByTagName('pixel');
// function setWhiteBackground() {
//   pixel.classList.add = 'white';
// }

// Setando a classe selected no elemento de cor preto

function setColor1(color) {
  const color1 = document.querySelector('#color1');
  color1.classList.add('selected');
}

window.onload = function load() {
  genPixel(5);
  setColor1();
  // setWhiteColor
  // selectColor();
};

// const color1 = document.querySelector('#color1');
// color1.addEventListener('click', function selectColor() {
// color1.classList.add('selected');
// });

// function selectColor1() {
// const color1 = document.querySelector('#color1');
// color1.classList.add('selected');
// }

// if (color1.addEventListener('click', selectColor1)) {
// } else {
//   color1.classList.remove('selected');
// }

// function selectColor2() {
//   const color2 = document.querySelector('#color2');
//   color2.classList.add('selected');
// }

// if (color2.addEventListener('click', selectColor2)) {
// } else {
//   color2.classList.remove('selected');
// }

// function selectColor3() {
//   const color3 = document.querySelector('#color3');
//   color3.classList.add('selected');
// }

// if (color3.addEventListener('click', selectColor3)) {
// } else {
//   color3.classList.remove('selected');
// }

// function selectColor4() {
//   const color4 = document.querySelector('#color4');
//   color4.classList.add('selected');
// }

// if (color4.addEventListener('click', selectColor4)) {
// } else {
//   color4.classList.remove('selected');
// }

//   if (color1.addEventListener('click')) {
//     selectColor1();
//   } else {
//     color1.classList.remove('selected');
//   }

//   if (color2.addEventListener('click')) {
//     color2.classList.add('selected');
//   } else {
//     color2.classList.remove('selected');
//   }

//   if (color3.addEventListener('click')) {
//     color3.classList.add('selected');
//   } else {
//     color3.classList.remove('selected');
//   }

//   if (color4.addEventListener('click')) {
//     color4.classList.add('selected');
//   } else {
//     color4.classList.remove('selected');
//   }
// }

//     else if (color2.addEventListener('click')){
//   color2.classList.add('selected');
// } else if (color3.addEventListener('click')){
//   color3.classList.add('selected');
// } else if (color4.addEventListener('click')){
//   color4.classList.add('selected');
// } else {

// }
