let condicao = true
let idade 

while(condicao){
    idade = Number(prompt('insira sua idade'))
    if(idade < 18){
        console.log('voce é menor de idade')
        condicao = false
    }
}

idade = 18
console.log('acabou o while')

//dowhile faz a primeira ordem ate a condiçao se fizer verdadeira
console.log('Qual sua idade:')

do {
  idade = Number(prompt('insira sua idade'))
} while (idade > 18);
    console.log('voce é menor de idade')
    console.log('Voce tem '+idade+ ' anos')
