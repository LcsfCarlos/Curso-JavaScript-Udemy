const myArrayObj = [
    {
        nome: "Luiz",
        sobreNome: "Carlos",
    },
    {
        nome: "Nay",
        sobreNome: "Troquate",
    },
    {
        nome: "Dener",
        sobreNome: "Carlos",
    },
];

myArrayObj.forEach((item, index) => {
    if (item.nome === "Nay") {
        return console.log("O mozão ta te esperando");
    }

    console.log(index, item.nome);
});