const numero1 = 7; // essa linha guarda o primeiro numero da media
const numero2 = 9;
const media = (numero1+numero2)/2;

const nomeDoAluno1 = "yasmim";

console.log("a media entre os numeros",media);
console.log("O tipo de numero é",typeof numero1);

if(media >6){
    console.log(`parabens,a nota foi ${media}`)
}
else{
    console.log(`vai estudar, sua nota ${media} foi abaixo do esperado`)
}