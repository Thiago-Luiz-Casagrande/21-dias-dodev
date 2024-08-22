let priDigito = Number(prompt('Insira o primeiro dígito'))
let segDigito = Number(prompt('Insira o segundo dígito'))
let operador = (prompt('Insira o operador lógico'))

let result

switch(operador){
    case '+':
        result = priDigito + segDigito
        console.log('O resultado de ' + priDigito + ' ' + operador + ' ' + segDigito + ' é ' + result)
        break;
    case '-':
        resultado = priDigito - segDigito
        console.log('O resultado de ' + priDigito + ' ' + operador + ' ' + segDigito + ' é ' + result)
        break;
    case '*':
        resultado = priDigito * segDigito
        console.log('O resultado de ' + priDigito + ' ' + operador + ' ' + segDigito + ' é ' + result)
        break;
    case '/':
        resultado = priDigito / segDigito
        console.log('O resultado de ' + priDigito + ' ' + operador + ' ' + segDigito + ' é ' + result)
        break;
    default:
        console.log('Deafult')    
        break;
}