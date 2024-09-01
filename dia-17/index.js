let hoteis = []
let nomeUser = []
let senhaUser = []
let reservas = []

let novoHotel = []
let nome
let senha
let diaEntrada, diaSaida, n = 0

function cadastrarHotel(){
    nomeHotel = prompt('Nome do hotel:')
    categoriaHotel = prompt('Categoria do hotel:')
    enderecoHotel = prompt('Endereço do hotel:')
    telefoneHotel = prompt('Telefone do hotel:')
    idHotel++

    novoHotel = [nomeHotel, idHotel, categoriaHotel, enderecoHotel, telefoneHotel]
    hoteis.push(novoHotel)
}
hoteis.push(['Transilvania', '2607', 'Tematico', 'Av Vampiro', 255745565234])

function novoUser(){
    nome = prompt('Nome do usuário:')
    senha = prompt('Senha do usuário')
    if(!nomeUser.includes(nome)){
        nomeUser.push(nome) 
        senhaUser.push(senha)
    }
}
nomeUser.push('Thiago')
senhaUser.push('1234')

function cadastrarReserva(){
    nome = prompt('Nome do Responsavel')
    if(nomeUser.includes(nome)){
        n = nomeUser.indexOf(nome)
        hotel = prompt('Qual o nome do hotel?')
        for(i = 0; i < hoteis.length; i++){
            if(hotel == hoteis[i][0]){    
                if(parseInt(prompt('Senha do responsavel:')) == senhaUser[n]){
                    diaEntrada = parseInt(prompt('Dia de entrada:'))
                    diaSaida = parseInt(prompt('Dia de saida:'))
                }
            }
        }
    }
    let idReserva = diaEntrada*diaSaida
    console.log('Este é o ID de sua Reseva: '+idReserva)
    novaReserva = [idReserva, nome, hotel, diaEntrada, diaSaida]
    reservas.push(novaReserva)
    }
reservas.push([134, 'Thiago', 'Transilvania', 5, 9])
reservas.push([135, 'Mateus', 'Transilvania', 7, 10])
reservas.push([136, 'Marcos', 'Transilvania', 2, 11])

function viewReserva(idReserva){
    let i = reservas.indexOf(idReserva)
    for(i = 0; i < reservas.length; i++){
        if(idReserva == reservas[i][0]){
        console.log('-----Reserva----')
        console.log('ID da reserva: '+ reservas[i][0])
        console.log('Nome do responsavel: '+ reservas[i][1])
        console.log('Data: Entrada dia '+reservas[i][3]+ ' e saida dia '+reservas[i][4])
    }}
}

function viewHotel(nomeHotel){
    for(let i = 0;i < hoteis.length; i++){
        if(nomeHotel == hoteis[i][0]){
            console.log('Hotel -- ' +hoteis[i][0])
            console.log('Reservas:')
            for(i = 0; i < hoteis.length+2; i++){
                if(nomeHotel == reservas[i][2]){
                    console.log('ID: '+reservas[i][0]+'    Dia de Entrada: '+reservas[i][3] +'/ Dia de Saida: '+reservas[i][4])
                }
            }
        }
    }
}

function viewCategoria(categoriaHotel){
    for(i = 0; i < hoteis.length; i++){
        if(categoriaHotel == hoteis[i][2]){
            for(let a = 0; a < reservas.length; a++){
                if(reservas[a][2] == hoteis[i][0]){
                    console.log('ID: '+reservas[a][0]+' Responsavel: '+reservas[a][1]+' Entrada:'+reservas[a][3]+' / Saida:'+reservas[a][4])
                }
            }
        }
    }
}