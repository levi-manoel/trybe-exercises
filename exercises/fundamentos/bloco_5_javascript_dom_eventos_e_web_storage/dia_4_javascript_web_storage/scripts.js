//Changes the brackground color
let bgColor = document.querySelector('#bgColor');
document.querySelector('#bgColor').addEventListener('keyup', changeBgColor);
function changeBgColor() {
  document.querySelector('.main').style.backgroundColor = bgColor.value;
}

//Changes the text color
let txtColor = document.querySelector('#txtColor');
document.querySelector('#txtColor').addEventListener('keyup', changeTxtColor)
function changeTxtColor() {
  document.querySelector('.main').style.color = txtColor.value;
}

//Changes the text size
let txtSize = document.querySelector('#txtSize');
document.querySelector('#txtSize').addEventListener('keyup', changeTxtSize)
function changeTxtSize() {
  document.querySelector('.main').style.fontSize = txtSize.value +'px';
}

//Changes the line height
let lineHeight = document.querySelector('#lineHeight');
document.querySelector('#lineHeight').addEventListener('keyup', changelineHeight)
function changelineHeight() {
  document.querySelector('.main').style.lineHeight = lineHeight.value +'px';
}

//Changes the font familly
let font = document.querySelector('#font');
document.querySelector('#font').addEventListener('keyup', changeFont);
function changeFont() {
  document.querySelector('.main').style.fontFamily = font.value;
}
