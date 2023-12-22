import styles from './CreateTask.module.css'

// Components
import LoadingButton from '../../shared/LoadingButton/LoadingButton'
import FormMessage from '../../shared/FormMessage/FormMessage'

// Functions
import capitalizeInput from '../../../functions/capitalizeInput'

// Hooks
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Reducer
import { createTask, resetStates } from '../../../reducers/projectReducer'
import Modal from '../../shared/Modal/Modal'

const CreateTask = () => {

    const dispatch = useDispatch();

    const { project, loading, error, success } = useSelector(state => state.projectReducer)

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [ openEdit, setOpenEdit ] = useState(false)

    const closeModal = () =>{
        setOpenEdit(false)
        dispatch(resetStates())
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: capitalizeInput(taskName),
            id: project.id,
        };

        if(taskDescription){
            payload.description = taskDescription
        }

        dispatch(createTask(payload));

        setTaskName('');
        setTaskDescription('');
    };
    
  return (
    <section className={styles.container}>
      <hr className='hr-invisible'/>

        {/* Header */}
        <header className={styles.header} onClick={() => setOpenEdit(true)}>
            <p>Adicionar Task</p>
            <i className="bi bi-plus-square"></i>         
        </header>

        {/* Form */}
        {openEdit &&
        <Modal closeModal={closeModal}>         
            <h1>Adicionar Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type="text" 
                value={taskName} onChange={(e) => setTaskName(e.target.value)}/>

                <label>Descrição <span className={styles.optional}>(Opcional)</span></label>
                <textarea rows="1"
                value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}>
                </textarea>

                <LoadingButton name={'Enviar'} loading={loading}/>

                {error && error.map((error, i) => <FormMessage key={i} message={error} type='error'/>)}
                {success && <FormMessage message={['Task criada com sucesso.']} type='success'/>}
            </form>
        </Modal>
        }
    </section>
  )
}

export default CreateTask