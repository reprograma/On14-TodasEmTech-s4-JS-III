
var joao = 123456
function verificarSenha (){

if(joao == 5555){
    console.log('João, sua senha esta incorreta')
}else{
    console.log('Bem vindo ao site')
}

}

verificarSenha()


var usuario ='Amanda';

function olaUsuario(){

console.log('Ola Usuário')

}

if(usuario == 'Amanda'){
    olaUsuario()
}else{

    console.log('Infelizmente você não é a Amanda, e eu não vou te dar oi')
}

var numero = 85;
var quantosPorCento = 0.13;

function porcentagem(){

    var calculo = numero * quantosPorCento;
    console.log(calculo)

}

porcentagem()

var senhaJoao = 123456; //SENHA DO BANCO DE DADOS = SENHA CORRETA

function verificarSenha (senha){
console.log(senha)
}
verificarSenha(10)

var senha = 5
console.log(senha)


function soma(num1,num2){
    console.log(num1 * num2)



}

soma(5, 80)

var num = Number(prompt('Insira um numero'));
function calcularTabuada(tabuada){

    console.log(tabuada * 1)
    console.log(tabuada * 2)
    console.log(tabuada * 3)
    console.log(tabuada * 4)
    console.log(tabuada * 5)
    console.log(tabuada * 6)
    console.log(tabuada * 7)
    console.log(tabuada * 8)
    console.log(tabuada * 9)
    console.log(tabuada * 10)
   



}
calcularTabuada(num)


var nomeUsuarioPAGINALOGIN = prompt('Insira seu nome');
var nomeUsuarioPAGINAHOME = prompt('Insira seu nome');
var nomeUsuarioPAGINAJOGUINHO = prompt('Insira');

function oi(nomeDoUsuário){
console.log('OLA' + nomeDoUsuário)


}

oi(nomeUsuarioPAGINALOGIN);
oi(nomeUsuarioPAGINAHOME);
oi(nomeUsuarioPAGINAJOGUINHO);
oi('OI SEJA BEM VINDO AO')


let produto1 = 10
let produto2 = 4
let produto3 = 20
let produto4 = 10
let produtos =  produto1 + produto2 + produto3
let produtosdesconto = produto1 + produto2 + produto3 + (produto4*0.50)
function supermercado (quantidade) {
 if(quantidade==4) {
 console.log (produtosdesconto)
} else {
    return produtos
}
}

supermercado (4)
 
var produto1 = 3;
var produto2 = 7;
var produto3 = 5;
var produto4 = 10 * 50 / 100;

function calculo(produto1, produto2, produto3, produto4){

console.log('produto1 + produto2 + produto3 + produto4');

}

var pessoa = { 
    nome: 'Andrea',
    altura: 1.71,
    roupa: 'azul',
    óculos: 'sim',
    cabelo: 'médio',
    
}

delete pessoa.cabelo //DELETO
console.log(pessoa) //IMPRIMO
 pessoa.óculos = 'não'//ALTERO
