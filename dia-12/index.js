let nomeUser = []
let senhaUser = []
let statusPrograma = 0
let i,x = 0
let objetivoUser = 0 

while(statusPrograma == 0){
    objetivoUser = parseInt(prompt('O que deseja fazer: Cadastrar(1), login(2), excluir cadastro(3) ou encerrar(4)?'))

switch(objetivoUser){
        case 1:
            cadastrar()
            break;
        case 2:
            login()
            break;
        case 3:
            excluirCadastro()
            break;
        case 4:
            encerrar()
            break;
}
}



function cadastrar(){
    nomeUser[i+1] = prompt('Insira seu nome:')
    senhaUser[i+1] = prompt('Crie uma senha:')
    i++
    statusPrograma = 1
}
function login(){
    for(x=0; x <= i; x++){
        if((prompt('Insira seu nome:') == nomeUser[x]) && (prompt('Insira sua senha:') == senhaUser[x])){
                console.log('Login concluido com sucesso!')
                statusPrograma = 1
        } else {
            console.log('Login ou senha incorreto.')
        }
    }
}
function excluirCadastro(){
    for(x = 0; x <= i; x++){
        if((prompt('Insira seu nome:') == nomeUser[x])&&(prompt('Insira sua senha:') == senhaUser[x])){
                nomeUser[x] = ''
                senhaUser[x] = ''
                console.log('Cadastro excluido com sucesso!')
                statusPrograma = 2
                for(x; x<=i; x++){
                    nomeUser[x] = nomeUser[x+1]
                    senhaUser[x] = senhaUser[x+1]
                    i--
                }
           }
        }
}
function encerrar(){
    statusPrograma = 2
}