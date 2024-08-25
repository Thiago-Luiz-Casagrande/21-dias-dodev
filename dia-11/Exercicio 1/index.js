let continuar = true
let contador = 0
let alunos = []
let notas = []

while(continuar){
    let nomeAluno = prompt('Insira o nome do aluno '+(contador+1))
    let notaAluno = parseInt(prompt('Insira a nota do aluno'))
    
    alunos[contador] = nomeAluno
    notas[contador] = notaAluno
    contador++

    if(prompt('Deseja adicionar mais?') != 's')continuar = false
}
console.log('Alunos  -  Notas')

for(let i=0; i < alunos.length; i++){
    console.log(alunos[i] + "  -  "+notas[i])
}

let somaNotas = 0
for(i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas/alunos.length
console.log('A soma das notas foi: '+somaNotas)
console.log('A media geral da turma foi: '+media)