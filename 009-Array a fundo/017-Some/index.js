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
 * O Some pergunta se apenas 1 dos valores da Array equivale a sua condição.
 */

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "Pizza";
});

console.log(existeAlimento);