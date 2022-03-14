import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { sorteador } from "../../functions/sorteador"

export default function megasena() {
  const [qtd, setQtd] = useState(6)
  const [valores, setValores] = useState([])


  function apresentarNumerosSorteados() {
    const apresentar = []
    
    for (let i = 0; i < valores.length; i++) {
      apresentar.push(<NumeroDisplay key={valores[i]} numero={valores[i]}/>)
    }
    
    return apresentar
  }

  return (
    <div style={ {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    } }>
      <h1>Mega-Sena</h1>
      <div style={{ flexWrap: "wrap", display: "flex"}}>
        {apresentarNumerosSorteados()}
      </div>
      <div>
        <hr />
        <input type="number" value={qtd} onChange={ev => setQtd(ev.target.value)}/>
        <button onClick={() => setValores(sorteador(qtd))}>Gerar números</button>
      </div>
    </div>
  )
}