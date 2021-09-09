function media(nota,nota2){

    var nota = Number(prompt("Insira a primeira nota: "));
    var nota2 = Number(prompt("Insira a segunda nota:"));
    var resultado =(nota*0.5 + nota2 *0.5).toFixed(2);
   if (resultado >=7)
   {
       alert("Aprovado")
   }else{
               return media(nota, nota2)
           }
       }
   media()
   
