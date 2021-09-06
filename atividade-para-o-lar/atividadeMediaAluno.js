//EXERCICIO: (UTILIZAR PARAMETRO)
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO)
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.

//Criar arrays, com notas do aluno.

let paula = [8, 9, 4];
let fabio = [7, 6, 9];
let marvim = [3, 4, 2];
let collyn = [7, 5, 4];

// função somar notas

function somaDasNotas(aluno, nota) {
  soma = aluno[nota] + soma;
}
// função media
function media(estudante) {
  //percorrer a array
  soma = 0;
  for (let i = 0; i < estudante.length; i++) {
    somaDasNotas(estudante, i);
  }
  mediaAluno = soma / estudante.length;
  return mediaAluno;
}

//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

function aprovarAluno(aluno) {
  console.log(media(aluno));

  if (media(aluno) > 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(aprovarAluno(marvim));
