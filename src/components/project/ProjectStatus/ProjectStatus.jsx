import { useDispatch, useSelector } from 'react-redux'
import styles from './ProjectStatus.module.css'
import { finalize } from '../../../reducers/projectReducer';

const ProjectStatus = ({ id }) => {

    const dispatch = useDispatch();
    const { project } = useSelector(state => state.projectReducer)

    const handleFinalize = (e) =>{
       
        dispatch(finalize(id))
    }

  return (
    <div className={styles.container} onClick={handleFinalize}>
        <h5 >Alterar Status do Projeto</h5>
        {
          project.status == 0 ?
          <span className={`status status-1`}></span>:
          <span className={`status status-2`}></span>
        }
    </div>
  )
}

export default ProjectStatus