import * as S from './styles'

// React
import { useState, useEffect } from 'react'

// Components
import CreateProject from '../CreateProject'
import SortBy from './SortBy'

// Router
import { Link } from 'react-router-dom'

const HomeGrid = ({ projects, projectsLoading }) => {

  const [ list , setList ] = useState(projects)

  useEffect(() => {
    setList(projects);
  }, [projects]);

  return (
    <>
    <SortBy projects={projects} setList={setList} isLoading={projectsLoading}/>
    <S.Container>
        <CreateProject/>
        {projectsLoading ? 
        <S.Skeleton/> 
        :
        list.map((project, index) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <S.Project indexLine={index}>
              <S.Icon/>
                {project.name}
            </S.Project>
            </Link>
        ))
      }
    </S.Container>
    </>
  )
}

export default HomeGrid