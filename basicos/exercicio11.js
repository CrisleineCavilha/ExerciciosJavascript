//11. FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado;

function calculadora(num1, num2, operacao) {
    let resultado = 0;
    if(operacao == '+') {
        resultado = num1 + num2;
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } else if(operacao == '-') {
        resultado = Math.abs(num1 - num2);
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } else if(operacao == "*") {
        resultado = num1 * num2;
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } else if(operacao == '/') {
        resultado = num1 / num2;
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } else {
        return('Opção inválida!')
    }
}

module.exports = {calculadora}