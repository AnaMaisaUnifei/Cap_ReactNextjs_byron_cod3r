export default function SomaUm(props) {
  //props.numero++ // Não é possível modificar um dado de uma propriedade, elas são somente leitura. Pode-se fazer operações com ele no JS, como variável.
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  )
}