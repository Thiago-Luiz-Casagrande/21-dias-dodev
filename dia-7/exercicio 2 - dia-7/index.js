let nomeCliente = prompt('Insira seu nome')
let cpfCliente = Number(prompt('Insira seu CPF'))
let atividade = true
let transacao = 0
let dinConta = 100

while(atividade){
let valor = Number(prompt('Quanto quer movimentar?'))
let acao = Number(prompt('Escolha entre saque(1) ou deposito(2):'))

transacao ++

if(acao === 1 && (dinConta > valor)){
    dinConta = dinConta - valor
}else if(acao === 2){
    dinConta = dinConta + valor
}

console.log('Transação efetuada com sucesso!')
if(acao == 1)console.log('Tipo: Saque') 
    else  console.log('Tipo: Deposito') 
console.log('Voce tem R$'+dinConta+' Reais')
valor = 0

if(prompt('Deseja fazer outra transação?') != '') atividade = false
}