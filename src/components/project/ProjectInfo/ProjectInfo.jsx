import styles from './ProjectInfo.module.css'


// Components
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner'
// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Reducer
import { getmanager } from '../../../reducers/userReducer'

// Functions
import formatDate from '../../../functions/formatDate';

const ProjectInfo = ({ project }) => {

    const { manager } = useSelector(state => state.userReducer)
    const { loading } = useSelector(state => state.projectReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getmanager(project.userId))      
    }, [])

    return (
        <section className={styles.info_container}>
            <div className={styles.info_box}>
                <span>
                    <i className="bi bi-bar-chart-fill"></i>
                    Status
                </span>
                <div>
                    {project.status == 0 ?
                    <> 
                    <span className={`status status-1`}></span>
                    <p>Em andamento...</p> 
                    </>
                     :
                     <>
                     <span className={`status status-2`}></span>
                     <p>Finalizado</p> 
                     </>
                     }
                </div>
            </div>
            <div className={styles.info_box}>
                <span>
                    <i className="bi bi-person-workspace"></i>
                    Gerente
                </span>
                {!loading ?
                <p>{manager ? manager.name : ''}</p> : 
                <LoadingSpinner />
                }
            </div>
            <div className={styles.info_box}>
                <span>
                    <i className="bi bi-calendar3"></i>
                    Data de Criação
                </span>
                <p>{formatDate(project.createdAt)}</p>
            </div>
        </section>
    )
}

export default ProjectInfo