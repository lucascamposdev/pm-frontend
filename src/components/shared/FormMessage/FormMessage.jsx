import styles from './FormMessage.module.css'

const FormMessage = ({ message, type }) => {
  return (
    <div className={`${styles.message} ${styles[type]}`}>
      {message}
    </div>
  )
}

export default FormMessage