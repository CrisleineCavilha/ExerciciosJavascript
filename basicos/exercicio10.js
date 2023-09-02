/* 10. FUP que calcule o IMC -solicite se Ã© H ou M e faÃ§a o calculo;
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7*/

function calculoIMC(genero, peso) {
    let resultadoIMC = 0;

    if(genero == 'm' || genero == 'M') {
        resultadoIMC = (72.7 * peso) - 58;
    } else if(genero == 'f' || genero == 'F') {
        resultadoIMC = (62.1 * peso) - 44.7;
    } 
    return resultadoIMC;
}

module.exports = {calculoIMC }