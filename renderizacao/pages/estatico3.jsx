export function getStaticProps() {
  return {
    revalidate: 7, // Tempo em que é permitido gerar novo valor em requisição; em segundos!
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico3(props) { 
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}