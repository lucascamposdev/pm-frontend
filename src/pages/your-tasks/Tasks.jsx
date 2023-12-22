import styles from './Tasks.module.css'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Reducer
import { getuser } from '../../reducers/userReducer'
import Table from '../../components/shared/Table/Table'

const Tasks = () => {
  const { auth } = useSelector(state => state.authReducer)
  const { user, profile } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)
  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(getuser(auth.id))
  }, [task, profile])


  if(!user){
    return null
  }

  return (
    <div className='page'>
      <h1 className={styles.title}>Suas Tasks</h1>
      <Table task={task} tasks={user.tasks}/>
      </div>
  )
}

export default Tasks