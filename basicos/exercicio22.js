/* FUP que leia a velocidade permitida em uma via, a velocidade praticada por um motorista 
e informe se o mesmo receberá multa ou não, e o valor a pagar. Caso tenha excedido a velocidade em até 20% da permitida,
 o motorista receberá uma multa de R$ 102,00. Caso tenha excedido a velocidade acima de 20% da permitida,
 o motorista receberá uma multa de R$ 500,00. */

 function velocidadePermitida(velo_Permitida, velo_Praticada) {
    velocidade = velo_Permitida + (velo_Permitida * 0.20);
    
    if(velo_Praticada <= velo_Permitida){
        return (' Não há multa.')
    } else if(velo_Praticada > velo_Permitida && velo_Praticada <= velocidade) {
        return (' A velocidade foi excedida em até 20 % a permitida. O valor da multa será de R$ 102.00');
    }
    else if(velo_Praticada > velocidade) {
        return (' A velocidade excedida foi acima de 20% da permitida. O valor da multa será de R$ 500.00');
    }
 } 

 module.exports = {velocidadePermitida}