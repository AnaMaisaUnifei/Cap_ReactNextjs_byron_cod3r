import Tabuleiro from "../components/Tabuleiro";

export default function completo() {
  return (
    <div style={ {
      backgroundColor: "grey",
      height: "100vh",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center"
    } }>
      
      <Tabuleiro />

    </div>
  )
}