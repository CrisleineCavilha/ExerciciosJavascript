/* FUP que calcule a mÃ©dia aritmÃ©tica das 3 notas de um aluno e mostre, alÃ©m do valor da mÃ©dia, uma mensagem de "Aprovado",
caso a mÃ©dia seja igual ou superior a 7, a mensagem "RecuperaÃ§Ã£o", caso a mÃ©dia se igual ou superior a 5 e inferior a 7,
ou a mensagem â€œReprovadoâ€, caso a mÃ©dia seja inferior a 5*/

function mediaNotas(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    
    if(media < 5){
        return (`A média é ${media} e o aluno está "Reprovado".`)

    } else if(media >= 5 & media < 7) {
        return (`A média é ${media} e o aluno está "Em Recuperação".`) 

    } else {
        return (`A média é ${media} e o aluno está "Aprovado".`)   
    }
}

module.exports = { mediaNotas }