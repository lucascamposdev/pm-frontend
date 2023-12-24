import styles from './TaskRow.module.css'

// Functions
import formatDate from '../../../functions/formatDate'
import DeleteTask from '../DeleteTask/DeleteTask'

const TaskRow = ({ task, openModal, isOwner }) => {
  return (
    <>
    {/* Row */}
    <tr className={styles.row}>

        <td>
          <span className={`status status-${task.status}`}></span>
        </td>

        <td 
        className={task.status != 0 ? styles.opacityTask : ''}
        onClick={() => openModal(task.id)}>
        {task.name}
        </td>

        <td>{formatDate(task.createdAt)}</td>

        {isOwner && <td><DeleteTask id={task.id}/></td>}
    </tr>
    </>
  )
}

export default TaskRow