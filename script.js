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

// function selectColor(cor) {
//   for (let i = 0; i < selected.length; i += 1) {
//     selected[i].classList.remove('selected');
//   }
//   cor.target.classList.add('selected');
// }

// Setando cor preta 

function setColor1(color) {
  const color1 = document.querySelector('#color1');
  color1.classList.add('selected');
}

// Req 7 selecionando cor na palheta
const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');
const c3 = document.getElementById('color3');
const c4 = document.getElementById('color4');

c1.addEventListener('click', colorSelected);
c2.addEventListener('click', colorSelected);
c3.addEventListener('click', colorSelected);
c4.addEventListener('click', colorSelected);

function colorSelected(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// pintando pixel

function paintPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function(event) {
  let corSelected = document.querySelectorAll('.selected');
  event.target.style.background = 'corSelected[0].id';
})
}

paintPixel();

//Req 9 limpar quadro
const pixel = document.getElementsByClassName('pixel');
btnLimpar = document.getElementById('clear-board');

btnLimpar.addEventListener('click', clearBoard);
function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

window.onload = function load() {
  genPixel(5);
  setColor1();
};
