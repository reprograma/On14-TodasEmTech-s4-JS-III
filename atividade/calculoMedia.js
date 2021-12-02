function calculaMedia(av1, av2, av3){
    let calculoDaMedia = (av1 + av2 + av3) / 3;

if(isNaN(av1) || isNaN(av2) || isNaN(av3) || av1 == undefined || av2 == undefined || av3 == undefined){
    console.log("Digite só números!");
} else if(calculoDaMedia >= 7){
    console.log("Você foi aprovado!"); 
} else { 
    console.log("Você precisará fazer recuperação!");
}
return calculoDaMedia;
}

calculaMedia(7, 5, 4);
calculaMedia(1, 2, 4);
calculaMedia(8, 9, 7);
calculaMedia('Y', 2, 9);