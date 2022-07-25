const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const colorPalette = document.getElementsByClassName('color');

// #1 Criando quadro de pixel

function genPixel(value) {
  for (let l = 1; l <= value; l += 1) {
    const sLine = document.createElement('div');
    for (let c = 1; c <= value; c += 1) {
      const cLine = document.createElement('div');
      cLine.classList.remove('pixel');
      cLine.classList.add('pixel');
      sLine.appendChild(cLine);
      cLine.style.backgroundColor = 'white';
    }
    pixelBoard.appendChild(sLine);
  }
}

// Cores aleatórias

function colorGenerator() {
  const red2 = Math.round(Math.random() * 255);
  const green2 = Math.round(Math.random() * 255);
  const blue2 = Math.round(Math.random() * 255);
  const red3 = Math.round(Math.random() * 255);
  const green3 = Math.round(Math.random() * 255);
  const blue3 = Math.round(Math.random() * 255);
  const red4 = Math.round(Math.random() * 255);
  const green4 = Math.round(Math.random() * 255);
  const blue4 = Math.round(Math.random() * 255);
  const colorRandom2 = `rgb(${red2}, ${green2}, ${blue2})`;
  const colorRandom3 = `rgb(${red3}, ${green3}, ${blue3})`;
  const colorRandom4 = `rgb(${red4}, ${green4}, ${blue4})`;
  const c2 = document.getElementById('color2');
  const c3 = document.getElementById('color3');
  const c4 = document.getElementById('color4');
  c2.style.backgroundColor = colorRandom2;
  c3.style.backgroundColor = colorRandom3;
  c4.style.backgroundColor = colorRandom4;
}

// Setando primeiro elemento como selected

function setColor1() {
  const color1 = document.querySelector('#color1');
  color1.classList.add('selected');
}

// Pintando pixel

function paintPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const colorS = document.querySelector('.selected');
      const bgColor = getComputedStyle(colorS, null).getPropertyValue(
        'background-color'
      );
      event.target.style.backgroundColor = bgColor;
    });
  }
}

//Excluindo todos os pixels

function removePixels() {
  // pixell = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoard.children.length;) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

// Selecionando paleta

function colorSel() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

// Req 9 limpar quadro

btnLimpar = document.getElementById('clear-board');
btnLimpar.addEventListener('click', clearBoard);
function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

// Req 10 gerar pixels

const inputGenBoard = document.getElementById('board-size');
const btnGenBoard = document.getElementById('generate-board');
function inputPixel() {
  btnGenBoard.addEventListener('click', () => {
    const valueBoard = inputGenBoard.value;
    value = valueBoard;
    removePixels();
    genPixel(value);
    paintPixel();

    if (valueBoard === '0' || valueBoard === '') {
      alert('Board inválido!');
    }
  });
}

// Setando limite no input

inputGenBoard.addEventListener('focusout', () => {
  if (inputGenBoard.value < 5) {
    inputGenBoard.value = 5;
    alert('Tamanho mínimo = "5"');
  }
  if (inputGenBoard.value > 50) {
    alert('Tamanho máximo = "50"');
    inputGenBoard.value = 50;
  }
});

// Loaders
window.onload = function load() {
  genPixel(5);
  setColor1();
  colorSel();
  inputPixel();
  paintPixel();
  colorGenerator();
};
