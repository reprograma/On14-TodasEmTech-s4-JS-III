//CALCULE A MEDIA DO ALUNO
//Questão:
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado.
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos com números de 0 a 10 


function mediaAluno(nota1,nota2){
    let media = (nota1 + nota2)/2;
    if((typeof nota1 || typeof nota2) != 'number'){
        console.log('ERRO. Parâmetros devem ser números.');
    }else if (  nota1 < 0 || nota1 > 10){
        console.log('Digite números de 0 a 10');
    }else if( nota2 < 0 || nota2 > 10 ){
        console.log('Digite números de 0 a 10');
    }else if(media >= 6){
        console.log('Sua média foi ' + media + '. Parabéns foi aprovado!');
    }else if(media < 6){
        console.log('Sua média foi ' + media + '. Infelizmente você não foi aprovado.');
    }
    return media;
}

// testes
mediaAluno(4,10)
mediaAluno(-1,5)
mediaAluno(5,2)
mediaAluno(5,11)
mediaAluno(5,-11)
mediaAluno(3)
mediaAluno('a','b')
