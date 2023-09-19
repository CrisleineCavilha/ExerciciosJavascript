const {describe, expect, it} = require('@jest/globals');
const {
    batata
} = require('../basicos/exercicio23');

describe('Teste do exercicio 23', () => {

    it('Repetir a palavra batata enquanto o número 1 for digitado', () => {
        const result = batata(1);

        expect(result).toBe('Batata');
    });    
});