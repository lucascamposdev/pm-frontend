import * as S from './styles'

// React
import { useEffect } from 'react'

// Components
import Task from '../Task/Task'

import {useDroppable} from '@dnd-kit/core';

const ProjectColumn = ({ title, data, children, id }) => {

  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

  useEffect(() => {
    return () => data = []
  })


  return (
    <S.Column ref={setNodeRef}>
      <S.Header>
        <S.Title>{title}</S.Title>
        {children}
      </S.Header>

      {data.map(item => (
        <Task key={item.id} item={item} />
        ))}
      
    </S.Column>
  )
}

export default ProjectColumn