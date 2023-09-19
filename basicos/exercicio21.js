/* FUP para uma Investigação Criminal. Faça 8 perguntas para uma pessoa sobre um crime. As perguntas são:

```
" Trocou mensagens com a vítima? "
" Esteve no local do crime? "
" É parente ou reside perto da vítima? "
" Devia algum valor para a vítima? "
" Trabalha ou trabalhou com a vítima? "
" Possui algum tipo de relacionamento amoroso com a vítima? "
" Ficou feliz pelo destino fatídico na vítima? "
" Possui algum tipo de arma de fogo? "
```

Após, deve ser realizado uma análise das respostas e no final emitir uma classificação sobre a participação da pessoa no crime.
 Se a pessoa responder:

```
- Positivo para 4 perguntas, a pessoa deve ser classificada como: "Suspeito do Crime"
- Positivo para entre 5 e 7 perguntas, a pessoa deve ser classificada como "Possível Criminoso"
- Positivo para 8 perguntas, a pessoa deve ser classificada como: "Assassino"
- Caso contrário, a pessoa deverá ser classificado como: "Inocente".     */

function investigacaoCriminal(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8) {
    resposta = 0;
  
    if(resposta1 == 's') {
        resposta += 1;
    } 
    if(resposta2 == 's') {
        resposta += 1;
    }
    if(resposta3 == 's') {
        resposta += 1;
    }
    if(resposta4 == 's') {
        resposta += 1;
    }
    if(resposta5 == 's') {
        resposta += 1;
    }
    if(resposta6 == 's') {
        resposta += 1;
    }
    if(resposta7 == 's') {
        resposta += 1;
    }
    if(resposta8 == 's') {
        resposta += 1;
    }
   

    if(resposta == 4){
        return ('Suspeito do crime');
    } else if( resposta >= 5 && resposta <= 7) {
        return ('Possível criminoso');
    } else if (resposta == 8) {
        return ('Assassino');
    }
    else if (resposta == 0 || resposta < 4) {
        return ('Inocente');
    }
}
module.exports = {investigacaoCriminal}