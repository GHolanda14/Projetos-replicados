import styles from "./Home.module.css"
import Ganchos from "../../components/Ganchos/ListaGanchos"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Hooks do React</h1>
        <h3>Vamos aprender sobre os Hooks na prática?</h3>
      </div>
      <main className={styles.hooks}>
          <h3>Escolha qual hook você deseja praticar:</h3>
          <Ganchos/>
      </main>
    </div>
  )
}

export default Home