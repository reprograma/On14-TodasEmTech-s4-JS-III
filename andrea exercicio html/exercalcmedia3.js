
   var n1 = Number (prompt ("insira a primeira nota"));// as variáveis tem que estar fora da função porque a  
   var n2 = Number (prompt ("insira a segunda nota")); //função vai se utilizar dos valores dos prompts
   var n3 = Number (prompt ("insira a terceira nota"));

function mediaFinal (n1,n2,n3){ //se os prompts estivessem na função, não iriam aparecer
           if (n1 >= 0 && n2 >= 0 && n3 >=0){      //a função é calcular a media com 3 valores e preciso fornecer os n's
        alert ('notas válidas para cálculo') // primeiro eu pego os valores e então chamo a função
        var media = (n1 + n2 + n3)/3

        if (media >= 7){
            return alert (`aluno aprovade por ${media.toFixed(2)}`)
            
        }else {
            return alert (`aluno não aprovade por ${media.toFixed(2)}`)}
            
    
    }else { 
    return alert ('nota iválida para cálculo da média')}}
    
mediaFinal(n1,n2,n3) //tem que chamar a função para ativar a média



