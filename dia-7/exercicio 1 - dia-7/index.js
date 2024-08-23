let quantHomens = 0
let quantMulheres = 0
let quantIndefinido = 0
let maiorNota = 0
let mulheresAcimaMedia = 0
let mediaGeral = 0
let somaNotas = 0
let atividade = true

while(atividade){
let notaAluno = Number(prompt('Insira a nota do aluno'))
let sexoAluno = prompt('Escreva H pra homem e M pra mulher')

somaNotas = somaNotas + notaAluno

    if(sexoAluno == 'H'){
        quantHomens ++

        if(notaAluno < maiorNota) maiorNota = notaAluno;
    }else if(sexoAluno == 'M'){
        quantMulheres ++
        
        if(notaAluno >= 7) mulheresAcimaMedia ++
    }else{
        quantIndefinido ++
    }

mediaGeral = somaNotas / (quantHomens+quantMulheres+quantIndefinido)


    if(prompt('Deseja adicionar mais uma nota?') != '') atividade = false
}
console.log('Media geral dos alunos: ' + mediaGeral)
console.log('Quantidade de homens: ' + quantHomens)
console.log('Quantidade de mulheres: ' + quantMulheres)
console.log('Quantidade de Indefinido: ' + quantIndefinido)
console.log('Maior nota Masc: ' + maiorNota)
console.log('Quantidade de mulheres acima da media: ' + mulheresAcimaMedia)
