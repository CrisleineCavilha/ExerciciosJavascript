/* FUP que leia as 3 notas de um aluno e calcule a média final deste aluno.
 Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.*/

 function mediaNotas(nota1, nota2, nota3) {
    media = 0
    media = ((nota1 * 2) + (nota2 * 3) + ( nota3 * 5)) / 10
    return(`A média final é ${media}.`)
 }
    
module.exports = {mediaNotas}