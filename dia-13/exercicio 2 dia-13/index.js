class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    
}

nome = prompt('Qual a marca do seu carro?')
potencia = parseInt(prompt('Qual a potencia do seu carro?(HP)'))
velocidadeMaxima = parseInt(prompt('Qual a velocidade máxima que seu carro chega(Km/H)?'))
aceleracao = parseInt(prompt('Quanto tempo leva seu carro chegar a 100 km/H?(segundos)'))

let cadastroCarro = []
cadastroCarro = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

function calcular(){
    let distancia = parseInt(prompt('Escolha uma distancia em metros'))
    let resultado = (distancia / (velocidadeMaxima / aceleracao))
    console.log('Seu carro percorreria '+distancia+ ' metros em '+resultado+'segundos')
}