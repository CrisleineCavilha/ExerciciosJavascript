// FUP que leia dois nÃºmeros inteiros e imprima o maior deles.

function maiorNumero(numero1, numero2) {
    let resultadoMaiorNumero = 0;
    if(numero1 > numero2) {
        resultadoMaiorNumero = numero1;
    } else {
        resultadoMaiorNumero = numero2;
    }
    return resultadoMaiorNumero;
}

module.exports = { maiorNumero }