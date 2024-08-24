let numeros = []
let decrescente = []
let i

for (i = 0; i < 10; i++){
numeros[i] = parseInt(prompt('escreva um numero de index'))

}

console.log(numeros)

for(let ordem = 0; ordem < 10; ordem++){
decrescente[ordem] = numeros[i]
i--
}
console.log(decrescente)

let quantNumber = Number(prompt('Quantos numeros deseja visualizar?'))

for(i = 0; i < quantNumber; i++){
    console.log('Numero '+(i+1)+' ' + numeros[i])
}

console.log('Numeros de Fibonacci')

let numero = parseInt(prompt('Digite um numero inteiro e positivo'))
let fibonacci =[]
fibonacci[0] = numero - 1
fibonacci[1] = numero

for(i = 2; i < 10; i++){
     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]

}
console.log('Fibonacci: ' + fibonacci)