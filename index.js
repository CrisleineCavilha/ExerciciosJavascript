const express = require('express');
const {somar} = require('./basicos/exercicio01.js');
const {calculoHorasTrabalhadas} = require('./basicos/exercicio02.js');
const {calculoPeso} = require('./basicos/exercicio03.js');
const {converterGraus} = require('./basicos/exercicio04.js');
const {converterMilhas} = require('./basicos/exercicio05.js');
const {converterEvento} = require('./basicos/exercicio06.js');
const {converterDistanciaMetros,converterDistanciaCentimetros, converterDistanciaKm} = require('./basicos/exercicio07.js');
const {tabuada} = require('./basicos/exercicio08.js');
const {mediaNotas} = require('./basicos/exercicio09.js');
const {calculoIMC} = require('./basicos/exercicio10.js');
const {calculadora } = require('./condicao/exercicio11.js');
const {positivoNegativo } = require('./condicao/exercicio12.js');
const {verificacaoNumero } = require('./condicao/exercicio13.js');
const {numeroMaior } = require('./condicao/exercicio14.js');
const {triangulo} = require('./condicao/exercicio15.js');


const app = express();
const porta = 3000;

app.use(express.json());

// FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;
app.post('/api/exercicio01', (req, res) => {
    const soma = somar(req.body.num1, req.body.num2);
   
    res.status(200).json({
        message:(`A soma é igual a ${soma}.`)
    });
});

/* FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas.
 Imprima o valor que o trabalhador deverá receber ao final do mês. */
 app.post('/api/exercicio02', (req, res) => {
    const soma = calculoHorasTrabalhadas(req.body.valorHora, req.body.qtdeHoras);
   
    res.status(200).json({
        message:(`Ao final do mês, o trabalhador receberá o valor de R$ ${soma}.`)
    });
});

//FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
app.post('/api/exercicio03', (req, res) => {
    const mediaPeso = calculoPeso(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4,req.body.peso5);
   
    res.status(200).json({
        message:(`A média dos 5 pesos é de ${mediaPeso}.`)
    });
});

// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit.
app.post('/api/exercicio04', (req, res) => {
    const temperaturaF = converterGraus(req.body.temperaturaC);
    res.status(200).json({
        message:(`A temperatura em Farenheit é ${temperaturaF}.`)
    });
});

//FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
app.post('/api/exercicio05', (req, res) => {
    const qtdeKm = converterMilhas(req.body.qtdeMilhas);
    res.status(200).json({
        message:(`A quantidade é de ${qtdeKm} km.`)
    });
});

//FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;
app.post('/api/exercicio06', (req, res) => {
    const duracaoEvento = converterEvento(req.body.segundos);

    res.status(200).json({
        message:(`A duração do evento é de ${duracaoEvento}.`)
    });
});

//FUP que leia um valor em quilometros e converta para metros e centimetro;
app.post('/api/exercicio07', (req, res) => {
    const metros = converterDistanciaMetros(req.body.valorKm);
    const centimetros = converterDistanciaCentimetros(req.body.valorKm);
    const km = converterDistanciaKm(req.body.valorKm);

    res.status(200).json({
        message:(` ${km} é igual a ${metros}m e ${centimetros}cm.`)
    });
});

//FUP que peça um número e imprima a tabuada deste número
app.post('/api/exercicio08', (req, res) => {
    const resultadoTabuada = tabuada(req.body.numTabuada);
    res.status(200).json({ 
        message: resultadoTabuada
    });
});

// /* FUP que calcule a mÃ©dia aritmÃ©tica das 3 notas de um aluno e mostre, alÃ©m do valor da mÃ©dia, uma mensagem de "Aprovado",
// caso a mÃ©dia seja igual ou superior a 7, a mensagem "RecuperaÃ§Ã£o", caso a mÃ©dia se igual ou superior a 5 e inferior a 7,
// ou a mensagem â€œReprovadoâ€, caso a mÃ©dia seja inferior a 5*/

app.post('/api/exercicio09', (req, res) => {
    const media = mediaNotas(req.body.nota1, req.body.nota2, req.body.nota3);
    res.status(200).json({
        message: media
    });
});

/* 10. FUP que calcule o IMC -solicite se Ã© H ou M e faÃ§a o calculo;
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7*/
app.post('/api/exercicio10', (req, res) => {
    const resultadoIMC = calculoIMC(req.body.genero, req.body.peso);
    res.status(200).json({
        message: (`O resultado IMC para o gênero selecionado é ${resultadoIMC}`)
    });
});

/*FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado*/
app.post('/api/exercicio11', (req, res) => {
    const resultado = calculadora(req.body.num1, req.body.num2, req.body.operacao);
    res.status(200).json ({
        message: (`O resultado da operação é: ${resultado}`)
    });
});

app.post('/api/exercicio12', (req, res) => {
    const resultado = positivoNegativo(req.body.numero);
    res.status(200).json ({
        message: (`O número é ${resultado}`)
    })
})

app.post('/api/exercicio13', (req, res) => {
    const resultado = verificacaoNumero(req.body.numero);
    res.status(200).json ({
        message: (`O número é ${resultado}`)
    });
});

app.post('/api/exercicio14', (req, res) => {
    const resultado = numeroMaior(req.body.num1, req.body.num2);
    res.status(200).json ({
        message: (`O número maior é o ${resultado}`)
    });
});

app.post('/api/exercicio15', (req, res) => {
    const resultado = triangulo(req.body.a, req.body.b, req.body.c,req.body.base,req.body.altura );
    res.status(200).json ({
        message: resultado
    });
});




app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`);
});