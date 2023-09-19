// FUP que solicite dois numero e verifique qual é o maior;

function numeroMaior(num1, num2) {
    let resultado = 0
    if(num1 > num2) {
        resultado = num1;        
    } else {
        resultado = num2
    }
    return (`O número maior é ${resultado}.`)
}

module.exports = {numeroMaior}