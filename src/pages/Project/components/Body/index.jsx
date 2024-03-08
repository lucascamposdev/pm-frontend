import * as S from './styles'

// Components
import ProjectColumn from './Column/Column';
import CreateTask from './CreateTask/CreateTask';
import Task from './Task/Task';

// Hooks
import useIsAdmin from '@hooks/useIsAdmin'

// Reducer
import {  useDispatch, useSelector } from 'react-redux'
import { changeTaskStatus, changeTasksLocally } from '@reducers/taskReducer';

// Drag n' Drop
import { DndContext, closestCorners, useSensor, useSensors, PointerSensor, TouchSensor } from '@dnd-kit/core';
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

// React
import { useState } from 'react';

const ProjectBody = () => {

  const dispatch = useDispatch();
  const { isAdmin } = useIsAdmin();
  const { tasks } = useSelector(state => state.taskReducer)
  const [ activeItem, setActiveItem ] = useState(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8,
    }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 8,
    }
  })

  const sensors = useSensors(
    pointerSensor,
    touchSensor
  );

  const handleDragEnd = (event) => { 
    const { active, over } = event 

    // Dropped on the same column
    if(active.data.current.status === over.id) return null
    
    const payload = { 
      id: active.id,
      newStatus: over.id
    }

    // Different Column
    setActiveItem(null)
    dispatch(changeTasksLocally({...active.data.current, status: payload.newStatus}))
    dispatch(changeTaskStatus(payload))
  }

  const handleDragStart = (event) => { 
    const { active } = event
    setActiveItem(active.data.current)
  }

  return (
    <S.Container>
      <DndContext 
      modifiers={[restrictToWindowEdges]}
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>

        <ProjectColumn 
        id={0}
        title='Não Iniciado' 
        data={tasks.filter(t => t.status === 0)}>
        {isAdmin && <CreateTask/>}
        </ProjectColumn>

        <ProjectColumn 
        id={1}
        title='Em Andamento' 
        data={tasks.filter(t => t.status === 1)}/>

        <ProjectColumn 
        id={2}
        title='Finalizado' 
        data={tasks.filter(t => t.status === 2)}/>

        <S.StyledDragOverlay>
          {activeItem ? <Task item={activeItem}/> : null}
        </S.StyledDragOverlay>

      </DndContext>

    </S.Container>
  )
}

export default ProjectBody