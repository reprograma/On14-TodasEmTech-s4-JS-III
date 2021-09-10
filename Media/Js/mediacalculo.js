function media(av1, av2, av3) {
    let somamedia = (av1 + av2 + av3) / 3;
    return somamedia;
}

av1 = parseFloat(prompt("Digite sua primeira média: "));
av2 = parseFloat(prompt("Digite sua segunda média: "));
av3 = parseFloat(prompt("Digite sua terceira média: "));

if(isNaN(av1) || isNaN(av2) || isNaN(av3) || av1 == undefined || av2 == undefined || av3 == undefined){
    alert("Digite só números!")
} else if(media(av1, av2, av3) >= 7){
    alert("Você foi aprovado!") 
} else { 
    alert("Você precisará fazer recuperação!")
}

   