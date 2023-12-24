import styles from './Tasks.module.css'

// Components
import Table from '../../components/shared/Table/Table'
import NoTasks from '../../components/shared/NoTasks/NoTasks'

// Hooks
import { useSelector } from 'react-redux'

const Tasks = () => {
  const { user } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)

  return (
    <div className='page'>
      <h1 className={styles.title}>Suas Tasks</h1>
      {user ? 
      <>
        <Table task={task} tasks={user.tasks}/>
        {user.tasks.length === 0 && <NoTasks/>}
      </>
      :
      <table>
        <thead>
        <tr>
          <th>Carregando Tasks...</th>
        </tr>
        </thead>
      </table>
    }
      </div>
  )
}

export default Tasks