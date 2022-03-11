import Quadrado from "../components/Quadrados"

export default function fila(props) {
  const fila = []
  let n

  if (props.preto){
    fila.push(<Quadrado color={false}/>)
    n = 0
  } else {
    fila.push(<Quadrado color/>)
    n = 1
  }

  for (let i = 1; i <= 7; i++) {
    if (n == 1) {
      fila.push(<Quadrado color={false}/>)
      n = 0
    } else {
      fila.push(<Quadrado color/>)
      n = 1
    }
  }

  return fila
}