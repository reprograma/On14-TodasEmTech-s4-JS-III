function MediaDoAluno (){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1 + nota2) /2;
    if (media  >=7){
        alert ('Que Noticia Boa! Você Foi Aprovado!')
    
    } else {
        alert ('Que pena! Você foi Reprovado')
    
    }  
}
