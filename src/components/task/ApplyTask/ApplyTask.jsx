import styles from './ApplyTask.module.css'

// Hooks
import { useDispatch } from 'react-redux';

// Reducer
import { applyTask } from '../../../reducers/taskReducer';

const ApplyTask = ({ id }) => {
    const dispatch = useDispatch();

    const handleClick = (e) =>{
        e.preventDefault();

        dispatch(applyTask(id))
    }

  return (
    <button className={styles.button} onClick={handleClick}>
        Assumir Task
    </button>
  )
}

export default ApplyTask