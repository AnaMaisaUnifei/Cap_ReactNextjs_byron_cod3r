export  function Comp1() {
  return (
    <div>
      <h2>Comp01</h2>
    </div>
  )
}

export const Comp2 = function() {
  return <h2>Comp02</h2>
}

export default function() {
  return (
    <div>
      <h2>Comp03</h2>
    </div>
  )
}

export const Comp4 = () => {
  return <h2>Comp04</h2>
}

const Comp5 = () => <h2>Comp05</h2>

const Comp6 = (props) => (
  <div>
    <h2>Comp06 - {props.msg}</h2>
  </div>
)

export {
  Comp5, Comp6
}