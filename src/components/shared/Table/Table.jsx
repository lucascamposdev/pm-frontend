import styles from './Table.module.css'

// Components
import Modal from '../Modal/Modal'
import TaskRow from '../../task/TaskRow/TaskRow'
import TaskInfo from '../../task/TaskInfo/TaskInfo'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// Reducer
import { setTask } from '../../../reducers/taskReducer'

const Table = ({ task, tasks, isOwner }) => {

  const dispatch = useDispatch();

  const [openTask, setOpenTask] = useState(false)

  const closeModal = () => {
    setOpenTask(false)
  }

  const openModal = (id) => {
    const selectedTask = tasks.find(task => task.id == id)
    dispatch(setTask(selectedTask))
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