let tipoTexto = "2";
let tipoNumber = 2;
let tipoBoolTexto = "true"
let tipoBool = true;

let meuNome = "Thiago"

let numUm = 1;
let numDois = 2;

let nomeUsuario = prompt('Insira seu nome (completo)');
let alturaUsuario = prompt('Insira sua altura (em metros)');
let pesoUsuario = prompt('Insira seu peso (Kg)');
let nascimentoUsuario = prompt('Insira a sua darta de nascimento (dd/mm/aaaa)');


console.log("Nome = " + (nomeUsuario))
console.log("Altura = " + Number(alturaUsuario))
console.log("Peso = " + Number(pesoUsuario))
console.log("Data de Nascimento = " + (nascimentoUsuario))

let imcUsuario = (pesoUsuario / alturaUsuario);

console.log("Seu IMC é " + (imcUsuario))

console.log("Cadastro feito com sucesso!")
