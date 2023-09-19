const {describe, expect, it} = require('@jest/globals');
const {
    parImpar 
} = require('../basicos/exercicio13');

describe('Teste do exercicio 13', () => {

    it('Validar se o número é par ou impar', () => {
        const result = parImpar(2);

        expect(result).toBe('O número 2 é par.');
    });    
});
