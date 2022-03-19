"use strict";
// string
let nome = 'Tinowns';
console.log(nome);
// nome = 28 // Os tipos são inferidos. Logo, mesmo que não seja colocado o tipo, o TS identifica. TS é fortemente tipada e não deixaria colocar um tipo
//numbers
let idade = 27;
// idade = 'Yampi'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1 // mesmo sendo um "erro", ele vai compilar o JS se não estiver comentado
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade; //se n tivesse o tipo, seria 'any'. Ele aceitaria qualquer um.
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tupla
let endereco = ["Av. Joilson", 99, ""]; // verifica os tipos, a quantidade e a ordem inserida
console.log(endereco);
endereco = ["Rua Xis", 1260, "Caixa 03"];
console.log(endereco);
// enums = valores pré-definidos; enumeração
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 13] = "Azul";
    Cor[Cor["Roxo"] = 14] = "Roxo";
    Cor[Cor["Laranja"] = 15] = "Laranja";
    Cor[Cor["Vermelho"] = 16] = "Vermelho";
    Cor[Cor["Branco"] = 100] = "Branco";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Branco);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2021' };
console.log(carro);
