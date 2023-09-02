//Desafio 0) FUP que leia a idade de uma pessoa em anos e imprima a idade em meses e em dias.

function converterIdadeMeses(idadeAnos) {
    const idadeMeses = idadeAnos * 12;
    return idadeMeses;
}

function converterIdadeDias(idadeAnos) {
    const idadeDias = idadeAnos * 365;
    return idadeDias;
}

function converterIdadeAnos(idadeAnos) {
    if(isNaN(idadeAnos)){
        throw new Error('N~ao é um numero')
    }
    const id_Anos = idadeAnos;
    return id_Anos;
}

module.exports = { converterIdadeMeses, converterIdadeDias, converterIdadeAnos }