// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

aprovado = "Parabéns, você foi aprovado!";
reprovado = "Infelizmente, você foi reprovado. Nos vemos no próximo semestre.";
let calculoMedia = (nota1,nota2,nota3) => (nota1+nota2+nota3)/3;
let lanZhan = calculoMedia(10,10,10);
let bingHe = calculoMedia(7,5,8.8)
let huaCheng = calculoMedia(8,3,4)
let resultadoLanZhan = lanZhan < 7 ? reprovado : aprovado;
console.log(resultadoLanZhan);
let resultadobingHe = bingHe < 7 ? reprovado : aprovado;
console.log(resultadobingHe)
let resultadohuaCheng = huaCheng < 7 ? reprovado : aprovado;
console.log(resultadohuaCheng);