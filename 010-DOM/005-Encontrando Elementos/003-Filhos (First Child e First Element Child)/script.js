"use strict";

const container = document.querySelector(".container");
const p = document.querySelector(".paragrafo");


console.log(p.firstChild); //FistChild pega o primeiro filho podendo ser o próprio espaço no HTML
console.log(p.firstElementChild); //FistElementChild pega o primeiro elemento (os espaços no texto não conta)
