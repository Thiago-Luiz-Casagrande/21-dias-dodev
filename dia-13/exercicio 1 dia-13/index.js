let continuar = true


class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, Ssd){
        this.Tipo = Tipo
        this.Processador = Processador
        this.Video = Video
        this.MemoriaRam = MemoriaRam
        this.Armazenamento = Armazenamento
        this.Ssd = Ssd
    }
    descricao(){
        console.log('Meu '+this.Tipo+'tem um precessador '+this.Processador+ ', uma placa de Video '+this.Video+ ', um '+this.Ssd+' uma capacidade de Armazenamento de '+this.Armazenamento+ ' e '+this.MemoriaRam+ ' de memoria RAM.')
    }
    exibirInformacoes(){
        console.log('Informações do computador:')
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Video: ${this.Video}`)
        console.log(`Armazenamento: ${this.Armazenamento} GB`)
        console.log(`Memoria RAM: ${this.MemoriaRam} GB`)
        console.log(`Tem SSD: ${this.Ssd}`)
    }
}

const meuComputador = new Computador("notebook", "Celeron", "Dedicado", 256, 8, false)

while(continuar){
    let Tipo = prompt('Insira o Tipo de sua maquina (computador/notebook)')
    let Processador = prompt('Insira seu Processador (modelo)')
    let Video = prompt('Insira sua placa de Video (Integrado/dedicado)')
    let Armazenamento = prompt('Insira a capacidade de seu Armazenamento (GB)')
    let MemoriaRam = prompt('Insira a capacidade de seu processamento (GB)')
    let Ssd = prompt('Tem SSD? (True/False)')
    
    continuar = false
}

