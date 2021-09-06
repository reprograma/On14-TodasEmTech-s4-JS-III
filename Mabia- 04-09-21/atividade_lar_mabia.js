// EXERCICIO: (UTILIZAR PARAMETRO)
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO)
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

let n1 = 3;
let n2 = 6;
let n3 = 9;
let media;

function calcular(n1, n2, n3) {
  media = ((n1 + n2 + n3) / 3).toFixed(2);
  if (media >= 6) {
    return console.log("Parabéns! Você foi aprovada(o)! Nota final: " + media);
  } else {
    return console.log("Que pena! Você foi reprovada(o)! Nota final: " + media);
  }
}
calcular(n1, n2, n3);

/* Utilizando Node.js */