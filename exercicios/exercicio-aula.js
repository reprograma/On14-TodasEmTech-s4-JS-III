//EXERCICIO 2: (UTILIZAR PARAMETRO) 

//Ajude este supermercado a calcular o desconto dos produtos. A cada 3 itens comprados,
// o 4º item sai com 50% de desconto.

var cliente = {
    nome: "Josevaldo",
    limite: 15_000,
    primeiraCompra: false,
    anoNascimento: 1994,
    atendente: "Carla"

}
console.log(cliente);

cliente.primeiraCompra = true;
console.log(cliente);

delete cliente.anoNascimento;
console.log(cliente);