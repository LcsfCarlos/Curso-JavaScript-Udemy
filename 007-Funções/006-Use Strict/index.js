/*
O strict mode elima alguns erros sileciosos 
que passariam batido do JAVASCRIPT e os faz emitir erros.

Além disso, dessa forma corrige alguns erros que tornam o JavaScript 
difícil de ser otimizado, então algumas vezes os códigos no modo estrito
rodam mais otimizados e velozes do que os códigos no 'modo normal'

link: https://www.geeksforgeeks.org/strict-mode-javascript/
*/
"use strict";
var arguments;

(() => {
    let teste = "teste";
    console.log(teste);
})();

console.log(teste);