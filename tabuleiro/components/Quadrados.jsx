export default function Quadrado(props) {
  return (
    <div style={ {
      backgroundColor: props.color ? "white" : "black",
      width: "70px",
      height: "70px"
    } }></div>
  )
}