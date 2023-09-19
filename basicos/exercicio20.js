/* FUP que leia:
```
    • a percentagem do IPI a ser acrescido no valor das peças
    • o código da peça 1, valor unitário da peça 1, quantidade de peças 1
    • o código da peça 2, valor unitário da peça 2, quantidade de peças 2
    O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
```
Fórmula : ValorTotal = (valor1*quant1 + valor2*quant2)*(IPI/100 + 1) */

function ipi(ipi, cod_Peca1, valor_Peca1, qtde_Pecas1, cod_Peca2, valor_Peca2, qtde_Pecas2) {
    valorTotal = 0
    valorTotal = (valor_Peca1 * qtde_Pecas1 + valor_Peca2 * qtde_Pecas2)* (ipi/100 + 1);
    return(`O valor total é de R$ ${valorTotal.toFixed(2)}`)
}

module.exports = {ipi}