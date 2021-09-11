function alunomedia (trimestre1,trimestre2,trimestre3,trimestre4) {    
    let media = (trimestre1 + trimestre2 + trimestre3 + trimestre4) /4;

    return media;
}
 
trimestre1 = Number(prompt("Digite nota: "))
trimestre2 = Number(prompt("Digite nota: "))
trimestre3 = Number(prompt("Digite nota: "))
trimestre4 = Number(prompt("Digite nota: "))


if (alunomedia(trimestre1,trimestre2,trimestre3,trimestre4) >= 9) {
    
    alert("Parabéns, você foi aprovado!")

   }else{

    alert ("Você foi reprovado!")
}








