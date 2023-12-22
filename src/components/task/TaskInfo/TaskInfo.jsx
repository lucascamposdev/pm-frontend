import styles from './TaskInfo.module.css'

// Functions
import formatDate from '../../../functions/formatDate'

// Components
import FinalizeTask from '../FinalizeTask/FinalizeTask'
import TaskStatus from '../TaskStatus/TaskStatus'
import TaskResponsable from '../TaskResponsable/TaskResponsable'
import TaskHeader from '../TaskHeader/TaskHeader'

// Hooks
import { useSelector } from 'react-redux'

const TaskInfo = ({ task }) => {

    const { loading } = useSelector(state => state.taskReducer)
    return (
        <>
        <h1>Task Info</h1>
            <form>

                <div className={styles.header}>
                    <TaskHeader/>
                </div>

                {/* Nome */}
                <label>Task</label>
                <p className={styles.task_data}>{loading ? "Carregando..." : task.name}</p>
                
                {/* Descrição */}
                {task.description &&
                <>
                <label>Descrição</label>
                <p className={styles.task_data}>{loading ? "Carregando..." : task.description}</p>
                </>
                }

                {/* Footer */}
                    <div className={styles.footer}>
                    <span className={styles.info_wrapper}>
                        {loading ? "Carregando" :
                            <TaskStatus status={task.status}/>
                        }
                    </span>
                    <div className={styles.info_grid}>                      
                        <span className={styles.info_wrapper}>
                            <TaskResponsable/>
                        </span>
                        <span className={styles.info_wrapper}>
                            <h5>Data de Criação:</h5>
                        {loading ? "Carregando" : 
                            <p>{formatDate(task.createdAt)}</p>
                        }
                        </span>
                    </div>
                        {!loading && <FinalizeTask/>}
                </div>
                
            </form>
        </>
    )
}

export default TaskInfo