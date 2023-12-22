import styles from './TestLogin.module.css'

// Utils
import credentials from '../../utils/credentials.js'

const TestLogin = ({ handleTestLogin }) => {

  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Entrar como:</h1>
        <section className={styles.wrapper}>
            {/* Colaborador */}
            <div onClick={() => handleTestLogin(credentials.collaborator)} className={styles.box}>
                <i className="bi bi-person-circle"></i>
                <p>Colaborador</p>
            </div>
            {/* Gerente */}
            <div onClick={() => handleTestLogin(credentials.manager)} className={styles.box}>
                <i className="bi bi-star-fill"></i>
                <p>Gerente</p>
            </div>
        </section>
        <p>apenas para razões de teste.</p>
    </section>
  )
}

export default TestLogin