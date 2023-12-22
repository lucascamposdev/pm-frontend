
// Components
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner'
import ApplyTask from '../ApplyTask/ApplyTask'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import { getResponsable } from '../../../reducers/taskReducer'

const TaskResponsable = () => {

    const { task, responsable, minorLoading, loading } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            dispatch(getResponsable(task.userId));
        }
    }, [task]);

    if(!task.name){
      return ('Loading...')
    }

  return (
    <>                            
    <h5>Responsável:</h5>
    {!minorLoading ?
    <p>{task.userId ? responsable : <ApplyTask id={task.id} />}</p>
    :
    <LoadingSpinner/>
    }
    </>
  )
}

export default TaskResponsable