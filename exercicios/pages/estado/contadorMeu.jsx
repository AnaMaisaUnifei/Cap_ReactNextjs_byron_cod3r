import { useState } from "react"

export default function contador() {
  const [valor, alterarValor] = useState(0)

  function incrementar() {
    valor++
    alterarValor(valor)
  }

  function decrementar() {
    valor--
    alterarValor(valor)
  }

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {valor}</div>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
    </div>
  )
}