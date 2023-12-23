import styles from './Tasks.module.css'

// Components
import Table from '../../components/shared/Table/Table'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import getuser from '../../reducers/userReducer'

const Tasks = () => {
  const { auth } = useSelector(state => state.authReducer)
  const { user } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)
  const dispatch = useDispatch();

  useEffect(() =>{
    console.log('despachando tasks do usuario')
    dispatch(getuser(auth.id))
  }, [task])

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