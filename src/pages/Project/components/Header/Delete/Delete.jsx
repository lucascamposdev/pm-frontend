
import * as S from './styles'

// Reducer
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject } from '@reducers/projectReducer'

// Router
import { useNavigate } from 'react-router-dom'

// Context
import { useModal} from '@context/modalContext'

// Components
import { ConfirmModalContent } from '@components'


const DeleteProject = () => {

  const { project } = useSelector(state => state.projectReducer)
  const { openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteProject(project.id))
    navigate('/')
    closeModal();
  }

  const handleModal = () =>{
    openModal(<ConfirmModalContent handleSubmit={handleDelete} title='Projeto'/>)
  }
  
  return (
    <S.DeleteButton onClick={handleModal}>
      Excluir Projeto
    </S.DeleteButton>
  )
}

export default DeleteProject