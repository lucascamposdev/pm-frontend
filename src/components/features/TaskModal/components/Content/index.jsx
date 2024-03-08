import * as S from './styles'

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Utils
import TaskStatus from '@utils/TaskStatus'

// Components
import { TaskOptions, Responsable, DeliverDate } from '@components'
import Title from './Title/Title';
import Description from './Description/Description';

import { useModal } from '@context/modalContext';
import AddDate from './Date/AddDate';
import ShowDate from './Date/ShowDate';

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
      {task.deliverTime ? <ShowDate task={task}/> : <AddDate task={task}/>}
      <Responsable task={task}/>
    </S.Wrapper>
    </>
  )
}

export default TaskModalContent