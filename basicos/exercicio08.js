//FUP que peça um número e imprima a tabuada deste número

function tabuada(numTabuada) { 
    let result;
    for (let i = 0; i <= 10; i++ ) {
        if(i ==0){
            result = `${numTabuada} x ${i} = ${numTabuada * i} `; 
        } else
            result += `${numTabuada} x ${i} = ${numTabuada * i} `;        
    };
    return result;
}

module.exports = {tabuada}

