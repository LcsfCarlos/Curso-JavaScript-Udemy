/*
    O que é uma função?
    É um conjunto de intruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declaration 
function isValidDeclaration() {
    const soma = 1 + 2;
    if ( soma === 3) {
        return true;
    }
        return false;
}
//console.log(isValid());

// 2 - Funciotions expression 
const isValidEspresion = function() {
    return false;
}

//console.log(isValidEspresion());

// 3 - Arrow Funcions 
//const isValidArrow = () => 2 * 2;

const isValidArrow = () => {
    const multiplicacao = 2 * 2;
    return multiplicacao;
};

console.log(isValidArrow());

