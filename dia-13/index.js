class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log('Ola, meu nome é '+this.nome+' minha idade é '+this.idade+', minha área de atuação é '+this.areaAtuacao)
    }
}

let alunoUm = new Aluno('Thiago', 20)

console.log('------------Cadastro de alunos------------')
let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno')
    let idade = parseInt(prompt('Insira a idade do aluno'))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt('Insira a area de atuação');
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno
    let desejaContinuar = prompt('Deseja continuar?')
    if(desejaContinuar != "1"){
        continuar = false
    }else{
        indexDeAluno++
    }
}