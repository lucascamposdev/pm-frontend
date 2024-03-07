import * as S from './styles'

// Hooks
import useEditable from '@hooks/useEditable'
import useIsAdmin from '@hooks/useIsAdmin'
import { useState } from 'react';

// Reducer
import { useDispatch } from 'react-redux'
import { updateTask, updateTasksLocally } from '@reducers/taskReducer';

const Description = ({ task }) => {
    const [ description, setDescription ] = useState(task.description)
    const { isAdmin } = useIsAdmin();

    const dispatch = useDispatch();

    const submitFunc = (e) =>{
        e.preventDefault();

        const formData = new FormData(e.target)
        const formPayload = Object.fromEntries(formData)

        const payload = {
            ...task,
            description: formPayload.description
        }

        setDescription(formPayload.description)
        
        dispatch(updateTasksLocally(payload))
        dispatch(updateTask(payload))
        closeEdition();
    }

    const { inputRef, isInput, openEdition, closeEdition, closeEditionWithButtons } = useEditable(submitFunc);

  return (
    <>
    {isInput ?
    <S.Form onSubmit={submitFunc}>
        <S.Description 
        name="description" 
        defaultValue={description} 
        ref={inputRef} 
        onBlur={closeEditionWithButtons} 
        spellCheck='false'
        isAdmin={isAdmin}
        />
        <S.Button isSave='true' type='submit'>Salvar</S.Button>
        <S.Button type='button' onClick={closeEdition}>Cancelar</S.Button>
    </S.Form >
    :
    <S.Description 
    isAdmin={isAdmin}
    readOnly={isAdmin ? false : true}
    onFocus={openEdition} 
    defaultValue={description}
    placeholder={description ? '' : 'Adicionar descrição'}
    />
    }
    </>
  )
}

export default Description