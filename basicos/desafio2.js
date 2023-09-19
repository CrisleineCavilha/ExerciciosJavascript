// > Desafio 2) FUP que leia dois números inteiros e imprima o maior deles.

function maiorNumero(numero1, numero2 ){
    let resultadoNumero;

    if( numero1 > numero2) {
        resultadoNumero = numero1;
    } else {
        resultadoNumero = numero2;
    }    
    return resultadoNumero;
}

module.exports = {maiorNumero}