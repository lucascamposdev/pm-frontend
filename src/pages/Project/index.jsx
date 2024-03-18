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
import Board from './components/Board';
import {ProjectPageSkeleton} from '@components';
import ErrorPage from '@pages/ErrorPage'

const ProjectPage = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const { project, error, loading } = useSelector(state => state.projectReducer)
  const { loading: tasksLoading } = useSelector(state => state.taskReducer)

  useEffect(() => {
    dispatch(getProjectById(id))
    dispatch(allProjectTasks(id))
  }, [id])

  if(loading || tasksLoading){
    return <ProjectPageSkeleton/>
  }
  
  if(!project && !loading && !tasksLoading && error){
    return <ErrorPage/>
  }

  if(!project){
    return <ProjectPageSkeleton/>
  }
  
  return (
    <S.Container>
      <ProjectHeader/>
      <Board/>
    </S.Container>
  )
}

export default ProjectPage