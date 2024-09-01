let nomeUser = []
let senhaUser = []
let continuar = true
let objetivo

objetivo = parseInt(prompt('O que deseja fazer: Cadastrar(1), Login(2), Excluir(3)'))

switch(objetivo){
    case 1:
        cadastrar()
    break;
    case 2:
        validacao()
    break;
    case 3:
        exclusao()
    break; 
}

function cadastrar(){
    while(continuar){
    nomeUser.push(prompt('Insira seu nome:'))
    senhaUser.push(parseInt(prompt('Insira sua senha:')))

    
    if(prompt('Cadastrar um novo usuario?') == 'sim'){}
        else {continuar = false}
    }
}


function validacao(){
    nome = prompt('Insira seu nome:')
    let i = nomeUser.indexOf(nome)
    senha = prompt('Insira sua senha:')
    if(senha == senhaUser[i])console.log('Login feito com sucesso!')
        else{   console.log('Seu login ou senha estão incorretos')}
}

function exclusao(){
    nome = prompt('Insira seu nome:')
    let i = nomeUser.indexOf(nome)
    senha = prompt('Insira sua senha:')
    if(senha == senhaUser[i]){
        nomeUser.splice(i,1)
        senhaUser.splice(i,1)
        console.log('Essa conta foi excluida com sucesso!')
    }else{   
        console.log('Seu login ou senha estão incorretos')}
}