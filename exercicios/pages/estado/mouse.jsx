import { useState } from "react"

export default function mouse() {
  const [x, setX] = useState(0)

  const [y, alterarY] = useState(0)

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  } 

  function quandoMover(ev) {
    setX(ev.clientX)
    alterarY(ev.clientY)
    console.log("Valor alterado")
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <h1>Eixo X: {x}</h1>
      <h1>Eixo Y: {y}</h1>
    </div>
  )
}