// FUP que solicite um numero e veja se ele é par ou impar;

function verificacaoNumero(numero) {
    if(numero % 2 == 0) {
        numero = 'par'
    } else {
        numero = 'impar'
    }
    return numero
}

module.exports = { verificacaoNumero }