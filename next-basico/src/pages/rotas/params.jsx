import { useRouter } from "next/router"
import Link from "next/link"
// params?nome=Yampi&id=123 --- parâmetros pela URL

export default function params() {
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome
  
  return (
    <div>
      <h1>Rotas Params | {id}: {nome}</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}