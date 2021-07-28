const luckyBtn = document.querySelector('#lucky-btn');
const luckyInput = document.querySelector('#lucky-number');

function checkNumber (luckyNum) {
  let result = '';

  if (luckyNum > 5 || luckyNum < 1) {
    result = 'É pra ser entre 1 e 5 inféliz';
  } else {
    if (luckyNum === gerateNumber()) {
      result = 'Congratulações!! Ficou ryca!';
    } else {
      result = 'A derrota você já teve, chegue atrás da humilhação';
    }
  }

  alert (result);
}

function gerateNumber () {
  return Math.floor(Math.random() * (5 - 1)) + 1;
  
}

luckyBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let num = parseInt(luckyInput.value);
  checkNumber(num);
  luckyInput.value = '';
});
