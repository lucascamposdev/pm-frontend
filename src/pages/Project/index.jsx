import * as S from './style'

// Hooks
import { useEffect } from 'react';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { getProjectById } from '@reducers/projectReducer';
import { allProjectTasks } from '@reducers/taskReducer'

// Router
import { useParams } from 'react-router-dom'

// Components
import ProjectHeader from './components/Header/Header';
import ProjectBody from './components/Body/Body';
import {ProjectPageSkeleton} from '@components';


const ProjectPage = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const { project } = useSelector(state => state.projectReducer)
  const { loading: tasksLoading } = useSelector(state => state.taskReducer)

  const numberId = parseInt(id)
  
  useEffect(() => {
    dispatch(getProjectById(numberId))
    dispatch(allProjectTasks(numberId))
  }, [id])

  if(!project || tasksLoading){
    return <ProjectPageSkeleton/>
  }
  
  return (
    <S.Container>
      <ProjectHeader project={project}/>
      <ProjectBody projectId={numberId}/>
    </S.Container>
  )
}

export default ProjectPage