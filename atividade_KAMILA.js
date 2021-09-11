function media(nota1, nota2, nota3, nota4){
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    
    return media;

}
   
    var nota1 = Number(prompt("Insira a nota: "));
    var nota2 = Number(prompt("Insira a nota: "));
    var nota3 = Number(prompt("Insira a  nota: "));
    var nota4 = Number(prompt("Insira a nota: "));
    
if (media(nota1, nota2, nota3, nota4) >= 7) {

    alert("O aluno está aprovado!")

} else{

    alert("O aluno foi reprovado!")
}
    




