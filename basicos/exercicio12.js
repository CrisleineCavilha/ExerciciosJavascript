//FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo;

function negativoPositivo(num) {
    if(num >= 0) {
        return (`O número ${num} é positivo.`)
    } else {
        return (`O número ${num} é negativo.`)
    }
}

module.exports = {negativoPositivo}