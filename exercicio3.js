let livros = [
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        editora: "Editora Nova Fronteira",
        ano: 1899,
        sinopse: "Bentinho, o narrador, conta a história de sua vida e seu relacionamento com Capitu, sua esposa, abordando questões como ciúmes e traição.",
        paginas: 368,
        genero: ["romance", "literatura clássica"],
        preco: 49.90
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        editora: "Companhia das Letras",
        ano: 1949,
        sinopse: "Em um regime totalitário, Winston Smith luta para manter sua liberdade e pensamentos individuais contra o Partido e sua figura, o Grande Irmão.",
        paginas: 336,
        genero: ["distopia", "ficção científica"],
        preco: 39.90
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        editora: "Rocco",
        ano: 1997,
        sinopse: "Harry Potter, um garoto que descobre ser bruxo, entra na Escola de Magia de Hogwarts e embarca em uma jornada de aventura e mistério.",
        paginas: 256,
        genero: ["fantasia", "aventura"],
        preco: 59.90
    },
    {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        editora: "Rocco",
        ano: 1988,
        sinopse: "A história de Santiago, um jovem pastor que parte em uma jornada para realizar seu sonho de encontrar um tesouro escondido no Egito.",
        paginas: 208,
        genero: ["autoajuda", "ficção"],
        preco: 29.90
    },
    {
        titulo: "A Menina que Roubava Livros",
        autor: "Markus Zusak",
        editora: "Intrínseca",
        ano: 2005,
        sinopse: "Durante a Segunda Guerra Mundial, Liesel Meminger, uma jovem garota, encontra consolo nos livros enquanto vive com uma família adotiva na Alemanha nazista.",
        paginas: 552,
        genero: ["drama", "historical fiction"],
        preco: 44.90
    }
]



function mostraLivros(){
    livros.forEach((livro) =>{
     console.log(livro.titulo + " - " +
                  livro.autor +"Ano:" +
                  livro.autor +" Páginas:" +
                  livro.paginas + "Preço: R$ "+
                  livro.preco)
     })
}
mostraLivros();
    
  