import * as S from './styles'

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Utils
import TaskStatus from '@utils/TaskStatus'

// Components
import { TaskOptions, Responsable } from '@components'
import Title from './Title/Title';
import Description from './Description/Description';

import { useModal } from '@context/modalContext';
import Date from './Date/Date';

const TaskModalContent = ({ task }) => {

  const { closeModal } = useModal();

  return (
    <>
    <S.Priority priority={task.priority}/>

    <S.Header>
    <S.Status>{TaskStatus(task.status)}</S.Status>
      <S.IconWrapper>
        <TaskOptions task={task}/>
        <CloseIcon onClick={closeModal} sx={{ borderRadius: '3px'}}/>
      </S.IconWrapper>
    </S.Header>

    <Title task={task}/>
    
    <S.Label>Descrição</S.Label>
    <Description task={task}/>

    <S.Wrapper>
      <Date task={task}/>
      <Responsable task={task}/>
    </S.Wrapper>
    </>
  )
}

export default TaskModalContent