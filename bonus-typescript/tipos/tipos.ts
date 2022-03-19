// string
let nome: string = 'Tinowns' 
console.log(nome)
// nome = 28 // Os tipos são inferidos. Logo, mesmo que não seja colocado o tipo, o TS identifica. TS é fortemente tipada e não deixaria colocar um tipo

//numbers
let idade: number = 27
// idade = 'Yampi'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 // mesmo sendo um "erro", ele vai compilar o JS se não estiver comentado
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number //se n tivesse o tipo, seria 'any'. Ele aceitaria qualquer um.
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tupla
let endereco: [string, number, string] = ["Av. Joilson", 99, ""] // verifica os tipos, a quantidade e a ordem inserida
console.log(endereco)

endereco = ["Rua Xis", 1260, "Caixa 03"]
console.log(endereco)

// enums = valores pré-definidos; enumeração
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 13, // 2
  Roxo, // 3
  Laranja,
  Vermelho,
  Branco = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Branco)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: '2021' }
console.log(carro)