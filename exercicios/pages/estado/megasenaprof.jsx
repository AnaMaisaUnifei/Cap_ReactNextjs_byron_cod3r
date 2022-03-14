import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasenaprof() {
  const [qtd, setQtd] = useState(6)
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    setNumeros(mega())
  }, [])

  function renderizarNumeros() {
    return numeros.map(n => <NumeroDisplay key={n} numero={n}/>)
  }

  return (
    <div  style={ {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    } }>
      <h1>Mega-Sena do Professor</h1>

      <div style={{flexWrap: "wrap", display: "flex"}}>
        {renderizarNumeros()}
      </div>

      <div>
        <input type="number" min={6} max={20} value={qtd} onChange={ev => setQtd(ev.target.value)}/>
        <button onClick={() => setNumeros(mega(qtd))}>Gerar Aposta</button>
      </div>

    </div>
  )
}