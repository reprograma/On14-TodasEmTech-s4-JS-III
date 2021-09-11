
function mediaFinal (n1,n2,n3){
    //var nota1 = Number(prompt('Insira a primeira nota'))//lacunas para as notas
    if (n1 >= 0 && n2 >= 0 && n3 >=0){
        console.log('notas válidas para cálculo')
        var media = (n1 + n2 + n3)/3

        if (media > 7){
            return console.log (`aluno aprovado por ${media.toFixed(2)}`)
            
        }else {
            return console.log (`aluno não aprovado por ${media.toFixed(2)}`)}
            
    
    }else { 
    return console.log ('nota iválida')};
   
    
        
} 
//exemplos
mediaFinal(10,8,7)
//mediaFinal(4,6,3)
//mediaFinal(1,3,2)

