import styles from './ProjectPage.module.css'

// Components
import ProjectInfo from '../../components/project/ProjectInfo/ProjectInfo';
import ProjectHeader from '../../components/project/ProjectHeader/ProjectHeader';
import CreateTask from '../../components/task/CreateTask/CreateTask';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';

// Hooks
import { useEffect, useState } from 'react';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { setProject } from '../../reducers/projectReducer'

// Router
import { useParams } from 'react-router-dom'

import ProjectTasks from '../../components/project/ProjectTasks/ProjectTasks';

const ProjectPage = () => {

  const { id } = useParams();
  const { profile } = useSelector(state => state.userReducer)
  const { project, projects } = useSelector(state => state.projectReducer)
  const dispatch = useDispatch()
  
  const selectedProject = projects.find(project => project.id == id)

  useEffect(() => {
    dispatch(setProject(selectedProject))
  }, [projects])

  if(!project || !profile){
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

        {profile && profile.id === project.userId ? <CreateTask/> : ''}
        
        { selectedProject.id == project.id &&
        <ProjectTasks project={project}/>  
        }
       
    </main>
  )
}

export default ProjectPage