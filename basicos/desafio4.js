// FUP que peça um ano e verifique se ano informado é bissexto. Imprima essa

function anoBissexto(ano) {
    if( ano % 400 == 0) {
        return (`${ano} é bissexto.`)
    } else {
        return (`${ano} não é bissexto.`)
    }
}

module.exports = {anoBissexto}