let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infoB = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for(let key in info){
  console.log(key);
}
for(let key in info){
  console.log(info[key]);
}

console.log(info.personagem + ' e ' + infoB.personagem);
console.log(info.origem + 'e ' + infoB.origem);
console.log(info.nota + ' e ' + infoB.nota);
console.log('Ambos recorrentes');
