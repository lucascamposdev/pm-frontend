import * as S from './styles'

// Project Name
import ProjectTitle from './Title/Title'

// Menu
import DotsMenu from './DotsMenu/DotsMenu'

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { getProjectAdmin } from '@reducers/projectReducer';

// React
import { useEffect } from 'react';

const ProjectHeader = () => {

  const { project } = useSelector(state => state.projectReducer)
  const dispatch = useDispatch();

  useEffect(() =>{
    if(project) dispatch(getProjectAdmin(project.userId))
}, [project])

  return (
    <S.Header>
      {project ?
      <>
        <ProjectTitle project={project}/>
        <DotsMenu/>
      </>
        :
        <div>Loading...</div>
      }
    </S.Header>
  )
}

export default ProjectHeader