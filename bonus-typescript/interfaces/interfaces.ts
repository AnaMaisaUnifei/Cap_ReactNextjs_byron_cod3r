interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome)
}

function mudarNome( pessoa: Humano ){
  pessoa.nome = 'Annalise'
}

const pessoa: Humano = {
  nome: 'Bárbara',
  idade: 19,
  saudar(sobrenome: string){
    console.log('Olá, meu nome é ' + 
    this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Eliza', idade: 41, altura: 1.85})
pessoa.saudar('Keating')

// Usando Classes...

class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string){
    console.log('Olá, meu nome é ' + 
    this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Miss'
saudarComOla(meuCliente)
meuCliente.saudar('Fortune')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  // Outras formas:
  // base ** exp
  // Array(exp).fill(base).reduce((t, a) => t * a)
  return Math.pow(base, exp)
}

console.log(potencia(2, 6))