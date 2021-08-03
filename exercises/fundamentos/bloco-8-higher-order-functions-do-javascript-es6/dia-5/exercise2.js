const assert = require('assert');

// escreva sum abaixo

function sum (...numbers) {
  let acc = 0;
  for (let index = 0; index < numbers.length; index+= 1) {
    acc += numbers[index];
  }
  return acc;
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);