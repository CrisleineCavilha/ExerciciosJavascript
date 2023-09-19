const {describe, expect, it} = require('@jest/globals');
const {
    mediaAltura
} = require('../basicos/exercicio25');

describe('Teste do exercicio 25', () => {

    it('Calcular a média das altura, enquanto não atingir a quantidade de pessoas do laço de repetição', () => {
        const result = mediaAltura(2, 1.50, 1.80);

        expect(result).toBe(`A média de altura das pessoas é 1.65.`);
    });    
});