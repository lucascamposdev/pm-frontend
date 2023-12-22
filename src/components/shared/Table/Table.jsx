import styles from './Table.module.css'

// Components
import Modal from '../Modal/Modal'
import TaskRow from '../../task/TaskRow/TaskRow'
import TaskInfo from '../../task/TaskInfo/TaskInfo'

// Hooks
import { useDispatch } from 'react-redux'
import { useState } from 'react'

// Reducer
import { getTask } from '../../../reducers/taskReducer'

const Table = ({ task, tasks, isOwner }) => {

  const dispatch = useDispatch();

  const [openTask, setOpenTask] = useState(false)

  const closeModal = () => {
    setOpenTask(false)
  }

  const openModal = (id) => {
    dispatch(getTask(id))
    setOpenTask(true)
  }

  return (
    <>
      <table className={styles.container}>
        <thead className={styles.thead}>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Criado Em:</th>
            {isOwner && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskRow key={task.id} task={task} openModal={openModal} isOwner={isOwner}/>
          ))}
        </tbody>
      </table>

      {/* Task Modal  */}
      {openTask &&
        <Modal closeModal={closeModal}>
          <TaskInfo task={task}/>
        </Modal>
      }
    </>
  )
}

export default Table