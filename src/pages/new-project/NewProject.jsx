import { useDispatch, useSelector } from 'react-redux'
import styles from './NewProject.module.css'

// Components
import FormMessage from '../../components/shared/FormMessage/FormMessage';

// Functions
import capitalizeInput from '../../functions/capitalizeInput';

// Router
import { Link } from 'react-router-dom'
import { create, resetStates } from '../../reducers/projectReducer';
import { useEffect } from 'react';


const NewProject = () => {

  const dispatch = useDispatch();
  const { error, success } = useSelector(state => state.projectReducer)

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === 'string') {
        payload[key] = capitalizeInput(value);
      }
    }

    dispatch(create(payload))
  }

  useEffect(() =>{
    dispatch(resetStates())
  }, [])

  return (
    <div className='page'>
        <header className={styles.header}>
            <div>
            <Link to='/'>
                <i className={`bi bi-arrow-left-circle ${styles.back_arrow}`}></i>
            </Link>
            <h1>Criar Projeto</h1>
            </div>
        <hr />
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Nome do Projeto:</label>
        <input type="text" name='name'/>

        <label>Cliente:</label>
        <input type="text" name='client'/>

        <button className='page-button'>Criar Projeto</button>

        {error && error.map((msg, i) => <FormMessage key={i} message={msg} type='error'/>)}
        {success && <FormMessage message={['Projeto criado com sucesso.']} type='success'/>}
        
      </form>
    </div>
  )
}

export default NewProject