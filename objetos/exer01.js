const prompt = require("prompt-sync")();

let filmes = [{
    nome: 'O Exterminador do futuro', 
    duracao: '1h 47m', 
    ano: 1985,
    diretor: 'James Cameron',
    aprincipais: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Mackenzie Davis', 'Gabriel Luna', 'Natalia Reyes', 'Edward Furlong '],
    dados: function() {
        return `O filme ${this.nome}, tem duração de ${this.duracao}, o ano de lançamento do filme foi ${this.ano}\ntendo como diretor o ${this.diretor} e como atores principais no \nelenco: ${this.aprincipais}`
    }
}, {
    nome: 'A Origem',
    duracao: '2h 28m',
    ano: 2010,
    diretor: 'Christopher Nolan',
    aprincipais: ['Leonardo DiCaprio', ' Marion Cotillard', ' Elliot Page', ' Cillian Murphy', ' Tom Hardy', ' Joseph Gordon-Levitt', ' Ken Watanabe'],
    dados: function() {
    return `O filme ${this.nome}, tem duração ${this.duracao}, o ano de lançamento foi ${this.ano}\ntendo como diretor o ${this.diretor} e como atores principais no \nelenco: ${this.aprincipais}`
    }
},{
    nome: 'Esquadrão Suicida', 
    duracao: '2h 03m',
    ano: 2016,
    diretor: 'David Ayer',
    aprincipais: ['Margot Robbie', 'Will Smith ', 'Jared Leto ', 'Cara Delevingne'],
    dados: function() {
        return `O filme ${this.nome}, tem duração ${this.duracao}, o ano de lançamento foi ${this.ano}\ntendo como diretor o ${this.diretor} e como atores principais no \nelenco ${this.aprincipais}`
    }
},{
    nome: 'À Procura da Felicidade',
    duracao: '1h 57m',
    ano: 2006,
    diretor: 'Gabriele Muccino',
    aprincipais: ['Will Smith', 'Thandiwe Newton ', 'Jaden Smith ', 'Dan Castellaneta'],
    dados: function() {
        return `O filme ${this.nome}, tem duração ${this.duracao}, o ano de lançamento foi ${this.ano}\ntendo como diretor o ${this.diretor} e como atores principais no \nelenco ${this.aprincipais}`
    }
}]
for (i in filmes){
    console.log(filmes[i])
    console.log(filmes[i].dados())
}
