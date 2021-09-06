//EXERCICIO 2: (UTILIZAR PARAMETRO)

//Ajude este supermercado a calcular o desconto dos produtos. A cada 3 itens comprados, o 4º item sai com 50% de desconto.

// Definir uma função que calcule 50% de desconto para qualquer produto

function calcularDesconto(valorDoProduto) {
  return valorDoProduto * 0.5;
}

// Definir lista que valores de produtos

const precoDosProdutos = [3, 6, 8, 2, 20, 30, 85, 2, 21];

// Definir função de seleção do produto a receber desconto

function media() {
  let descontoTotal = 0;

  //função que percorre a array
  for (var i = 0; i < precoDosProdutos.length; i++) {
    // logica -> o 4º produto recebe desconto , sendo assim será i (indice) + 4 , sempre somado do anterior.
    if ((i + 1) % 4 === 0) {
      descontoTotal = calcularDesconto(precoDosProdutos[i]) + descontoTotal;
    }
  }
  return descontoTotal;
}
console.log(media());
