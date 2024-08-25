let modeloCarro = []
let precoCarro = []
let anoCarro = []
let continuar = true
let i = 0

while(continuar){
    modeloCarro[i] = prompt('Insira um modelo de carro')
    anoCarro[i] = parseInt(prompt('Insira o ano do carro'))
    precoCarro[i] = parseInt(prompt('Insira o preço do carro'))

if(prompt('Deseja cadastrar outro carro?') != '')  continuar = false
    else   i++

}

let valorCrescente = []
for(let x=0; x <= i; x++){
    console.log(modeloCarro[x]+', '+anoCarro[x]+' Valor: R$'+precoCarro[x])
  
}

for(i = 0; i < precoCarro.length - 1; i++){
    for(let j = 0; j< precoCarro.length - i - 1; j++){
        if (precoCarro[j] > precoCarro[j + 1]){

            let modeloMaiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j + 1]
            modeloCarro[j+1] = modeloMaiorValor

            let anoMaiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j + 1]
            modeloCarro[j+1] = anoMaiorValor

            let maiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j + 1]
            modeloCarro[j+1] = maiorValor
        }
    }
} 

console.log('Carros ordenados pelo preço:')
for(i = 0; i < modeloCarro.length; i++){
    console.log(modeloCarro[i] + ' - '+ anoCarro[i]+ ' - '+ precoCarro[i])
}