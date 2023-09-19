const express = require('express');
const {somar} = require('./basicos/exercicio01.js')
const {calculoHorasTrabalhadas} = require('./basicos/exercicio02.js');
const {calculoPeso} = require('./basicos/exercicio03.js');
const {converterGraus} = require('./basicos/exercicio04.js');
const {converterMilhas} = require('./basicos/exercicio05.js');
const {converterEvento} = require('./basicos/exercicio06.js'); 
const {converterDistanciaMetros, converterDistanciaCentimetros, converterDistanciaKm} = require('./basicos/exercicio07.js');
const {tabuada} = require('./basicos/exercicio08.js');
const {statusAluno} = require('./basicos/exercicio09.js');
const {converterIdadeMeses, converterIdadeDias, converterIdadeAnos} = require('./basicos/desafio0.js');
const {maiorNumero} = require('./basicos/desafio2.js');
const {calculoIMC} = require('./basicos/exercicio10.js');
const {calculadora} = require('./basicos/exercicio11.js');
const {negativoPositivo} = require('./basicos/exercicio12.js');
const {parImpar} = require('./basicos/exercicio13.js');
const {numeroMaior} = require('./basicos/exercicio14.js');
const {triangulo} = require('./basicos/exercicio15.js');
const {numeroMenor} = require('./basicos/desafio3.js');
const {anoBissexto} = require('./basicos/desafio4.js');
const {mediaNotas} = require('./basicos/exercicio17.js');
const {ipi} = require('./basicos/exercicio20.js');
const {investigacaoCriminal} = require('./basicos/exercicio21.js');
const {velocidadePermitida} = require('./basicos/exercicio22.js');
const {batata} = require('./basicos/exercicio23.js');
const {mediaAltura} = require('./basicos/exercicio25.js');
const {tabuadaArray} = require('./basicos/exercicio28Array.js');


const app = express();
app.use(express.json());
const porta = 3000;

app.post('/api/exercicio01', (req, res) => {
    const resultado = somar(req.body.num1, req.body.num2);
    res.status(200).json({
        message: (`O resultado da soma é: ${resultado}.`)
    });
});


app.post('/api/exercicio02', (req, res) => {
    const calculoHoras = calculoHorasTrabalhadas(req.body.valorHora, req.body.qtdeHoras);
    res.status(200).json({
        message: (`O trabalhador irá receber no final do mês R$ ${calculoHoras}.`)
    });
});



app.post('/api/exercicio03', (req, res) => {
    const mediaPeso = calculoPeso(req.body.peso1, req.body.peso2,req.body.peso3, req.body.peso4,req.body.peso5);
    res.status(200).json({
        message: (`O peso médio das 5 pessoas é ${mediaPeso} kgs.`)
    });
});
 

app.post('/api/exercicio04', (req, res) => {
    const resultadoTemperatura = converterGraus(req.body.temperaturaC);
    res.status(200).json({
        message: (` O resultado em Farenheit é ${resultadoTemperatura} F.`)
    });
});



app.post('/api/exercicio05', (req, res) => {
    const resultadoKm = converterMilhas(req.body.qtdeMilhas);
    res.status(200).json({
        message: (` O resultado da conversão é de ${resultadoKm} km.`)
    });
});


app.post('/api/exercicio06', (req, res) => {
    const resultado = converterEvento(req.body.segundos);
    res.status(200).json({
        message: (`A duração do evento é de ${resultado}.`)
    });
});



app.post('/api/exercicio07', (req, res) => {
    const distanciaMetros = converterDistanciaMetros(req.body.valorKm);
    const distanciaCentimetros = converterDistanciaCentimetros(req.body.valorKm);
    const distanciaKm = converterDistanciaKm(req.body.valorKm);
    res.status(200).json({
        message: (`O valor de ${distanciaKm} é igual a ${distanciaMetros}m e ${distanciaCentimetros}cm.`)
    });
});



app.post('/api/exercicio08', (req, res) => {
    const resultadoTabuada = tabuada(req.body.numTabuada);
    res.status(200).json({
        message: resultadoTabuada     
    });
});



app.post('/api/exercicio09', (req, res) => {
    const status = statusAluno(req.body.nota1,req.body.nota2,req.body.nota3)
    res.status(200).json({
        message: status
    });
});



app.post('/api/desafio0', (req, res) => {
    const idadeMeses = converterIdadeMeses(req.body.idadeAnos);
    const idadeDias = converterIdadeDias(req.body.idadeAnos);
    const idadeAnos = converterIdadeAnos(req.body.idadeAnos);
    res.status(200).json({
        message: (`A idade ${idadeAnos} anos é igual a ${idadeMeses} meses e ${idadeDias} dias.`)     
    });
});


app.post('/api/desafio2', (req, res) => {
    const numeroMaior = maiorNumero(req.body.numero1, req.body.numero2);
        
    res.status(200).json({
        message: (`O número maior é o ${numeroMaior}.`)
    });
});

app.post('/api/exercicio10', (req, res) => {
    const resultado = calculoIMC(req.body.genero, req.body.peso);        
    res.status(200).json({
        message: resultado
    });
});

app.post('/api/exercicio11', (req, res) => {
    const resultado = calculadora(req.body.num1,req.body.num2,req.body.operacao)
    res.status(200).json({
        message: resultado
    })
})

app.post('/api/exercicio12', (req, res) => {
    const resultado = negativoPositivo(req.body.num);
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio13', (req, res) => {
    const resultado = parImpar(req.body.num);
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio14', (req, res) => {
    const resultado = numeroMaior(req.body.num1, req.body.num2);
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio15', (req, res) => {
    const resultado = triangulo(req.body.a, req.body.b, req.body.c);
    res.status(200).json({
        message: resultado
    })
})

app.post('/api/desafio3', (req, res) => {
    const resultado = numeroMenor(req.body.num1, req.body.num2, req.body.num3);
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/desafio4', (req, res) => {
    const resultado = anoBissexto(req.body.ano);
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio17', (req, res) => {
    const resultado = mediaNotas( req.body.nota1, req.body.nota2, req.body.nota3 );
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio20', (req, res) => {
    const resultado = ipi(req.body.ipi, req.body.cod_Peca1, req.body.valor_Peca1, req.body.qtde_Pecas1, req.body.cod_Peca2, req.body.valor_Peca2, req.body.qtde_Pecas2) 
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio21', (req, res) => {
    const resultado = investigacaoCriminal(req.body.resposta1, req.body.resposta2, req.body.resposta3, req.body.resposta4, req.body.resposta5, req.body.resposta6, req.body.resposta7, req.body.resposta8) 
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio22', (req, res) => {
    const resultado = velocidadePermitida(req.body.velo_Permitida, req.body.velo_Praticada) 
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio23', (req, res) => {
    const resultado = batata(req.body.numero) 
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio25', (req, res) => {
    const resultado = mediaAltura(req.body.qtdePessoas, req.body.altura1, req.body.altura2) 
    res.status(200).json({
        message: resultado
    })
})


app.post('/api/exercicio28Array', (req, res) => {
    const resultado = tabuadaArray(req.body.numero) 
    res.status(200).json({
        message: resultado
    })
})



app.listen(porta, () => {
    console.log(`O servidor rodando na porta ${porta}`);
});

