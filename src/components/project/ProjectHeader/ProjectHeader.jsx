import styles from './ProjectHeader.module.css'

// Router
import { Link } from 'react-router-dom'

// Hooks
import { useSelector } from 'react-redux'

// Components
import EditProject from '../EditProject/EditProject'

const ProjectHeader = ({ project }) => {
    
    const { profile } = useSelector(state => state.userReducer)
  
  if(!profile){
    return ('')
  }
    
  return (
    <header className={styles.header}>

        {/* Back Arrow */}
        <Link to='/'>
        <i className={`bi bi-arrow-left-circle ${styles.back_arrow}`}></i>
        </Link>

        {/* Title */}
        <span className={styles.title_wrapper}>
            <h1 className={styles.title}>{project.name}</h1>
            {profile.id == project.userId && <EditProject project={project}/>}
        </span>

        {/* Client Name */}
        <p className={styles.subtitle}>{project.client}</p>
    </header>
  )
}

export default ProjectHeader