//ETAPA1: Crie um objeto com 5 caracteristicas
//ETAPA2: Altere a 3ª caracteristica deste objeto
//ETAPA3: Delete a 4ª caracterisca deste objeto
let caracteristicas = {
  cabelo: "crespo",

  olhos: "pretos",

  tamanho: "1,67cm",

  estadoCivil: "juntada",

  religiao: "wincca",
};
console.log(caracteristicas);

caracteristicas.tamanho = " 1,7 cm";

console.log(caracteristicas);

delete caracteristicas.estadoCivil;

console.log(caracteristicas);
