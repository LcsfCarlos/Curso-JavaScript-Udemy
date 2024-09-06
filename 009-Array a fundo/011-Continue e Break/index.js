const myArrayObj = [
    {
        nome: "Luiz",
        sobrenome: "Carlos",
    },
    {
        nome: "Nay",
        sobrenome: "Yara",
    },
    {
        nome: "José",
        sobrenome: "Carlos",
    },
    {
        nome: "José 1",
        sobrenome: "Carlos",
    },
    {
        nome: "José 2",
        sobrenome: "Carlos",
    },
    {
        nome: "José 3",
        sobrenome: "Carlos",
    },
];

for (let item of myArrayObj) {
    if (item.nome === "Nay") {
        console.log("O mozão ta te esperando");
        continue;
    }

    if (item.nome === "José 1") {
        console.log("Lembrar de enviar um SMS");
        break;
    }
    console.log(item);
}