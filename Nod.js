// Calcular média da aluna Estefanya - Nodes.js
// Questão: (UTILIZAR PARAMETRO)
// ETAPA 1 = Elaborar um programa que calcule a média do aluno.
// ETAPA 2 = Informar se ele foi aprovado (utilizar a estrutura condicional)
// ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar retornar)

//Entrada de dados

console.log("Programa que calcula média de aluna");

av1 = 10;
av2 = 9;
av3 = 8;
av4 = 7;

Media = (av1 + av2 + av3 + av4) / 4;
console.log("Média: " + Media);

if (Media < 6) {
  console.log("Você foi reprovado, tente novamente! Sua média foi " + Media);
} else {
  console.log("Parabéns, você foi aprovado! Sua média é " + Media);
}

