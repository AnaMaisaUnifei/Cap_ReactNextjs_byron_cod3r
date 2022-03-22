export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
} // No modo de desenvolvimento, ele retorna um número a cada requisição(refresh). Mas, no modo de produção (npm run build > npm start), ele gera apenas na primeira requisição. 

export default function Estatico2(props) { 
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}