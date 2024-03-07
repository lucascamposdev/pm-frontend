import * as S from './styles'

// Drag and Drop
import { useDraggable } from '@dnd-kit/core';

// Components
import { TaskModal, TaskOptions, Responsable } from '@components';

// Context
import { useModal } from '@context/modalContext';

const Task = ({ item }) => {

  const { openModal } = useModal();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: item,
  });

  const extendedListeners = {
    ...listeners,
    onClick: (e) => {
      if (e.target === e.currentTarget ||
        e.target.dataset.clickable === 'true') {
        openModal(<TaskModal id={item.id}/>);
      }
    },
  };

  return (
    <S.Task ref={setNodeRef} {...extendedListeners} {...attributes}>
      <S.Priority priority={item.priority}/>
      <S.Wrapper data-clickable='true'>
        <S.Name data-clickable='true'>{item.name}</S.Name>
        <TaskOptions task={item} />
      </S.Wrapper>
      <S.Wrapper data-clickable='true'>
          <Responsable task={item}/>
      </S.Wrapper>
    </S.Task>
  )
}

export default Task