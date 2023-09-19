

function mediaAltura(qtdePessoas, altura1, altura2) {
    let media = 0;
    let soma = 0;
   
    for(i = 1; i <= qtdePessoas; i++) {
        soma = altura1 + altura2
    }
    media = soma / qtdePessoas;
    return (`A média de altura das pessoas é ${media.toFixed(2)}.`)
}

module.exports = {mediaAltura}