import Fila from "../components/Fila"

export default function Tabuleiro(){
  const tabuleiro = []
  let c = false

  for (let i = 1; i <= 8; i++) {
    tabuleiro.push(<div style={{}}>
        {<Fila preto={c}/>}
      </div>)
    if (c == true) {
      c = false
    } else {
      c = true
    }
  }

  return tabuleiro
}