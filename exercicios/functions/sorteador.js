export function sorteador(qtd = 6) {
  const numeros = []
  let random = 0

  if(qtd < 6 || qtd > 60) {
    return(
      <h1>Quantidade inválida!</h1>
    )
  }

  for (let i = 0; i < qtd; i++) {
    random = Math.floor(Math.random() * 60 + 1)

    while (numeros.includes(random)) {
       random = Math.floor(Math.random() * 60 + 1)
    }

    numeros.push(random)
  }

  return numeros.sort((n1, n2) => n1-n2)
}