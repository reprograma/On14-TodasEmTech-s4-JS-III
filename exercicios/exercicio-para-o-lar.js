// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO
//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

//Como passar um Array dentro da função
// function calculadoraMedia(provas, ...notas) {
//     // arrow function: seria o mesmo que uma função com parametro total e valor que 
//     // retorna a soma dos dois parametros
//     var soma = notas.reduce((total, valor) => total + valor);
//     var mediaAtual = soma / notas.length
//     var mediaReal = soma / provas
//     console.log(mediaAtual)
//     console.log(mediaReal)
// }

//Calcula  a média de 3 notas
function calculadoraMedia(nota1, nota2, nota3) {
    var verificacaoNumero = testeEhNumero(nota1, nota2, nota3)
    var verificaPreenchimento = testePreenchimento(nota1, nota2, nota3)
    if (verificacaoNumero || verificaPreenchimento) {
      var soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
      var media = soma/3;
      var avalicaoAluno = (media > 7) ? `Aluno aprovado, com média ${media}` : "Aluno reprovado, não alcançou a média 7";
      console.log(avalicaoAluno);
    } else {
      console.log('Digite somente 3 números!');
    }
    
}


function testeEhNumero(nota1, nota2, nota3) {
    var primeiraNota = isNaN(nota1);
    var segundaNota = isNaN(nota2);
    var terceiraNota = isNaN(nota3);
    if(primeiraNota || segundaNota || terceiraNota) {
      return false;
    } else {
      return true;
    }
    
}

function testePreenchimento(nota1, nota2, nota3) {
  var primeiraNota = nota1 == undefined;
  var segundaNota = nota2 == undefined;
  var terceiraNota = nota3 == undefined;
  if(primeiraNota || segundaNota || terceiraNota) {
    return false;
  } else {
    return true;
  }
  
}

calculadoraMedia(1,1,1)

