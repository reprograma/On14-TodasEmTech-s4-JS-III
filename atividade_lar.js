// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

/*var nota1 = prompt("Qual foi sua nota da 1ª avaliação?");
var nota2 = prompt("E a nota da 2ª avaliação?");
var nota3 = prompt("Agora insira a última nota:");

var soma = parseFloat(nota1 + nota2 + nota3);

var media = parseFloat(soma/3);

if(media >= 7){
    alert ("Parabéns, Aluno(a)!Você está aprovado(a)! \n Sua média é: " media)
}else{
    alert ("Infelizmente você não alcançou média para aprovação... \n Sua média é: " media)
}

 var nota1 = parseFloat(prompt("Qual sua nota 1?"));
    var nota2 = parseFloat(prompt("Digite sua nota 2."));
    var nota3 = parseFloat(prompt("Agora informe sua nota 3."));*/

function media(nota1, nota2, nota3){
    var mediaDoAluno = (nota1 + nota2 + nota3)/3;

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        console.log("Digite somente números!");
    } else if(mediaDoAluno >= 7){
        console.log("Parabéns, Aluno(a)!Você está aprovado(a)!")
    } else{
         console.log("Infelizmente você não alcançou média para aprovação...")
    }
    return mediaDoAluno;
}

media(7, 8, 6);
media(7, 7, 7);