import styles from './ProjectRow.module.css'

// Hooks
import { useState } from 'react';

// Router
import { Link } from 'react-router-dom'

// Functions
import formatDate from '../../../functions/formatDate'

const ProjectRow = ({ project }) => {
  const [isFolderOpen, setFolderOpen] = useState(false);

  const handleMouseEnter = () => {
    setFolderOpen(true);
  };

  const handleMouseLeave = () => {
    setFolderOpen(false);
  };

  return (
    <tr className={styles.row}>
      <td>
      <span className={styles.link_wrapper} >
        {isFolderOpen ? 
          <i className="bi bi-folder2-open"></i>
          : 
          <i className="bi bi-folder"></i>
        }
        <Link to={`/${project.id}`}>
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{project.name}</p>
        </Link>
      </span>
      </td>
      <td>{project.client}</td>
      <td>{formatDate(project.createdAt)}</td>
    </tr>
  )
}

export default ProjectRow