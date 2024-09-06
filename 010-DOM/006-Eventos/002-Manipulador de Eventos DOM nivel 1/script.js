"use strict";

const btn = document.querySelector("button");

btn.onclick = function alerOne(){
    alert(123);
};

btn.onclick = function alerTwo(){
    alert(456);
};

const btn2 = document.querySelector(".button2");

btn2.onclick = function aler2(){
    alert("Luiz Carlos");
};