import * as S from './styles'
import AddIcon from '@mui/icons-material/Add';

// React
import { useState, useRef, useLayoutEffect } from 'react'

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '@reducers/taskReducer';

const CreateTask = () => {
    const { project } = useSelector(state => state.projectReducer)
    const [ isOpen, setIsOpen ] = useState(false);
    const inputRef = useRef(null)
    const dispatch = useDispatch();

    useLayoutEffect(() =>{
        if(isOpen) inputRef.current.focus();
    }, [isOpen])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const payload = {
            name: inputRef.current.value,
            id: project.id
        }

        dispatch(createTask(payload))
        setIsOpen(false)
    }

  return (
    <>
    {!isOpen ?
    <S.CreateButton onClick={() => setIsOpen(true)}>
        <AddIcon/>
        Criar Item
    </S.CreateButton>
    :
    <S.Form onSubmit={handleSubmit}>
        <S.Input type='text' ref={inputRef} onBlur={() => setIsOpen(false)}/>
    </S.Form>
    }
    </>
  )
}

export default CreateTask