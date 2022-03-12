import Item from '../../components/Item'
import ListaComum from '../../components/Lista'

export default function Lista(props) {
  return (
    <div>
      <ListaComum>
        <Item conteudo={"Item"}/>
        <Item conteudo={"Teste"}/>
        <Item conteudo={"Da"}/>
        <Item conteudo={"Ana"}/>
      </ListaComum>
    </div>
  )
}