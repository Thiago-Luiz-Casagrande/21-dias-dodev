continuar = true

class Corrida{
    nome
    tipo
    distanciaPista
    participantes
    constructor(nome, tipo, distanciaPista, participantes){
        this.nome = nome
        this.tipo = tipo
        this.distanciaPista = distanciaPista
        this.participantes = participantes
    }
}
let nome
let tipo
let distanciaPista
let vencedor
let participantes = []
let corrida = []
let nomeVencedor
let carroMaisRapido = 0

while(continuar){
    nome = prompt('Nome da corrida')
    tipo = prompt('Tipo da corrida')
    distanciaPista = prompt('Distancia da corrida')

 
corrida = new Corrida(nome, tipo, distanciaPista, participantes, vencedor) 
continuar = false
}

class Carro{
    nomeCarro
    potenciaCarro
    velocidadeMaximaCarro
    aceleracaoCarro
    constructor(nomeCarro, potenciaCarro, velocidadeMaximaCarro, aceleracaoCarro){
        this.nomeCarro = nomeCarro
        this.potenciaCarro = potenciaCarro
        this.velocidadeMaximaCarro = velocidadeMaximaCarro
        this.aceleracaoCarro = aceleracaoCarro
    }
    
}
let adicionarParticipante = true
while(adicionarParticipante){
    if(prompt('Deseja adicionar um participante?') == 'sim'){
        console.log('-----Participante-----')
        nomeCarro = prompt('Qual a marca do seu carro?')
        potenciaCarro = parseInt(prompt('Qual a potencia do seu carro?(HP)'))
        velocidadeMaximaCarro = parseInt(prompt('Qual a velocidade máxima que seu carro chega(Km/H)?'))
        aceleracaoCarro = parseInt(prompt('Quanto tempo leva seu carro chegar a 100 km/H?(segundos)'))
    
        if(velocidadeMaximaCarro >= carroMaisRapido){
            carroMaisRapido = velocidadeMaximaCarro
            nomeVencedor = nomeCarro
        }

        participantes = new Carro(nomeCarro, potenciaCarro, velocidadeMaximaCarro, aceleracaoCarro)

        console.log('Carro: '+nomeCarro)
        console.log('Potencia: '+potenciaCarro)
        console.log('Velocidade Maxima: '+velocidadeMaximaCarro)
        console.log('Aceleração: '+aceleracaoCarro)
    }else adicionarParticipante = false
}

console.log('O vencedor é a equipe '+nomeVencedor+'!')

function calcular(){
    let distancia = parseInt(prompt('Escolha uma distancia em metros'))
    let resultado = (distancia / (velocidadeMaxima / aceleracao))
    console.log('Seu carro percorreria '+distancia+ ' metros em '+resultado+'segundos')
}
