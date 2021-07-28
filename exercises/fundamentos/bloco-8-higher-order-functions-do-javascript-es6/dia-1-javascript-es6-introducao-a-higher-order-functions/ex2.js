
function checkNumber (luckyNum) {
  let result = '';

  if (luckyNum === gerateNumber()) {
    result = 'Congratulaçoes!! Ficou ryca!';
  } else {
    result = 'A derrota você já teve, chegue atrás da humilhação';
  }

  return result;
}

function gerateNumber () {
  return Math.floor(Math.random() * (5 - 1)) + 1;
  
}

console.log(checkNumber(3));