import styles from "./integracao2.module.css" // CSS local deve ter .module junto ao nome. Assim, o nome (styles) vira algo como um objeto e você pode usar a característica do css

export default function integracao2() {
  return (
    <div id={styles.integracao2}>
      <div className={styles.vermelha}>Texto vremeio</div>
      <div className={styles.azul}> Texto azul</div>
      <div className={styles.branca}>Texto branco</div>
    </div>
  )
}