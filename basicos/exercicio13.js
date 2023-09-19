//FUP que solicite um numero e veja se ele é par ou impar;

function parImpar(num) {
    if(num % 2 == 0) {
        return (`O número ${num} é par.`)
    } else {
        return (`O número ${num} é impar.`)
    }
}

module.exports = {parImpar}