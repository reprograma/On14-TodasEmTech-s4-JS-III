// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

var nota1 = Number(prompt("insira sua primeira nota"))
var nota2 = Number(prompt("insira sua segunda nota"))
var nota3 = Number(prompt("insira sua terceira nota"))
var nota4 = Number(prompt("insira sua quarta nota"))

function media(nota1, nota2, nota3,nota4) {
    let calculomedia = (nota1 + nota2 + nota3 + nota4)/4
     return calculomedia
}
if (media(nota1,nota2,nota3,nota4)>= 6) {
alert("aluno aprovado")

    
}else{
    alert("aluno reprovado")
}

   