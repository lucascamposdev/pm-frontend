import * as S from './styles'

// Hooks
import useEditable from '@hooks/useEditable'
import useIsAdmin from '@hooks/useIsAdmin'
import { useState } from 'react';

// Reducer
import { useDispatch } from 'react-redux'
import { updateTask, updateTasksLocally } from '@reducers/taskReducer';

const Title = ({ task }) => {
    const [ taskName, setTaskName ] = useState(task.name)
    const { isAdmin } = useIsAdmin();

    const dispatch = useDispatch();

    const submitFunc = (e) =>{
        e.preventDefault();

        const payload = {
            ...task,
            name: e.target.value
        }

        setTaskName(e.target.value)

        dispatch(updateTasksLocally(payload))
        dispatch(updateTask(payload))
        closeEdition();
    }

    const { inputRef, isInput, openEdition, closeEdition } = useEditable(submitFunc);

  return (
    <>
    {isInput ?
    <S.InputTitle 
    name="name" 
    defaultValue={taskName} 
    ref={inputRef} 
    onBlur={submitFunc} 
    spellCheck='false'/>
    :
    <S.Title onClick={openEdition} isAdmin={isAdmin}>{taskName}</S.Title>
    }
    </>
  )
}

export default Title