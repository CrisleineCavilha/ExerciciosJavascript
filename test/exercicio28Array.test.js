const {describe, expect, it} = require('@jest/globals');
const {
    tabuadaArray
} = require('../basicos/exercicio28Array');

describe('Teste do exercicio 28 Array', () => {

    it('Calcular a tabuada com array.', () => {
        const result = tabuadaArray(2);

        expect(result).toStrictEqual(["2 x 0 = 0 ", "2 x 1 = 2 ", "2 x 2 = 4 ", "2 x 3 = 6 ", "2 x 4 = 8 ", "2 x 5 = 10 ", "2 x 6 = 12 ", "2 x 7 = 14 ", "2 x 8 = 16 ", "2 x 9 = 18 ", "2 x 10 = 20 "]);
    });    
});