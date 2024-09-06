const pedidos = [
    {
        id: 420,
        nome: "Luiz",
        alimento: "Suco de Limão",
        bebida: "Suco de limão",
        preco: 100,
    },
    {
        id: 152,
        nome: "Dener",
        alimento: "Sandubao Vegano",
        bebida: "Suco de laranja",
        preco: 59,
    },
    {
        id: 29,
        nome: "Marcio",
        alimento: "Coxinha",
        bebida: "Suco de Uva",
        preco: 33,
    },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 79,
    },
    {
        id: 55,
        nome: "José",
        alimento: "Pizza",
        bebida: "Refrigerante",
        preco: 47,
    },
];

/**
 * A ideia dele é pegar todos os valores de um Array e condensa-los em um só.
 */

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancete);