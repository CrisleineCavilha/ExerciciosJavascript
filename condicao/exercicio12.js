/* 12. FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo*/

function positivoNegativo(numero) {
    if(numero >= 0) {
        numero = 'positivo'
    } else {
        numero = 'negativo'
    }
    return numero
}

module.exports = { positivoNegativo }