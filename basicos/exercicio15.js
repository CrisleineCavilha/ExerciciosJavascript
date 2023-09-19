/* FUP que leia 3 valores a,b,c e verifique se eles formam ou não um triângulo. 
Caso os valores formem um triângulo, solicite a base e a altura, calcule (base * altura / 2) e escreva a área deste triângulo. 
Se não formam triângulo escreva os valores lidos.*/

function triangulo(a, b, c) {
    if((a ==b) && (a ==c) & (b == c)) { 
        return (`É um triângulo equilátero, com 3 lados iguais`)
    } else {
            return(`Valor de A: ${a}, B: ${b}, C: ${c} `)
        }
}


module.exports = {triangulo}