/*FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado*/

function calculadora(num1, num2, operacao) {
    let resultado = 0

    if(operacao == '+') {
        resultado = num1 + num2;        
    }
    else if(operacao == '-') {
        resultado = num1 - num2;
    }
    else if(operacao == '*') {
        resultado = num1 * num2;
    }
    else if(operacao == '/') {
        resultado = num1 / num2
    }
    return resultado
}

module.exports = { calculadora }