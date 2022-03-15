import { useRouter } from "next/router"
// params?nome=Yampi&id=123 --- parâmetros pela URL

export default function params() {
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome
  
  return (
    <div>
      <h1>Rotas Params | {id}: {nome}</h1>
    </div>
  )
}