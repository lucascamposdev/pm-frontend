import styles from './FinalizeTask.module.css'

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Reducer
import { finalize } from '../../../reducers/taskReducer';

const FinalizeTask = () => {

  const { profile } = useSelector(state => state.userReducer)
  const { task, responsable, minorLoading } = useSelector(state => state.taskReducer)

    const dispatch = useDispatch();

    const handleFinalize = (e) =>{
        e.preventDefault();

        dispatch(finalize(task.id))
    }

  return (
    <>
    {!minorLoading && 
    (
      (task.status == 1 && responsable === profile.name) && (
        <span className={styles.info_wrapper}>
          <button className={styles.button} onClick={handleFinalize}>
            Finalizar Task
          </button>
        </span>
      )
    )} 
    </>
  )
}

export default FinalizeTask