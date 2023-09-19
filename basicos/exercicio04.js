// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 

function converterGraus(temperaturaC) {
    const resultado = (temperaturaC * 1.82) + 32;
    return resultado;
}

module.exports = {converterGraus}