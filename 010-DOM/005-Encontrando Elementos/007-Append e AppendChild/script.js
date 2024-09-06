"use strict";

const container = document.querySelector(".container");

// container.append("<p>Olá Luiz</p>");

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Luiz";

container.appendChild(newDiv);