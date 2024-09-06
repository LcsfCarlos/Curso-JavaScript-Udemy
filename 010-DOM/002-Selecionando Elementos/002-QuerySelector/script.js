"use strict";

const h1 = document.querySelector("h1"); // TAG HTML5
const ClassP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");

console.log(h1);
console.log(ClassP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");

setInterval(()=> {
    title.innerText = timer;
    timer++;
}, 1000)
