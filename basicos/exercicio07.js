//FUP que leia um valor em quilometros e converta para metros e centimetro;

function converterDistanciaMetros(valorKm) {
    const metros = valorKm * 1000;
    return metros
}

function converterDistanciaCentimetros(valorKm) {
    const centimetros = valorKm * 1000000; 
    return centimetros
} 

function converterDistanciaKm(valorKm) {
    const quilometros = valorKm;
    return quilometros
} 

module.exports = {converterDistanciaMetros, converterDistanciaCentimetros, converterDistanciaKm}