"use strict";

const container = document.querySelector(".container");

console.log(container.children); //HTML Collection
console.log(container.childNodes); //NodeList

const children = Array.from(container.children);

//console.log(children);

children.forEach((res)=> {
    console.log(res);
});