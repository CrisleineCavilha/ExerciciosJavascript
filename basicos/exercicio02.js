/* FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas.
 Imprima o valor que o trabalhador deverá receber ao final do mês. */

 function calculoHorasTrabalhadas(valorHora, qtdeHoras) {
    return valorHora * qtdeHoras;
}

module.exports = { calculoHorasTrabalhadas }