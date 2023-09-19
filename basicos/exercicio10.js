/* 10. FUP que calcule o IMC -solicite se é H ou M e faça o calculo;
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7*/

function calculoIMC(genero, peso){ 
    genero = genero.toLowerCase();
    let resultado = 0
    if(genero == 'm'){
        resultado = (62.1 * peso) - 44.7;
        return(`O gênero informado foi "${genero}" e o peso foi ${peso}. O resultado do IMC é ${resultado}.`)
    } else if(genero == 'h'){
        resultado = (72.7 * peso) - 58;
        return(`O gênero informado foi "${genero}" e o peso foi ${peso}. O resultado do IMC é ${resultado}.`)
    }
}

module.exports = {calculoIMC}