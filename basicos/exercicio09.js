/*FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", 
caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, 
ou a mensagem “Reprovado”, caso a média seja inferior a 5 */

function mediaNotas (nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function statusAluno(media) {
    if(media < 5) {
        return (`A média é ${media} e o aluno está "Reprovado"`);
    
    } else if(media >= 5 && media < 7) {
        return (`A média é ${media} e o aluno está em "Recuperação"`);
  
    } else {
        return (`A média é ${media} e o aluno esta "Aprovado"`);
    }
}

module.exports = {statusAluno}


