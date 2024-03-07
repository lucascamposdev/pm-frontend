import * as S from './styles'

// Components
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Checkbox from '@mui/material/Checkbox';
import { Menu } from '@components';

// Hooks
import useIsAdmin from '@hooks/useIsAdmin';
import useTaskOptions from '@hooks/useTaskOptions';

// Reducer
import { useSelector } from 'react-redux';

const TaskOptions = ({ task }) => {

  const { isAdmin } = useIsAdmin();
  const { profile } = useSelector(state => state.userReducer)
  const {
    handleDeleteModal,
    handleUpdatePriority,
    handleApplyOnTask,
    handleLeaveTask } = useTaskOptions(task);

  const clickable = <MoreHorizIcon />

  const content =
    <S.Container >
      <S.Form onChange={handleUpdatePriority}>
        <S.FormTitle>Prioridade</S.FormTitle>
        <S.Label disabled={isAdmin ? false : true}
          sx={{ margin: '0' }}
          control={<Checkbox value={0}
            checked={task.priority == 0} />}
          label="Baixa" />

        <S.Label disabled={isAdmin ? false : true}
          sx={{ margin: '0' }}
          control={<Checkbox value={1}
            checked={task.priority == 1} />}
          label="Média" />

        <S.Label disabled={isAdmin ? false : true}
          sx={{ margin: '0' }}
          control={<Checkbox value={2}
            checked={task.priority == 2} />}
          label="Alta" />
      </S.Form>
      {!task.userId ? 
      <>
      <S.Hr/>
      <S.StyledMenuItem onClick={handleApplyOnTask}>Assumir Task</S.StyledMenuItem>
      </>
      : profile && task.userId == profile.id ?
      <><S.Hr/> 
      <S.StyledMenuItem onClick={handleLeaveTask}>Abandonar Task</S.StyledMenuItem></> : ''}
      
      {isAdmin && <S.Hr />}
      {isAdmin && <S.StyledMenuItem onClick={handleDeleteModal}>Excluir</S.StyledMenuItem>}
    </S.Container>

  const containerStyle = {
    marginLeft: 'auto',
  }
  
  const clickableStyle = {
    width: '30px',
    borderRadius: '5px',
  }

  return (
    <Menu
      clickable={clickable}
      content={content}
      containerStyle={containerStyle}
      clickableStyle={clickableStyle} />
  )
}

export default TaskOptions;