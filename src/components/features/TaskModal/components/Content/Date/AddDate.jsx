import { useState } from 'react'
import * as S from './styles'

// Components
import { DatePicker } from '@components'

// Reducer
import { useDispatch } from 'react-redux';
import { updateTask, updateTasksLocally, setTask } from '@reducers/taskReducer'

// Hooks
import useIsAdmin from '@hooks/useIsAdmin'

const AddDate = ({ task }) => {
    const { isAdmin } = useIsAdmin();
    const [ dateVal, setDateVal ] = useState();
    const [ isOpen, setIsOpen ] = useState();
    const dispatch = useDispatch();

    const handleDatePicker = (e) =>{
        const deliverDate = new Date(e.$d)

        if (!isNaN(deliverDate.getTime())) {
            const formattedDate = deliverDate.toISOString().split('T')[0];
            setDateVal(formattedDate)
        } else {
            console.log("Data inválida");
        }
    }

    const handleSubmit = () =>{
        if(!dateVal){
            setIsOpen(false)
            return
        }

        const payload = {
            ...task,
            deliverTime: dateVal + 'T00:00:00.000Z' 
        }

        dispatch(setTask(payload))
        dispatch(updateTasksLocally(payload))
        dispatch(updateTask(payload))
        setIsOpen(false)
    }

    if(!isAdmin) return null;
    
    return (
    <div>
        {!isOpen ?
        <S.AddDate onClick={()=> setIsOpen(true)}>Adicionar Data de Entrega</S.AddDate>
        :
        <S.Wrapper>
            <DatePicker onChangeFunc={handleDatePicker}/>
            <span>
            <S.Button onClick={handleSubmit} isSave='true'>Salvar</S.Button>
            <S.Button onClick={()=> setIsOpen(false)}>Cancelar</S.Button>
            </span>
        </S.Wrapper>
        }
    </div>
  )
}

export default AddDate;