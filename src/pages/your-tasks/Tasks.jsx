import styles from './Tasks.module.css'

// Hooks
import { useSelector } from 'react-redux'

// Reducer
import Table from '../../components/shared/Table/Table'

const Tasks = () => {
  const { user } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)

  return (
    <div className='page'>
      <h1 className={styles.title}>Suas Tasks</h1>
      {user ? 
      <Table task={task} tasks={user.tasks}/>
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