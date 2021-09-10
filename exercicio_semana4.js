/*<!---EXERCICIO: CALCULE A MEDIA DO ALUNO - XENIA BARRETO - TESTE EM NODE.JS

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)
*/

function mediaAluno (nota1, nota2, nota3, nota4){
    let media = ((nota1 + nota2 + nota3 + nota4)/4)
    if (media >= 6){
        console.log (`Parabéns, você foi aprovado! Sua média é de ${media}.`)
    }else if (media <= 5){
        console.log (`Infelizmente você foi reprovado! Sua média é de ${media}.`)
    }
}

mediaAluno (7,8,7,10)
mediaAluno (5,3,7,4)
mediaAluno (0,0,0,0)
mediaAluno (-1,5,-4,-2)



