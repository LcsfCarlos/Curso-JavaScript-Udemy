const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: "Luiz",
        sobreNome: "Carlos",
    },
    {
        nome: "Nay",
        sobreNome: "Yara",
    },
    {
        nome: "José",
        sobreNome: "Carlos",
    },
];


// for ([inicialização]; [condição]; [expressão final])

//for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
//}

//for (let i = 0; i < myArrayObj.length; i++) {
//    console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
//}

// for OF
//for(let item of myArrayObj) {
//    console.log(item.nome, item.sobreNome);
//}

// for IN
const obj = { nome: "Luiz", sobreNome: "Carlos"};

for (let item in obj) {
    console.log(item);
}