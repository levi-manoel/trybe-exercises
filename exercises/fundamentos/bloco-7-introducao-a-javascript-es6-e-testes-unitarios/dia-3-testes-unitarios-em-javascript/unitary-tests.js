// parte 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// testes

assert.strictEqual(sum(4, 5), 9, 'A soma de 4 e 5 deveria ser 9');
assert.strictEqual(sum(0, 0), 0, 'A soma de 0 e 0 deveria ser 0');
assert.strictEqual(sum(4, "5"), 9); // retorna erro do throw

// parte 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// testes

assert.strictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "O array retonado não devia conter o 3");// resultado certo, mas retorna erro O.o
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);



