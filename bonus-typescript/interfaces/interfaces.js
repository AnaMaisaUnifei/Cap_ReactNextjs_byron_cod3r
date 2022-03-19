"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Annalise';
}
const pessoa = {
    nome: 'Bárbara',
    idade: 19,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' +
            this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Eliza', idade: 41, altura: 1.85})
pessoa.saudar('Keating');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' +
            this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Miss';
saudarComOla(meuCliente);
meuCliente.saudar('Fortune');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Outras formas:
    // base ** exp
    // Array(exp).fill(base).reduce((t, a) => t * a)
    return Math.pow(base, exp);
};
console.log(potencia(2, 6));
