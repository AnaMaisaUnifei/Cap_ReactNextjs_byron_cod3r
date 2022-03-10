/*
 Gerar essa estrutura:
  <div>
    <span>1,</span>
    <span>2,</span>
    <span>3,</span>
    <span>4,</span>
    <span>5,</span>
    <span>6,</span>
    <span>7,</span>
    <span>8,</span>
    <span>9,</span>
    <span>10</span>
  </div>
*/

function lista(){
  const lista = []

  for(let i = 1; i < 10; i++){
    lista.push(<span>{i},</span>)
  }
  return lista
}

export default function mostraLista() {
  
  return (
    <div>
      {lista()}
    </div>
  )
  
}