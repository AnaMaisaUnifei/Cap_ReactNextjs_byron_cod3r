export default function Repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Yups',
    'Yampi',
    'Tinowns',
    'Juliera',
    'Miss',
  ]

  function renderLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>) // Percorre o array pegando o conteúdo e o indice
  }

  return (
    <ul>
      {renderLista()}
    </ul>
  )
}

// Primeira forma de fazer a função
// function renderLista() {
//   const itens = []

//   for (let i = 0; i < listaAprovados.length; i++) {
//     itens.push(<li key={i}>{listaAprovados[i]}</li>)
//   }

//   return itens
// }