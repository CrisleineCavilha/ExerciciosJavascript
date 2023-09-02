const { describe, expect, it } = require('@jest/globals')
const {
   converterIdadeAnos,
   converterIdadeDias,
   converterIdadeMeses
} = require('../../basicos/desafio0')

describe('Testes do desafio 0', () => {

   it('Converter idade em anos', () => {
      const result = converterIdadeAnos(5)
      
      expect(result).toBe(5);
   })

   it('Converter idade em anos passando letra', () => {
      //
      const result = () => converterIdadeAnos('a')
      
      expect(result).toThrow;
   })

})