const {describe, expect, it} = require('@jest/globals');
const {
    converterMilhas 
} = require('../basicos/exercicio05');

describe('Teste do exercicio 5', () => {

    it('Converter qtde de milhas em Km', () => {
        const result = converterMilhas(3);

        expect(result).toBe(4.82802);
    });    
});
