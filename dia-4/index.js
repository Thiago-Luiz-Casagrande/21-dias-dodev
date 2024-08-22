let fome = prompt('Está com fome?')
let dinheiro = prompt('Tem dinheiro?')
let restaurante = prompt('O restaurante está aberto?')

if(fome == "nao" || dinheiro == "nao"){
  console.log('Hoje a jante é em casa')
}else if(fome == "sim" && dinheiro == "sim" && restaurante == "fechado"){
    console.log('Peça um delivery!')
}else if(fome == "sim" && dinheiro =="sim" && restaurante == aberto){
    console.log('Hoje o jantar vai ser no restaurante preferido!')
}