const pedidos = [
    {
        id: 420,
        nome: "Luiz",
        alimento: "Sãndubao de Bacon",
        bebida: "Suco de limão",
    },
    {
        id: 420,
        nome: "Nayady",
        alimento: "Sãndubao Vegano",
        bebida: "Suco de Laranja",
    },
    { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
        id: 420,
        nome: "Isabel",
        alimento: "Sãndubao de Picanha",
        bebida: "Refrigerante",
    },
    { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante" },
];

/**
 * Nome bem subjetivo também, mas ele procura e te retorna 1 o primeiro valor encontrado da array.
 */

const findId = pedidos.find((element) => {
    return element.id === 29;
});

console.log(findId);