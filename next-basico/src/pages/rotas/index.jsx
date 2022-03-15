import Link from 'next/link'
import { useRouter } from 'next/router'

export default function rotas() {
  const router = useRouter()

  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 789,
        nome: 'Guigo'
      }
    })
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>

        <Link href="rotas/123/buscar">
          <li>Buscar</li>
        </Link>

        <Link href="rotas/456/José">
          <li>José</li>
        </Link>
      </ul>

      <div style={ {display: "flex", flexDirection: "column", alignItems: "flex-start"} }>
        <button onClick={navegacaoParams}>Params</button>
        <button onClick={() => router.push("rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("rotas/456/Yampi")}>Yampi</button>
      </div>
    </div>
  )
}