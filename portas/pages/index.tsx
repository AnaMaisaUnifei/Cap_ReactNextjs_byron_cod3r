import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#C71585">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtd Portas?" value={qtdPortas} onChange={novaQtd => setQtdPortas(novaQtd)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
        <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
