import styles from './Home.module.css'

// Components
import ProjectRow from '../../components/project/ProjectRow/ProjectRow'
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import { getProjects } from '../../reducers/projectReducer'

// Router
import {Link} from 'react-router-dom'

const Home = () => {

  const { projects, loading } = useSelector(state => state.projectReducer)

  return (
    <div className='page'>

      {/* Page Name */}
      <header>
        <div>
          <h1 className={styles.title}>Projetos</h1>
          <Link to='/new' className={styles.link}>
            <button className='page-button'>Novo Projeto</button>
          </Link>
        </div>
      </header>


    {loading? 
    <table>
      <thead>
        <tr>
          <th>Carregando Projetos...</th>
        </tr>
      </thead>
    </table>
    :
      <table>
        <thead>
          <tr>
            <th>Projeto</th>
            <th>Cliente</th>
            <th>Criado Em:</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => 
            (<ProjectRow key={project.id} project={project} />)
            )}
        </tbody>
      </table>
          }
      
    </div>
  )
}

export default Home