import styles from './Tasks.module.css'
import { Page } from '@styles/Container'

// Components

// Hooks
import { useSelector } from 'react-redux'

const Tasks = () => {
  const { user } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)

  return (
    <Page>
      <h1 className={styles.title}>Suas Tasks</h1>

      {user && user.name}
     
    </Page>
  )
}

export default Tasks