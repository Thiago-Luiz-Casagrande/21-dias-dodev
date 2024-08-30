salarioAtualizado = 0
porcentagem = 0
continuar = true

function cadastro(continuar){

    let nome = prompt('Insira seu nome:')
    let salario = parseInt(prompt('Insira seu salario atual:'))

    aumento()
    function aumento(){
    
    if(salario <= 1500){
        salarioAtualizado = salario*1.20
        porcentagem = 20
    }else if(salario <= 2000){
        salarioAtualizado = salario*1.15
        porcentagem = 15
    }else if(salario <= 3000){
        salarioAtualizado = salario*1.10
        porcentagem = 10
    }else if(salario > 3000){
        salarioAtualizado = salario*1.05
        porcentagem = 5
    }

    }

    console.log(`nome: ${nome}, ganhava R$${salario} e teve ${porcentagem}% de aumento, com um salario atual de R$${salarioAtualizado}`)

    if(prompt('deseja adicionar de outro(a) colaborador?') == 'sim')cadastro()
    else{
        continuar = false 
        console.log('Programa encerrado com sucesso!')
        } 

}

