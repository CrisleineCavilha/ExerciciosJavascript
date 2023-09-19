//FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;

function converterEvento(segundos) {
    const horas = segundos / 3600 ;
    const minutos = segundos/ 60;
    const valorSegundos = segundos;
    return (`${horas} hora, ${minutos} minutos, ${valorSegundos} segundos`);
}

module.exports = {converterEvento}




