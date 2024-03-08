import * as S from './styles'

// Components
import { DeliverDate } from '@components'

// Hooks
import useEditable from '@hooks/useEditable'
import useIsAdmin from '@hooks/useIsAdmin'

// Reducer
import { updateTask, updateTasksLocally, setTask } from '@reducers/taskReducer'
import { useDispatch } from 'react-redux'

const ShowDate = ({ task }) => {

    const dispatch = useDispatch();
    const { inputRef, isInput, openEdition, closeEdition,  } = useEditable();
    const { isAdmin } = useIsAdmin();

    const handleSubmit = () =>{
        const payload = {
            ...task,
            deliverTime: null
        }

        dispatch(setTask(payload))
        dispatch(updateTasksLocally(payload))
        dispatch(updateTask(payload))
        closeEdition()
    }

  return (
    <S.ShowDateContainer>
        <S.Label>Data de Entrega</S.Label>
        <S.DateContainer onClick={openEdition} isAdmin={isAdmin}>
            <DeliverDate task={task} />
        </S.DateContainer>
        {
            isInput ?
            <span>
            <S.Button 
            isSave='true' 
            ref={inputRef} 
            onBlur={closeEdition}
            onClick={handleSubmit}>
                Excluir
            </S.Button>

            <S.Button 
            onClick={closeEdition}>
                Cancelar
            </S.Button>
            </span>
            : ''
        }
    </S.ShowDateContainer>
  )
}

export default ShowDate