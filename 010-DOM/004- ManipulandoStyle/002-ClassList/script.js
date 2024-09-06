"use strict";

const h1 = document.querySelector("h1");
h1.classList.add('active', 'teste1', 'teste2');
h1.classList.add('teste2', 'teste1');
h1.classList.toggle('teste2');

if(h1.classList.contains("active")){
    //alert("Existe a classe active");
}

console.log(h1);