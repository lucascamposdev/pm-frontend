import * as S from './styles'

// Project Name
import ProjectTitle from './Title/Title'

// Menu
import DotsMenu from './DotsMenu/DotsMenu'

// Reducer
import { useDispatch } from 'react-redux';
import { getProjectAdmin } from '@reducers/projectReducer';

// React
import { useEffect } from 'react';

const ProjectHeader = ({ project }) => {

  const dispatch = useDispatch();

  useEffect(() =>{
    if(project) dispatch(getProjectAdmin(project.userId))
}, [project])

  return (
    <S.Header>
      {project ?
      <>
        <ProjectTitle/>
        <DotsMenu/>
      </>
        :
        <div>Loading...</div>
      }
    </S.Header>
  )
}

export default ProjectHeader