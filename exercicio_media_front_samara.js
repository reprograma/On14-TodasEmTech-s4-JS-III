// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO (EXERCÍCIO PARA O LAR)

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)


let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))

function calculoMedia (nota1, nota2, nota3) {
    media = ((nota1+nota2+nota3)/3).toFixed(2)
    if(media >= 7){
        alert(`Aluno aprovado! Média: ${media}`);
    }else if(media < 7 && media >= 4){
        alert(`Aluno em exame final! Média: ${media}`);
    }else{
        alert(`Aluno reprovado! Média: ${media}`);
    }
}

calculoMedia(nota1, nota2, nota3);
