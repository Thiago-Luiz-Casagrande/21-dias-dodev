let continuar = true;

class Livros {
    constructor(titulo, autor, editora, anoDeLancamento, disponibilidade) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDeLancamento = anoDeLancamento;
        this.Disponibilidade = disponibilidade;
    }
}

let livros = [];
livros.push(new Livros('livro1', 'Marcos', 'editora a', 2000, true));
livros.push(new Livros('livro2', 'Mateus', 'editora b', 2001, true));
livros.push(new Livros('livro3', 'Lucas', 'editora c', 2002, true));
livros.push(new Livros('livro4', 'João', 'editora d', 2003, true));

class Biblioteca {
    constructor(nome, endereco, telefone, acervo) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoLivros = acervo;
    }

    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo.toLowerCase() === titulo.toLowerCase()) {
                console.log(livro);
            }
        });
    }

    EmprestarLivro(titulo) {
        let emprestado = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo.toLowerCase() === titulo.toLowerCase()) {
                if (livro.Disponibilidade) {
                    livro.Disponibilidade = false;
                    emprestado = true;
                }
            }
        });
        return emprestado;
    }

    DevolverLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo.toLowerCase() === titulo.toLowerCase()) {
                livro.Disponibilidade = true;
                console.log('Livro devolvido');
            }
        });
    }
}

let biblioteca = new Biblioteca('Biblioteca DoDev', 'Rua 2', '123456', livros);

biblioteca.BuscarLivroPeloTitulo('livro2');
biblioteca.EmprestarLivro('livro1');
biblioteca.DevolverLivro('livro1');







/*let continuar = true

class Livros{
    Titulo
    Autor
    Editora
    AnoDeLancamento
    Disponibilidade
    constructor(titulo, autor, editora, anoDeLancamento, disponibilidade){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDeLancamento = anoDeLancamento
        this.Disponibilidade = disponibilidade
    }
}
let livros = []
livros.push(new Livros('livro1', 'Marcos', 'editora a',2000))
livros.push(new Livros('livro2', 'Mateus', 'editora b',2001))
livros.push(new Livros('livro3', 'Lucas', 'editora c',2002))
livros.push(new Livros('livro4', 'João', 'editora d',2003))


class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo){
        this.AcervoLivros.forEach(livro => {
            if(livro.Titulo == titulo){
                console.log(livro)
            }
        })
    }



    EmprestarLivro(titulo){
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if(livro.Titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if(emprestado){
            return true
        }else{
            return false
        }
    }

    DevolverLivro(titulo){
        livros.forEach(livro => {
            if(livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log('Livro devolvido')
            }
        })
    }
}

let biblioteca = new Biblioteca('Biblioteca DoDev', '123456', 'Rua 2', livros)

biblioteca.BuscarLivroPeloTitulo('Livro2')
biblioteca.EmprestarLivro('Livro1')
biblioteca.DevolverLivro('Livro1')*/