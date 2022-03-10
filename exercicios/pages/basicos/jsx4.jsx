// Referências JS em HTML, usa-se {coisas de JS}
export default function jsx4() {
  const subtitulo = "A Gata está no Javascript!"
  const trechoh3 = <h3>{3 * 2}</h3>
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      {trechoh3}
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(5, 1, 10)}</h5>
    </div>
  )
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim"
  } else {
    return "Não"
  }
}