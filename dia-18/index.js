let listaLivros = []
let listaBiblioteca = []

class Livros{
    Titulo
    Autor
    Editora
    AnoLancamento
    Disponibilidade
    constructor(titulo,autor,editora,anoLancamento,disponibilidade){
    this.Titulo = titulo
    this.Autor = autor
    this.Editora = editora
    this.AnoLancamento = anoLancamento
    this.Disponibilidade = disponibilidade
    }
}
let livros = []
livros.push(new Livros('Livro1', 'Mateus', 'editora1', 2001))
livros.push(new Livros('Livro2', 'Marcos', 'editora2', 2002))
livros.push(new Livros('Livro3', 'Lucas', 'editora3', 2003))
livros.push(new Livros('Livro4', 'Joao', 'editora4', 2004))


class Biblioteca{
    nome
    endereco
    telefone
    acervoLivros
    constructor(nome,endereco,telefone,acervoLivros){
        this.nomes
        this.endereco
        this.telefone
        this.acervoLivros
    }
}






function cadastrarBiblioteca(){
    nome = prompt('Qual o nome da biblioteca?')
    endereco = prompt('Qual o endereço da biblioteca?')
    telefone = prompt('Qual o telefone dessa biblioteca?')

    listaBiblioteca.push(nome,endereco,telefone)
    const lista = new Biblioteca(nome, endereco, telefone)
}

function cadastrarLivro(){
    let Titulo = prompt('Qual o Titulo do livro?')
    let Autor = prompt('Qual o Autor do livro?')
    let Editora = prompt('Qual a Editora do livro?')
    let AnoLancamento = prompt('Qual foi o ano de lançamento?')
    let Disponibilidade = true

    listaLivros = [Titulo, Autor, Editora, AnoLancamento, Disponibilidade]
    const lista = new Livros(listaLivros)
}