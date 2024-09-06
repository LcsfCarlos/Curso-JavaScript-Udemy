const num = [1, 2, 3, 4, 5];

console.log(...num);
console.log(num[0], num[1]);
// console.log(Math.max(1, 2, 3, 4, 5));

console.log(Math.max(...num));

//Spread Operator pega todos os numeros de dentro do array de forma automatica e imprime no console