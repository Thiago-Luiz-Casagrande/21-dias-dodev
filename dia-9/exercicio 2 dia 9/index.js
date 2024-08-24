let nomeUser
let idadeUser
let salarioInicial

function cadastro(){
  nomeUser = prompt('Insira seu nome')
  idadeUser = Number(prompt('Insira sua idade'))
  salarioInicial = parseInt(prompt('Digite seu salario atual'))
}
cadastro()
console.log('Nome: '+ nomeUser)
console.log('Idade: '+ idadeUser)
console.log('Seu salario:' + salarioInicial)


if(prompt('Todos os dados estão corretos?') != 'sim') cadastro()

let ano = 2024
let taxaCrescimento = 0.015

for(ano; ano <= 2034; ano++){
console.log('Seu salario de '+ ano+ ' é de R$' + (salarioInicial + salarioInicial*taxaCrescimento))
taxaCrescimento = taxaCrescimento*2
}
console.log(taxaCrescimento)