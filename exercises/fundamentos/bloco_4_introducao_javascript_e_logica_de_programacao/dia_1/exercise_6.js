let peca = "CavAlO";
peca = peca.toLowerCase();
switch(peca){
    case "bispo":
        console.log(peca +" -> Diagonais")
    break;
    case "rei":
        console.log(peca +" -> Qualquer direção, uma casa")
    break;
    case "rainha":
        console.log(peca +" -> Qualquer direção, muitas casas")
    break;
    case "torre":
        console.log(peca +" -> Linha reta, muitas casas")
    break;
    case "cavalo":
        console.log(peca +" -> Em 'L'")
    break;
    case "peão":
        console.log(peca +" -> Uma casa pra frente(no 1º movimento pode andar 2 casas), captura outras peças nas diagonais dianteiras")
    break;
}
