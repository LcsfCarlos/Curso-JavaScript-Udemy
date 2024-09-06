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
 * Como o nome já diz, esse método deve ser utilizado quando temos a necessidade de filtrar nossa lista
 */

const filterRefri = pedidos.filter((element, index) => {
    return element.bebida === "Refrigerante";
});

console.log(1, pedidos);
console.log(2, filterRefri);