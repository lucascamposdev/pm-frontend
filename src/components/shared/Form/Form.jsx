import styles from './Form.module.css'

const Form = ({ children, handleSubmit }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        {children}
    </form>
  )
}

export default Form