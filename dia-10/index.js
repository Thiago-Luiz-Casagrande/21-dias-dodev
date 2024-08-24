let nomes = []
let continuar = true
let posicaoArray = 0

while(continuar){
    let nomeInserido = prompt('insira um nome')
    nomes[posicaoArray] = nomeInserido

    let desejaContinuar = prompt('Deseja contiuar?')
    if(desejaContinuar != '') continuar = false 
    posicaoArray++
}