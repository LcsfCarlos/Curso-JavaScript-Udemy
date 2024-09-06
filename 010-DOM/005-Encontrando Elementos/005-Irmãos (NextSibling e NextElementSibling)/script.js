"use strict";

const h1 = document.querySelector("h1");
const p = document.querySelector(".paragrafo");


console.log(p.nextSibling); //Pega o irmão mais proximo independente se é texto ou elemento.
console.log(p.nextElementSibling); //Pega o proximo elemento.