import styles from './DeleteProject.module.css'

// Hooks
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

// Reducer
import { deleteProject } from '../../../reducers/projectReducer'

const DeleteProject = ({ id }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [ showConfirm, setShowConfirm ] = useState(false)

    const handleDelete = (e) =>{
        e.preventDefault()

        dispatch(deleteProject(id))
        navigate('/');
    }

  return (
    <section className={styles.container}>

        {/* Delete Button */}
        <span className={styles.delete} onClick={()=> setShowConfirm(!showConfirm)}>
            Excluir Projeto
        </span>

        {/* Confirm Delete */}
        { showConfirm &&
        <div className={styles.confirm}>
            <p className={styles.confirm_text}>Deseja realmente excluir este projeto?</p>
            <div className={styles.confirm_wrapper}>
                <button onClick={handleDelete}>Confirmar</button>
                <button onClick={() => setShowConfirm(false)}>Cancelar</button>
            </div>
        </div>
        }

    </section>
  )
}

export default DeleteProject