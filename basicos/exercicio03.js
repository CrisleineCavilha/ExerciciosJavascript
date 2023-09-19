//FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;

function calculoPeso(peso1, peso2, peso3, peso4, peso5) {
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    return media;
}

module.exports = {calculoPeso}