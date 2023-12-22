import styles from './ProjectPage.module.css'

// Components
import ProjectInfo from '../../components/project/ProjectInfo/ProjectInfo';
import ProjectHeader from '../../components/project/ProjectHeader/ProjectHeader';
import CreateTask from '../../components/task/CreateTask/CreateTask';
import Table from '../../components/shared/Table/Table';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';

// Hooks
import { useEffect } from 'react';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../reducers/projectReducer';

// Router
import { useParams } from 'react-router-dom'

import { allProjectTasks } from '../../reducers/taskReducer';

const ProjectPage = () => {

  const { id } = useParams();
  const { project } = useSelector(state => state.projectReducer)
  const { user } = useSelector(state => state.userReducer)
  const { task, tasks } = useSelector(state => state.taskReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(id))
  }, [])
  
  useEffect(() => {
    if(project.id){
      dispatch(allProjectTasks(project.id))
    }
  }, [project])

  if(!project.id || !user){
    return (
      <main className="page">
        <LoadingSpinner/>
      </main>
    )
  }

  return (
    <main className="page">
        <ProjectHeader project={project} />
        <hr/>
        <ProjectInfo project={project} />

        {user && user.id === project.userId ? <CreateTask/> : ''}

        <Table task={task} tasks={tasks} isOwner={user.id == project.userId}/>
    </main>
  )
}

export default ProjectPage