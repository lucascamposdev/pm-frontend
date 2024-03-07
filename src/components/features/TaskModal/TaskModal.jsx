import * as S from './styles'

import React from 'react';

// Reducer
import { useDispatch, useSelector } from 'react-redux'
import { getTask, setTask } from '@reducers/taskReducer'

// Hooks
import { useEffect } from 'react';

// Components
import TaskModalContent from './components/Content';

const TaskModal = React.forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const { task, minorLoading: loading } = useSelector(state => state.taskReducer)

  useEffect(() =>{
    dispatch(getTask(props.id))

    return () => dispatch(setTask(null))
  }, [props.id])

  return (
    <S.Container>
      {loading ?
      <p>Aqui Vai Um Loading...</p>
      : task ?
      <TaskModalContent task={task}/>
      :
      <div>error...</div>
      }    
    </S.Container>
  )
})

export default TaskModal