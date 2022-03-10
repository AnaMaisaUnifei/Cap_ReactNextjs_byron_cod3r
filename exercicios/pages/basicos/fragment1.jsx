// Para colocar várias tags de html, todas elas devem estar dentro de uma mesma div ou dentro de um React.Fragment importado. A única diferença entre os dois é qeu o escopo terá ou não uma div.
import React from 'react'

export default function fragment() {
  return (
    <React.Fragment> 
      <h1>Título</h1>
      <h2>Subtítulo</h2>
    </React.Fragment>
  )
}