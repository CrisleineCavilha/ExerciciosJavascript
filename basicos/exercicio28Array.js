
function tabuadaArray(numero) {

    let resultado = []
       
    for(let i = 0; i <= 10; i++) {
        resultado[i] = `${numero} x ${i} = ${numero * i} `;            
    }
    return resultado
}
      
module.exports = {tabuadaArray}
 

