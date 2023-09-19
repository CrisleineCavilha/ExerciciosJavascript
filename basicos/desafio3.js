// FUP que solicite três numero e verifique qual é o menor;

function numeroMenor(num1, num2, num3) {
    numero = 0
    if(num1 < num2 && num1 < num3) {
        numero = num1;
    } else if(num2 < num1 && num2 < num3) {
        numero = num2;
    } else {
        numero = num3;
    }
    return (`${numero} é o menor número entre ${num1}, ${num2} e ${num3}.`)
}

module.exports = {numeroMenor}