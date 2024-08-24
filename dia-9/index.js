let nomeUser = prompt('Insira seu nome')
let idadeUser = Number(prompt('Insira sua idade'))
let pesoUser = Number(prompt('Insira seu peso (Kg))'))
let alturaUser = Number(prompt('Insira sua altura utilizando o ponto(Mts)'))
let profUser = prompt('Insira sua profissão')

console.log('Seu nome é '+nomeUser+', está com '+idadeUser+' anos e '+pesoUser+'Kg, está trabalhando como '+profUser)

if(idadeUser > 18)console.log('Está liberado pra tomar umas geladas!')
    else console.log('Sem gelada pra você')

console.log('Idade em outras métricas:')

console.log('Em anos: '+idadeUser)
console.log('Em meses: '+(idadeUser*12))
console.log('Em semanas: '+(idadeUser*52))
console.log('Em dias: '+(idadeUser*365))

console.log('Voce nasceu em '+(2024 - idadeUser))

let imcUser = (pesoUser/(alturaUser * 2))

console.log('Seu IMC é '+ imcUser)

console.log('- Magreza, quando o resultado é menor que 18,5 KG/m2')
console.log('- Normal, quando o resultado está entre 18,5 e 24,9 KG/m2')
console.log('- Sobrepeso, quando o resultado está entre 24,9 e 30 KG/m2')
console.log('- Obesidade, quando o resultado é maior que 30 KG/m2')

/*switch(imcUser){
    case (imcUser < 18,5):
    imcUser = "Magraza"
    break
    case (imcUser > 18,5 && imcUser < 24,9):
    imcUser = "Normal"
    break
    case (imcUser > 24,9 && imcUser < 30):
    imcUser = "Sobrepeso"
    break
    case (imcUser > 30):
    imcUser = "Obesidade"
    break
}

console.log('Voce se enquadra como '+imcUser)*/
