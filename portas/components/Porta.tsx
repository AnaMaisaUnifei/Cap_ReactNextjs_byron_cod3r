import styles from "../styles/Porta.module.css"
import PortaModel from '../model/porta'

interface PortaProps {
  porta: PortaModel
}

export default function Porta(props: PortaProps) {
  const { porta } = props
  const selecioanda = porta.selecionada ? styles.selecionada : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.batente} ${selecioanda}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}