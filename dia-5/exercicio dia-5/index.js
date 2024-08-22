let objetivoCliente = (prompt('Veio bastecer?'))

//let operador = (prompt(''))

let quantCombustivel

switch(objetivoCliente){
    case 'sim':
        let combustivel = (prompt('Qual combustivel?'))
            switch(combustivel){
                case 'gasolina':
                    quantCombustivel = (prompt('Quantos litros?'))
                    console.log('Ficou ' + (quantCombustivel * 5) + ' Reais')
                    break;
                case 'alcool':
                    quantCombustivel = (prompt('Quantos litros?'))
                    console.log('Ficou ' + (quantCombustivel * 3) + ' Reais')
                    break;
            }
        console.log('abastecendo '+quantCombustivel+' litros com '+ combustivel)
        break;
    case 'nao':
        console.log('Pneus calibrados com sucesso!')
        break
    }