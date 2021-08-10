const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  names.reduce((acc, curr) => {
    for (let index = 0; index < curr.length; index += 1) {
      if (curr[index] === 'a' || curr[index] === 'A') {
        acc += 1;
      };
    };
    console.log(acc);
  }), 0;
}

assert.deepStrictEqual(containsA(), 20);