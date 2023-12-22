import styles from './EditProject.module.css'

// Components
import LoadingButton from '../../shared/LoadingButton/LoadingButton';
import FormMessage from '../../shared/FormMessage/FormMessage';
import Modal from '../../shared/Modal/Modal';
import DeleteProject from '../DeleteProject/DeleteProject';

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Reducer
import { update, resetStates } from '../../../reducers/projectReducer';
import ProjectStatus from '../ProjectStatus/ProjectStatus';

const EditProject = ({ project }) => {

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(state => state.projectReducer)
  const [ name, setName ] = useState()
  const [ client, setClient ] = useState()

  const [ openEdit, setOpenEdit ] = useState(false)

  const closeModal = () =>{
      setOpenEdit(false)
      dispatch(resetStates())
  }

  useEffect(() =>{
    setName(project.name)
    setClient(project.client)
  },[project])

  const handleSubmit = (e) =>{
      e.preventDefault();

      const payload = {
          id: project.id,
          name,
          client
      }

      dispatch(update(payload))
  }

  return (
    <section>
      <p className={styles.edit} onClick={()=> setOpenEdit(true)}>
        <i className="bi bi-gear-fill"></i> Editar
      </p>
      {openEdit &&
        <Modal closeModal={closeModal}>
            <h1>Editar Projeto</h1>
            <ProjectStatus id={project.id}/>

            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>        
                <label>Cliente</label>
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)}/>                
                
                <LoadingButton name={'Salvar Alterações'} loading={loading}/>

                {error && error.map((error, i) => <FormMessage key={i} message={error} type='error'/>)}
                {success && <FormMessage message={['Projeto atualizado com sucesso.']} type='success'/>}
                <DeleteProject id={project.id}/>
            </form>
        </Modal>
      }
    </section>
  )
}

export default EditProject