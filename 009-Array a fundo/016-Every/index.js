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
 * É bacana entender que, se você tem uma condição, ela vai tratar toda sua Array,
 * assim podemos verificar se eles estão ok.
 */

const temRefri = pedidos.every((element) => {
    return element.bebida === "Refrigerante";
});