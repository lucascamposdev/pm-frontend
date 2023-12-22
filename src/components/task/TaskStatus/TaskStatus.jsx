import styles from './TaskStatus.module.css'

const TaskStatus = ({ status }) => {
  return (
    <>
        <div className={styles.status_wrapper}>
        <span className={`status ${status == 1 && 'status-1'} ${status == 2 && 'status-2'}`}></span>
        {status == 0 && <p>Não Iniciada</p>}
        {status == 1 && <p>Em progresso...</p>}
        {status == 2 && <p>Finalizada</p>}
    </div>
    </>
  )
}

export default TaskStatus