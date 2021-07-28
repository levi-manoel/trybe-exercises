
function createEmploye (fullName) {
  let name = fullName;
  let splitName = fullName.split(' ');
  let email = splitName[0].toLowerCase() + '_' + splitName[1].toLowerCase() + '@trybe.com';

  let employe = {
    Nome: name,
    Email: email,
  }

  return employe;
}

const newEmployees = () => {
  const employees = {
    id1: createEmploye('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmploye('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmploye('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.table(newEmployees());
