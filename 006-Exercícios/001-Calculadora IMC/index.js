/*
IMC é a sigla para Índice de Massa Corpórea,
parâmetro adotado pela Organização Mundial 
de Saúde para calcular o peso ideal de cada pessoa.

Como calcular o IMC?
O IMC é calculado dividindo o peso (em kg) pela
altura ao quadrado (em m), de acordo com a seguinte
formula: IMC = PESO / (ALTURA X ALTURA).

E nosso calculo devemos retornar os seguintes valores para o usuário:

Resultado do Calc       | Resultado para o usuário
Abaixo de 17            | Muito Abaixo do peso
Entre 17 e 18.49        | Abaixo do peso
Entre 18.5 e 24.99      | Peso Normal
Entre 25 e 29.99        | Acima do Peso
Entre 30 e 34.99        | Obsidade I
Entre 35 e 39.99        | Obsidade II
*/


const peso = 82;
const altura = 1.82;
const imc = Number((peso / (altura * altura)).toFixed(2));

console.log(imc)
switch (true) {
    case imc < 17:
        console.log("Muito Abaixo do peso");
        break;
    
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso")
    break;

    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso normal")
    break;

    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso")
    break;

    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I")
    break;

    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II")
    break;

}